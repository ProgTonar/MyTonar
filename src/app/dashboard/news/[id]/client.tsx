"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import type { INews } from "@/type/Types";
import styles from "./edit.module.scss";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface EditNewProps {
  news: INews;
}

const EditNew = ({ news }: EditNewProps) => {
  const router = useRouter();
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(
    news.image_url?.split("/")?.pop() || null
  );
  const [formData, setFormData] = useState({
    title: news.title_one || "",
    subtitle: news.title_two || "",
    content: news.content || "",
    description: news.description || "",
    imageSrc: news.image_url || "",
  });

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      const toolbarOptions = [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ["clean"],
      ];

      quillRef.current = new Quill(editorRef.current, {
        modules: { toolbar: toolbarOptions },
        theme: "snow",
      });

      if (formData.content) {
        quillRef.current.root.innerHTML = formData.content;
      }

      quillRef.current.on("text-change", () => {
        if (quillRef.current) {
          setFormData((prev) => ({
            ...prev,
            content: quillRef.current?.root.innerHTML || "",
          }));
        }
      });
    }

    return () => {
      if (quillRef.current) {
        quillRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (news.image_url) {
      setPreviewUrl(news.image_url);
    }
  }, [news.image_url]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setFormData((prev) => ({ ...prev, imageSrc: "" }));
    }
  };

  const handleDeleteImage = async () => {
    if (formData.imageSrc && !file) {
      try {
        setIsLoading(true);
        await axios.delete("http://localhost:9092/api/news/delete_image", {
          data: { id: news.id },
          withCredentials: true,
        });
        toast.success("Изображение успешно удалено");
      } catch (error) {
        console.error("Ошибка при удалении изображения:", error);
        toast.error("Не удалось удалить изображение");
      } finally {
        setIsLoading(false);
      }
    }

    setPreviewUrl(null);
    setFile(null);
    setFileName(null);
    setFormData((prev) => ({ ...prev, imageSrc: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("id", news.id.toString());
      formDataToSend.append("title_one", formData.title);
      formDataToSend.append("title_two", formData.subtitle);
      formDataToSend.append("content", formData.content);
      formDataToSend.append("description", formData.description);

      if (file) {
        formDataToSend.append("file", file);

        const fileName = `${Date.now()}.${file.name.split(".").pop()}`;
        formDataToSend.append("imageSrc", fileName);
      } else if (formData.imageSrc) {
        formDataToSend.append("imageSrc", formData.imageSrc);
      }

      const response = await axios.post(
        "http://localhost:9092/api/news/edit_detail",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.status >= 200 && response.status < 300) {
        toast.success("Изменения успешно сохранены");
        router.push("/dashboard/news");
      } else {
        throw new Error("Ошибка сохранения");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      toast.error("Не удалось сохранить изменения");
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
          <label className={styles.label}>Изображение</label>

          {previewUrl ? (
            <>
              <div className={styles.imagePreview}>
                <img
                  src={previewUrl}
                  alt="Превью"
                  className={styles.previewImage}
                />
              </div>
              <div className={styles.fileInfoContainer}>
                <div className={styles.fileName}>
                  {fileName || "Изображение"}
                </div>
                <button
                  type="button"
                  onClick={handleDeleteImage}
                  className={styles.deleteFileButton}
                >
                  Удалить
                </button>
              </div>
              <input type="hidden" name="imageSrc" value={formData.imageSrc} />
            </>
          ) : (
            <>
              <input
                type="file"
                onChange={handleFileChange}
                className={styles.fileInput}
                accept="image/*"
              />
              {file && fileName && (
                <div className={styles.fileInfoContainer}>
                  <div className={styles.fileName}>{fileName}</div>
                  <button
                    type="button"
                    onClick={() => {
                      setFile(null);
                      setFileName(null);
                      setPreviewUrl(null);
                    }}
                    className={styles.deleteFileButton}
                  >
                    Удалить
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <div className={styles.buttonGroup}>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? "Сохранение..." : "Сохранить"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/dashboard/news")}
            className={styles.cancelButton}
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNew;
