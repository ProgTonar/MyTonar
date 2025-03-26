import { PortalItem, portalsData } from '@/data/portalsData'

export async function getPortals(): Promise<PortalItem[]> {
	return portalsData
}

export async function getPortalById(
	id: string
): Promise<PortalItem | undefined> {
	const portals = await getPortals()
	return portals.find(portal => portal.path === id)
}
