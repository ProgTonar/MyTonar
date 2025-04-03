import { getBusRoutesById } from "@/services/getBusService";
import { IStop } from "@/type/Types";
import BusNaviEditClient from "./client";

export default async function BusNaviEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const route = await getBusRoutesById((await params).id);

  const allStops: IStop[] = [];
  const stopIds = new Set();

  route.stops?.forEach(() => {
    if (route.stops && route.stops.length > 0) {
      route.stops.forEach((stop) => {
        if (!stopIds.has(stop.id)) {
          stopIds.add(stop.id);
          allStops.push(stop);
        }
      });
    }
  });

  return <BusNaviEditClient route={route} Stops={allStops} />;
}
