"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "../busnavi.module.scss";
import formStyles from "../../contacts/[id]/edit.module.scss";
import { IStop } from "@/type/Types";

interface BusNaviAddClientProps {
  Stops: IStop[];
}

export default function BusNaviAddClient({ Stops }: BusNaviAddClientProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    name_start: "",
    name_end: "",
    dotsStart: { dotX: "", dotY: "" },
    dotsEnd: { dotX: "", dotY: "" },
  });

  const [stops, setStops] = useState<IStop[]>([]);

  const [newStop, setNewStop] = useState({
    name: "",
    arrivalTime: "",
    coordinate: { dotX: 0, dotY: 0 },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCoordinateChange = (
    field: "dotsStart" | "dotsEnd",
    coord: "dotX" | "dotY",
    value: string
  ) => {
    const numValue = parseFloat(value) || 0;
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [coord]: numValue,
      },
    }));
  };

  const handleStopChange = (
    index: number,
    field: keyof IStop,
    value: string
  ) => {
    const updatedStops = [...stops];

    if (field === "name" || field === "arrivalTime") {
      updatedStops[index] = { ...updatedStops[index], [field]: value };
    } else if (field === "coordinate") {
      console.warn(
        "Используйте handleStopCoordinateChange для изменения координат"
      );
    }

    setStops(updatedStops);
  };

  const handleStopCoordinateChange = (
    index: number,
    coord: "dotX" | "dotY",
    value: string
  ) => {
    const numValue = Number(value);
    const updatedStops = [...stops];
    updatedStops[index] = {
      ...updatedStops[index],
      coordinate: {
        ...updatedStops[index].coordinate,
        [coord]: numValue,
      },
    };
    setStops(updatedStops);
  };

  const handleNewStopChange = (field: string, value: string) => {
    if (field === "dotX" || field === "dotY") {
      const numValue = Number(value) || 0;
      setNewStop((prev) => ({
        ...prev,
        coordinate: {
          ...prev.coordinate,
          [field]: numValue,
        },
      }));
    } else {
      setNewStop((prev) => ({ ...prev, [field]: value }));
    }
  };

  const addExistingStop = (stopId: number) => {
    const selectedStop = Stops.find((stop) => stop.id === stopId);
    if (selectedStop) {
      setStops([
        ...stops,
        {
          id: selectedStop.id,
          name: selectedStop.name,
          arrivalTime: selectedStop.arrivalTime || "",
          coordinate: selectedStop.coordinate || { dotX: 0, dotY: 0 },
        },
      ]);
    }
  };

  const addNewStop = () => {
    if (newStop.name.trim() === "") {
      toast.error("Введите название остановки");
      return;
    }

    setStops([
      ...stops,
      {
        id: stops.length + 1,
        name: newStop.name,
        arrivalTime: newStop.arrivalTime,
        coordinate: newStop.coordinate,
      },
    ]);

    setNewStop({
      name: "",
      arrivalTime: "",
      coordinate: { dotX: 0, dotY: 0 },
    });
  };

  const removeStop = (index: number) => {
    const updatedStops = stops.filter((_, i) => i !== index);
    setStops(updatedStops);
  };

  const moveStopUp = (index: number) => {
    if (index === 0) return;

    const updatedStops = [...stops];
    const temp = updatedStops[index];
    updatedStops[index] = updatedStops[index - 1];
    updatedStops[index - 1] = temp;

    setStops(updatedStops);
  };

  const moveStopDown = (index: number) => {
    if (index === stops.length - 1) return;

    const updatedStops = [...stops];
    const temp = updatedStops[index];
    updatedStops[index] = updatedStops[index + 1];
    updatedStops[index + 1] = temp;

    setStops(updatedStops);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (stops.length === 0) {
      toast.error("Добавьте хотя бы одну остановку");
      return;
    }

    if (!formData.title || !formData.name_start || !formData.name_end) {
      toast.error("Заполните все обязательные поля маршрута");
      return;
    }

    setIsLoading(true);

    try {
      const routeData = {
        title: formData.title.trim(),
        nameStart: formData.name_start.trim(),
        nameEnd: formData.name_end.trim(),
        dotsStart: {
          dotX: Number(formData.dotsStart.dotX) || 0,
          dotY: Number(formData.dotsStart.dotY) || 0,
        },
        dotsEnd: {
          dotX: Number(formData.dotsEnd.dotX) || 0,
          dotY: Number(formData.dotsEnd.dotY) || 0,
        },

        name: stops[0].name.trim(),
        coordinate: {
          dotX: Number(stops[0].coordinate.dotX) || 0,
          dotY: Number(stops[0].coordinate.dotY) || 0,
        },
        arrivalTime: stops[0].arrivalTime?.trim() || "00:00",
      };

      console.log("Отправляемые данные:", JSON.stringify(routeData, null, 2));

      const response = await axios.post(
        "http://localhost:9092/api/bus-navigation/add",
        routeData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        if (stops.length > 1) {
          const busNavigationId = response.data.navigation.id;
        }

        toast.success("Маршрут успешно создан");
        router.push("/dashboard/busnavi");
      }
    } catch (error: any) {
      console.error("Ошибка при создании маршрута:", error);

      console.error("Детали ошибки:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      const errorMessage =
        error.response?.data?.message || "Не удалось создать маршрут";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={formStyles.container}>
      <h1 className={formStyles.title}>Добавить новый маршрут</h1>

      <form onSubmit={handleSubmit} className={formStyles.form}>
        <div className={formStyles.formGroup}>
          <label className={formStyles.label}>Название маршрута</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={formStyles.input}
            placeholder="Введите название маршрута"
            required
          />
        </div>

        <div className={formStyles.formRow}>
          <div className={formStyles.formGroup}>
            <label className={formStyles.label}>Начало маршрута</label>
            <input
              type="text"
              name="name_start"
              value={formData.name_start}
              onChange={handleInputChange}
              className={formStyles.input}
              placeholder="Начальная точка"
            />
          </div>

          <div className={formStyles.formGroup}>
            <label className={formStyles.label}>Конец маршрута</label>
            <input
              type="text"
              name="name_end"
              value={formData.name_end}
              onChange={handleInputChange}
              className={formStyles.input}
              placeholder="Конечная точка"
            />
          </div>
        </div>

        <div className={formStyles.formRow}>
          <div className={formStyles.formGroup}>
            <label className={formStyles.label}>Координаты начала (X, Y)</label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="number"
                value={formData.dotsStart.dotX}
                onChange={(e) =>
                  handleCoordinateChange("dotsStart", "dotX", e.target.value)
                }
                className={formStyles.input}
                placeholder="X"
              />
              <input
                type="number"
                value={formData.dotsStart.dotY}
                onChange={(e) =>
                  handleCoordinateChange("dotsStart", "dotY", e.target.value)
                }
                className={formStyles.input}
                placeholder="Y"
              />
            </div>
          </div>

          <div className={formStyles.formGroup}>
            <label className={formStyles.label}>Координаты конца (X, Y)</label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="number"
                value={formData.dotsEnd.dotX}
                onChange={(e) =>
                  handleCoordinateChange("dotsEnd", "dotX", e.target.value)
                }
                className={formStyles.input}
                placeholder="X"
              />
              <input
                type="number"
                value={formData.dotsEnd.dotY}
                onChange={(e) =>
                  handleCoordinateChange("dotsEnd", "dotY", e.target.value)
                }
                className={formStyles.input}
                placeholder="Y"
              />
            </div>
          </div>
        </div>

        <h2 className={formStyles.sectionTitle}>Остановки маршрута</h2>

        {stops.length > 0 ? (
          <div className={styles.stopsContainer}>
            {stops.map((stop, index) => (
              <div key={index} className={styles.stopItem}>
                <div className={styles.stopOrder}>{index + 1}</div>
                <div className={styles.stopFields}>
                  <input
                    type="text"
                    value={stop.name}
                    onChange={(e) =>
                      handleStopChange(index, "name", e.target.value)
                    }
                    className={formStyles.input}
                    placeholder="Название остановки"
                    required
                  />
                  <input
                    type="time"
                    value={stop.arrivalTime}
                    onChange={(e) =>
                      handleStopChange(index, "arrivalTime", e.target.value)
                    }
                    className={formStyles.input}
                    placeholder="Время прибытия"
                  />
                </div>
                <div className={styles.stopCoordinates}>
                  <input
                    type="number"
                    value={stop.coordinate.dotX}
                    onChange={(e) =>
                      handleStopCoordinateChange(index, "dotX", e.target.value)
                    }
                    className={formStyles.input}
                    placeholder="X"
                    style={{ width: "70px" }}
                  />
                  <input
                    type="number"
                    value={stop.coordinate.dotY}
                    onChange={(e) =>
                      handleStopCoordinateChange(index, "dotY", e.target.value)
                    }
                    className={formStyles.input}
                    placeholder="Y"
                    style={{ width: "70px" }}
                  />
                </div>
                <div className={styles.stopActions}>
                  <button
                    type="button"
                    onClick={() => moveStopUp(index)}
                    className={`${styles.actionButton} ${styles.moveButton}`}
                    disabled={index === 0}
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => moveStopDown(index)}
                    className={`${styles.actionButton} ${styles.moveButton}`}
                    disabled={index === stops.length - 1}
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => removeStop(index)}
                    className={`${styles.actionButton} ${styles.deleteButton}`}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyStopsMessage}>
            Выберите существующую или добавьте новую остановку
          </div>
        )}

        <div className={styles.addStopSection}>
          <h3>Добавить существующую остановку</h3>
          <div className={styles.existingStopSelector}>
            <select
              className={formStyles.input}
              onChange={(e) => addExistingStop(Number(e.target.value))}
              value=""
            >
              <option value="" disabled>
                Выберите остановку
              </option>
              {Stops && Stops.length > 0 ? (
                Stops.map((stop) => (
                  <option key={stop.id} value={stop.id}>
                    {stop.name}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  Нет доступных остановок
                </option>
              )}
            </select>
          </div>

          <h3>Добавить новую остановку</h3>
          <div className={styles.newStopForm}>
            <input
              type="text"
              value={newStop.name}
              onChange={(e) => handleNewStopChange("name", e.target.value)}
              className={formStyles.input}
              placeholder="Название остановки"
            />
            <input
              type="time"
              value={newStop.arrivalTime}
              onChange={(e) =>
                handleNewStopChange("arrivalTime", e.target.value)
              }
              className={formStyles.input}
              placeholder="Время прибытия"
            />
            <div style={{ display: "flex", gap: "5px" }}>
              <input
                type="number"
                value={newStop.coordinate.dotX}
                onChange={(e) => handleNewStopChange("dotX", e.target.value)}
                className={formStyles.input}
                placeholder="X"
                style={{ width: "70px" }}
              />
              <input
                type="number"
                value={newStop.coordinate.dotY}
                onChange={(e) => handleNewStopChange("dotY", e.target.value)}
                className={formStyles.input}
                placeholder="Y"
                style={{ width: "70px" }}
              />
            </div>
            <button
              type="button"
              onClick={addNewStop}
              className={styles.addButton}
            >
              Добавить
            </button>
          </div>
        </div>

        <div className={formStyles.buttonGroup}>
          <button
            type="submit"
            disabled={isLoading || stops.length === 0}
            className={formStyles.submitButton}
          >
            {isLoading ? "Сохранение..." : "Сохранить маршрут"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/dashboard/busnavi")}
            className={formStyles.cancelButton}
          >
            Отмена
          </button>
        </div>
      </form>

      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div>Загрузка...</div>
        </div>
      )}
    </div>
  );
}
