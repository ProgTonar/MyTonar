"use client";

import { IRoute } from "@/type/Types";
import React, { useState } from "react";
import styles from "./busnavi.module.scss";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import dynamic from 'next/dynamic';

const ToastContainer = dynamic(
  () => import('react-toastify').then((mod) => mod.ToastContainer),
  { ssr: false }
);

interface BusNaviClientProps {
  busNavi: IRoute[];
}

export default function BusNaviClient({ busNavi }: BusNaviClientProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleEditRoute = (routeId: number) => {
    router.push(`/dashboard/busnavi/${routeId}`);
  };

  const handleDeleteRoute = async (routeId: number) => {
    if (confirm("Вы уверены, что хотите удалить этот маршрут?")) {
      setIsLoading(true);
      try {
        const response = await axios.delete(
          `http://localhost:9092/api/bus-navigation/delete_detail`,
          {
            data: { id: routeId },
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          toast.success("Маршрут успешно удален");
          router.refresh();
        }
      } catch (error) {
        console.error("Ошибка при удалении маршрута:", error);
        toast.error("Не удалось удалить маршрут");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={styles.busNaviContainer}>
      <ToastContainer />
      <div className={styles.portals__title}>
        <h1>Маршруты автобусов</h1>
      </div>

      <div className={styles.adminActions}>
        <button
          className={styles.addButton}
          onClick={() => router.push("/dashboard/busnavi/add")}
        >
          Добавить новый маршрут
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.busNaviTable}>
          <thead>
            <tr>
              <th>Название маршрута</th>
              <th>Начало маршрута</th>
              <th>Конец маршрута</th>
              <th>Остановки</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {busNavi && busNavi.length > 0 ? (
              busNavi.map((route, index) => {
                const firstStop =
                  route.stops && route.stops.length > 0
                    ? route.stops[0].name
                    : "-";
                const lastStop =
                  route.stops && route.stops.length > 0
                    ? route.stops[route.stops.length - 1].name
                    : "-";

                return (
                  <tr key={route.id || index} className={styles.routeRow}>
                    <td>{route.title || "Без названия"}</td>
                    <td>{firstStop}</td>
                    <td>{lastStop}</td>
                    <td>
                      {route.stops && route.stops.length > 0 ? (
                        <ul className={styles.stopsVerticalList}>
                          {route.stops.map((stop, stopIndex) => (
                            <li key={stopIndex}>
                              {stop.name || "Без названия"}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        "Нет остановок"
                      )}
                    </td>
                    <td className={styles.actionsCell}>
                      <button
                        className={styles.actionButton}
                        onClick={() => handleEditRoute(route.id)}
                      >
                        Редактировать
                      </button>
                      <button
                        className={`${styles.actionButton} ${styles.deleteButton}`}
                        onClick={() => handleDeleteRoute(route.id)}
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} className={styles.noData}>
                  Нет доступных маршрутов
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div>Загрузка...</div>
        </div>
      )}
    </div>
  );
}
