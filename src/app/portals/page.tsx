import ClientPortals from './client'
import { getPortals } from '@/services/portalService'

export default async function PortalsPage() {
	const portals = await getPortals()
	return <ClientPortals portals={portals} />
}
