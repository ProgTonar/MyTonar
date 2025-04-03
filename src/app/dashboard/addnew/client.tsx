"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./addnew.module.scss";
import "quill/dist/quill.snow.css";
import axios from "axios";
import { Quill } from "react-quill";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNews = () => {
  const router = useRouter();
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    content: "",
    description: "",
    imageSrc: "",
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (!editorRef.current || quillRef.current) {
      return;
    }

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

    const quill = new Quill(editorRef.current, {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: "snow",
    });

    const handleTextChange = () => {
      setFormData((prev) => ({
        ...prev,
        content: quill.root.innerHTML || "",
      }));
    };

    quill.on("text-change", handleTextChange);
    quillRef.current = quill;

    return () => {
      if (quillRef.current) {
        quillRef.current.off("text-change", handleTextChange);
        quillRef.current = null;

        const container = editorRef.current;
        if (container) {
          container.innerHTML = "";
        }
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      // Создаем превью для изображения
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = async () => {
    if (imageUrl) {
      // Удаление из файлового хранилища
      try {
        setIsLoading(true);
        await axios.delete("http://localhost:9092/api/news/delete_image", {
          data: { imageUrl },
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

    // Очистка состояния
    setPreviewUrl("");
    setSelectedFile(null);
    setFileName(null);
    setImageUrl("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title_one", formData.title);
      formDataToSend.append("title_two", formData.subtitle);
      formDataToSend.append("content", formData.content);
      formDataToSend.append("description", formData.description);

      if (selectedFile) {
        const fileName = `${Date.now()}.${selectedFile.name.split(".").pop()}`;
        formDataToSend.append("imageSrc", `${fileName}`);
        formDataToSend.append("file", selectedFile);
      }

      const response = await axios.post(
        "http://localhost:9092/api/news_add",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.status >= 200 && response.status < 300) {
        router.push("/dashboard/news");
      } else {
        throw new Error("Ошибка создания новости");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось создать новость");
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
          <label className={styles.label}>Загрузить изображение</label>
          {previewUrl ? (
            <>
              <div className={styles.imagePreview}>
                <img
                  src={previewUrl}
                  alt="Предпросмотр"
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
            </>
          ) : (
            <>
              <input
                type="file"
                name="imageSrc"
                onChange={handleFileChange}
                className={styles.input}
                accept="image/*"
              />
              {isUploading && <div>Загрузка изображения...</div>}
            </>
          )}
        </div>

        <div className={styles.buttonGroup}>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? "Создание..." : "Создать новость"}
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

export default AddNews;
