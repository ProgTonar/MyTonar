"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "../busnavi.module.scss";
import formStyles from "../../contacts/[id]/edit.module.scss";
import { IRoute, IStop } from "@/type/Types";

interface BusNaviEditClientProps {
  Stops: IStop[];
  route: IRoute;
}

export default function BusNaviEditClient({
  Stops,
  route,
}: BusNaviEditClientProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(() => {
    let dotsStart = route.dotsStart;
    let dotsEnd = route.dotsEnd;

    if (typeof route.dotsStart === "string") {
      try {
        dotsStart = JSON.parse(route.dotsStart);
      } catch (e) {
        console.error("Error parsing dotsStart:", e);
        dotsStart = { dotX: 0, dotY: 0 };
      }
    }

    if (typeof route.dotsEnd === "string") {
      try {
        dotsEnd = JSON.parse(route.dotsEnd);
      } catch (e) {
        console.error("Error parsing dotsEnd:", e);
        dotsEnd = { dotX: 0, dotY: 0 };
      }
    }

    return {
      title: route.title || "",
      name_start: route.nameStart || "",
      name_end: route.nameEnd || "",
      dotsStart: {
        dotX: dotsStart?.dotX ?? 0,
        dotY: dotsStart?.dotY ?? 0,
      },
      dotsEnd: {
        dotX: dotsEnd?.dotX ?? 0,
        dotY: dotsEnd?.dotY ?? 0,
      },
    };
  });

  const [stops, setStops] = useState<IStop[]>(() => {
    return (
      route.stops?.map((stop) => ({
        ...stop,
        arrival_time: stop.arrival_time || "",
        coordinate: {
          dotX: stop.coordinate?.dotX ?? 0,
          dotY: stop.coordinate?.dotY ?? 0,
        }
      })) || []
    );
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

  const handleStopEdit = (
    index: number,
    field: string,
    value: string | object
  ) => {
    const updatedStops = [...stops];
    updatedStops[index] = {
      ...updatedStops[index],
      [field]: value,
    };
    setStops(updatedStops);
  };

  const removeStop = (index: number) => {
    const updatedStops = stops.filter((_, i) => i !== index);
    setStops(updatedStops);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.name_start || !formData.name_end) {
      toast.error("Заполните все обязательные поля маршрута");
      return;
    }

    setIsLoading(true);

    try {
      const routeData = {
        id: route.id,
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
        stops: stops.map((stop) => ({
          id: stop.id,
          name: stop.name,
          coordinate: {
            dotX: Number(stop.coordinate.dotX) || 0,
            dotY: Number(stop.coordinate.dotY) || 0,
          },
          arrivalTime: stop.arrival_time || "00:00",
          bus_navigation_id: stop.bus_navigation_id
        })),
      };

      const response = await axios.put(
        `http://localhost:9092/api/bus-navigation/detail_edit`,
        routeData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Маршрут успешно обновлен");
        router.push("/dashboard/busnavi");
      }
    } catch (error: any) {
      console.error("Ошибка при обновлении маршрута:", error);
      const errorMessage =
        error.response?.data?.message || "Не удалось обновить маршрут";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={formStyles.container}>
      <h1 className={formStyles.title}>Редактировать маршрут</h1>

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
              required
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
              required
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
                <div className={styles.stopFields}>
                  <input
                    type="text"
                    value={stop.name}
                    onChange={(e) =>
                      handleStopEdit(index, "name", e.target.value)
                    }
                    className={formStyles.input}
                    placeholder="Название остановки"
                  />
                  <input
                    type="time"
                    value={stop.arrival_time}
                    onChange={(e) =>
                      handleStopEdit(index, "arrival_time", e.target.value)
                    }
                    className={formStyles.input}
                  />
                  <div style={{ display: "flex", gap: "10px" }}>
                    <input
                      type="number"
                      value={stop.coordinate.dotX}
                      onChange={(e) =>
                        handleStopEdit(index, "coordinate", {
                          ...stop.coordinate,
                          dotX: parseFloat(e.target.value) || 0,
                        })
                      }
                      className={formStyles.input}
                      placeholder="X"
                    />
                    <input
                      type="number"
                      value={stop.coordinate.dotY}
                      onChange={(e) =>
                        handleStopEdit(index, "coordinate", {
                          ...stop.coordinate,
                          dotY: parseFloat(e.target.value) || 0,
                        })
                      }
                      className={formStyles.input}
                      placeholder="Y"
                    />
                  </div>
                </div>
                <div className={styles.stopActions}>
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
            Нет добавленных остановок
          </div>
        )}

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
