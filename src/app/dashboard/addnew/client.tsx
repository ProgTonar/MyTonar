'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import styles from './addnew.module.scss'
import Quill from 'quill'
import "quill/dist/quill.snow.css"
import axios from 'axios'


const AddNews = () => {
  const router = useRouter()
  const editorRef = useRef<HTMLDivElement>(null)
  const quillRef = useRef<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    content: '',
    description: '',
    imageSrc: ''
  })

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
      ];

      quillRef.current = new Quill(editorRef.current, {
        modules: {
          toolbar: toolbarOptions
        },
        theme: 'snow'
      });

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

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    setIsUploading(true)
    try {
      const response = await axios.post('http://localhost:9092/api/images/upload', formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true
        } 

      )
      setImageUrl(response.data.image_url)
    } catch (error) {
      
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) uploadImage(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const token = localStorage.getItem('access_token');
        
        if (!token) {
          throw new Error('Токен авторизации не найден');
        }
      const response = await axios.post(
        'http://localhost:9091/api/news_add',
        {
          title_one: formData.title,
          title_two: formData.subtitle,
          content: formData.content,
          description: formData.description,
          imageSrc: imageUrl
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        }
      );
  
      if (response.status >= 200 && response.status < 300) {
        router.push('/dashboard/news');
      } else {
        throw new Error('Ошибка создания новости');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось создать новость');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добавить новость</h1>
      
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
          <input
            type="file"
            name="imageSrc"
            value={formData.imageSrc}
            onChange={handleImageChange}
            className={styles.input}
          />
        </div>
       
        {imageUrl && (
          <div className={styles.formGroup}>
          <input
            type="text"
            name="imageSrc"
            value={imageUrl}
            className={styles.input}
          />
        </div>
        )}
        

        <div className={styles.buttonGroup}>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? 'Создание...' : 'Создать новость'}
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

export default AddNews