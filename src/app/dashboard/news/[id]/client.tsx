'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import type { INews } from "@/type/Types"
import styles from './edit.module.scss'
import Quill from 'quill'
import "quill/dist/quill.snow.css"
import axios from 'axios'

interface EditNewProps {
  news: INews
}

const EditNew = ({ news }: EditNewProps) => {
  const router = useRouter()
  const editorRef = useRef<HTMLDivElement>(null)
  const quillRef = useRef<Quill | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: news.title_one || '',
    subtitle: news.title_two || '',
    content: news.content || '',
    description: news.description || '',
    imageSrc: news.image_url|| ''
  })

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
      ];

      quillRef.current = new Quill(editorRef.current, {
        modules: {
           
          toolbar: toolbarOptions
        },
        theme: 'snow'
      });

      // Устанавливаем начальное содержимое
      if (formData.content) {
        quillRef.current.root.innerHTML = formData.content;
      }

      // Подписываемся на изменения
      quillRef.current.on('text-change', () => {
        if (quillRef.current) {
          setFormData(prev => ({
            ...prev,
            content: quillRef.current?.root.innerHTML || ''
          }))
        }
      })
    }

    return () => {
      if (quillRef.current) {
        quillRef.current = null
      }
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const token = localStorage.getItem('access_token');
      
      const response = await axios.put(
        `http://localhost:9092/api/news/edit_detail`,
        {
          id: news.id,  
          title_one: formData.title,
          title_two: formData.subtitle,
          content: formData.content,
          description: formData.description,
          imageSrc: formData.imageSrc,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );
  
      if (response.status >= 200 && response.status < 300) {
        router.push('/dashboard/news');
      } else {
        throw new Error('Ошибка сохранения');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось сохранить изменения');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Редактировать новость</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Заголовок</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Подзаголовок</label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Краткое описание</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Содержание</label>
          <div className={styles.editor}>
            <div ref={editorRef}></div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Ссылка на изображение</label>
          <input
            type="text"
            name="imageSrc"
            value={formData.imageSrc}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? 'Сохранение...' : 'Сохранить'}
          </button>
          
          <button
            type="button"
            onClick={() => router.push('/dashboard/news')}
            className={styles.cancelButton}
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditNew