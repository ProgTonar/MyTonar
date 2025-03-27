import { IContacts } from "@/type/Types"
import axios from "axios"

export default async function getContacts(): Promise<IContacts[]>{
    try {
        const response = await axios.get('http://localhost:9092/api/contacts')

        return response.data     
    } catch (error) {
        console.error('Ошибка получения контактов:', error)
        throw error
    }
}