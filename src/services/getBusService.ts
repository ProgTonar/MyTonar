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


export async function getBusRoutesById(id: string): Promise<IRoute> {
    const ids = parseInt(id, 10);
    try {
        const response = await axios.get('http://127.0.0.1:9092/api/bus-navigation/detail', {
            params: { id: ids }
        })
        return response.data
    } catch (error) {
        console.error('Ошибка получения маршрута:', error)
        throw error
    }
}
