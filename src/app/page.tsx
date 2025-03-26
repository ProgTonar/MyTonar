import HomeClient from "./home/client";
import { getBusRoutes } from "@/services/getBusService";
import { getNewsRoutes } from "@/services/getNewsService";
import { getPortals } from "@/services/portalService";

export default async function Page() {
  const [routes, portals, news] = await Promise.all([
    getBusRoutes(),
    getPortals(),
    getNewsRoutes(),
  ]);

  return (
    <HomeClient
      busRoutes={routes}
      portals={portals}
      title={false}
      news={news}
    />
  );
}
