import BusNaviAddClient from "./client";
import { getBusRoutes } from "@/services/getBusService";
import { IStop } from "@/type/Types";

export default async function BusNaviAddPage() {
  const routes = await getBusRoutes();

  const allStops: IStop[] = [];
  const stopIds = new Set();

  routes.forEach((route) => {
    if (route.stops && route.stops.length > 0) {
      route.stops.forEach((stop) => {
        if (!stopIds.has(stop.id)) {
          stopIds.add(stop.id);
          allStops.push(stop);
        }
      });
    }
  });

  return <BusNaviAddClient Stops={allStops} />;
}
