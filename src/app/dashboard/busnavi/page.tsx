import { getBusRoutes } from "@/services/getBusService";
import BusNaviClient from "./client";

export default async function BusNaviPage() {
  const bus = await getBusRoutes();
  return <BusNaviClient busNavi={bus} />;
}
