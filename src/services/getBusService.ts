import { IRoute } from '@/type/Types'
import axios from 'axios'

export async function getBusRoutes(): Promise<IRoute[]> {
	try {
        const response = await axios.get('http://127.0.0.1:9092/api/bus-navigation')
        return response.data     
    } catch (error) {
        console.error('Ошибка получения маршрутов:', error)
        throw error
    }
}
