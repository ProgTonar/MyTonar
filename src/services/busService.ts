import { Route } from '@/data/busRoutes'
import { busRoutes } from '@/data/busRoutes'

export async function getBusRoutes(): Promise<Route[]> {
	return busRoutes
}
