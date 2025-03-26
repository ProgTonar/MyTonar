"use client";

import { Map, Placemark, Polyline, YMaps } from "react-yandex-maps";
import styles from "./Map.module.scss";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { IRoute, IStop } from "@/type/Types";

interface YandexMapProps {
  routes: IRoute[];
  selectedRoute: IRoute | null;
  selectedStop: IStop | null;
  onStopSelect: (stop: IStop) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const YandexMap = ({
  routes,
  selectedRoute,
  selectedStop,
  onStopSelect,
  setIsLoading,
}: YandexMapProps) => {
  const [isMapLoading, setIsMapLoading] = useState(true);

  const convertCoordinates = (coords: {
    dotX: number;
    dotY: number;
  }): [number, number] => {
    return [coords.dotX, coords.dotY];
  };

  const getRouteCoordinates = (route: IRoute) => {
    const start = convertCoordinates(route.dotsStart);
    const end = convertCoordinates(route.dotsEnd);
    const stop = route.stops.map((stop) => convertCoordinates(stop.coordinate));
    return [start, ...stop, end];
  };

  const getMapCenter = () => {
    if (selectedStop) {
      return convertCoordinates(selectedStop.coordinate);
    }
    if (selectedRoute) {
      return convertCoordinates(selectedRoute.dotsStart);
    }
    return [55.81602067452189, 38.99214766409586];
  };

  const getMapZoom = () => {
    if (selectedStop) {
      return 15;
    }
    if (selectedRoute) {
      return 12;
    }
    return 9;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapLoading(false);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className={styles.map__section}>
      {isMapLoading ? (
        <Loader />
      ) : (
        <div className={styles.map__content}>
          <YMaps query={{ apikey: "dc922a2a-555a-46b1-ad63-482b12d3a26a" }}>
            <Map
              width="570px"
              height="540px"
              state={{
                center: getMapCenter(),
                zoom: getMapZoom(),
              }}
            >
              {(selectedRoute ? [selectedRoute] : routes).map((route) => (
                <div key={route.id}>
                  <Placemark
                    geometry={convertCoordinates(route.dotsStart)}
                    options={{
                      preset: "twirl#blueIcon",
                      draggable: false,
                    }}
                    properties={{
                      balloonContent: "Начало маршрута",
                    }}
                  />

                  <Placemark
                    geometry={convertCoordinates(route.dotsEnd)}
                    options={{
                      preset: "twirl#redIcon",
                      draggable: false,
                    }}
                    properties={{
                      balloonContent: "Конец маршрута",
                    }}
                  />

                  {route.stops.map((stop) => (
                    <Placemark
                      key={stop.id}
                      geometry={convertCoordinates(stop.coordinate)}
                      options={{
                        preset:
                          selectedStop?.id === stop.id
                            ? "twirl#greenIcon"
                            : "twirl#grayIcon",
                        draggable: false,
                      }}
                      properties={{
                        balloonContent: stop.name,
                      }}
                      onClick={() => onStopSelect(stop)}
                    />
                  ))}

                  <Polyline
                    geometry={getRouteCoordinates(route)}
                    options={{
                      strokeColor: "#2563eb",
                      strokeWidth: 3,
                      strokeOpacity: 0.8,
                    }}
                  />
                </div>
              ))}
            </Map>
          </YMaps>
        </div>
      )}
    </div>
  );
};

export default YandexMap;
