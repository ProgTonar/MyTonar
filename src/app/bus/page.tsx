import ClientBus from "./client";
import { getBusRoutes } from "@/services/getBusService";

async function PageBus() {
  const routes = await getBusRoutes();
  return <ClientBus routes={routes} />;
}

export default PageBus;
