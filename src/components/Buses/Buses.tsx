"use client";

import { useRef, useState } from "react";
import SelectNavigate from "../UI/SelectNavigate/SelectNavigate";
import YandexMap from "../UI/YandexMap/YandexMap";
import styles from "./buses.module.scss";
import { IRoute, IStop } from "@/type/Types";

interface BusesProps {
  routes: IRoute[];
  title: boolean;
}

const Buses = ({ routes, title }: BusesProps) => {
  const [selectedRoute, setSelectedRoute] = useState<IRoute | null>(null);
  const [selectedStop, setSelectedStop] = useState<IStop | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const routeOptions = routes?.map((route) => ({
    value: route.id,
    label: `${route.nameStart} -> ${route.nameEnd}`,
    from: route.nameStart,
    to: route.nameEnd,
  }));

  const handleRouteSelect = (routeId: number) => {
    const route = routes.find((r) => r.id === routeId);
    setSelectedRoute(route || null);
    setSelectedStop(null);
  };

  const handleStopSelect = (stop: IStop) => {
    setSelectedStop(stop);
  };

  return (
    <div
      className={`${styles.section__map} ${
        title ? styles.disable__transform : ""
      }`}
    >
      <div className={`${styles.title} ${title ? styles.disabled__title : ""}`}>
        <div className={styles.title__icon}></div>Расписание и маршруты
        автобусов
      </div>
      <div className={styles.section__bus}>
        <YandexMap
          routes={routes}
          selectedRoute={selectedRoute}
          selectedStop={selectedStop}
          onStopSelect={handleStopSelect}
          setIsLoading={setIsLoading}
        />
        <div className={styles.select__section}>
          <div className={styles.navigate}>
            <div>Выберите нужный маршрут:</div>
            <SelectNavigate
              options={routeOptions}
              onChange={(value) => handleRouteSelect(Number(value))}
              placeholder="Нажмите, чтобы выбрать маршрут"
              value={
                selectedRoute
                  ? {
                      value: selectedRoute.id,
                      label: `${selectedRoute.nameStart} -> ${selectedRoute.nameEnd}`,
                      from: selectedRoute.nameStart,
                      to: selectedRoute.nameEnd,
                    }
                  : null
              }
            />
          </div>
          <div className={styles.stops}>
            <div>Остановки:</div>
            {selectedRoute ? (
              <div className={styles.stops_list}>
                {selectedRoute.stops.map((stop) => (
                  <div
                    key={stop.id}
                    className={`${styles.stop_item} ${
                      selectedStop?.id === stop.id ? styles.selected : ""
                    }`}
                    onClick={() => handleStopSelect(stop)}
                  >
                    <div className={styles.stop_info}>
                      <div className={styles.stop_number}></div>
                      <div className={styles.stop_name}>{stop.name}</div>
                    </div>
                    {stop.arrivalTime && (
                      <div className={styles.arrival_time}>
                        {stop.arrivalTime}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.no_route}>
                Выберите маршрут для просмотра остановок
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buses;
