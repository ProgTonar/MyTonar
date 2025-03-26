import { emergencyData, EmergencyData } from '@/data/emergencyData'

export async function getEmergencyNumbers(): Promise<EmergencyData> {
	return emergencyData
}
