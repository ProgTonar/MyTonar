import { IContacts } from "@/type/Types"
import axios from "axios"

export async function getContacts(): Promise<IContacts[]>{
    try {
        const response = await axios.get('http://localhost:9092/api/contacts')

        return response.data     
    } catch (error) {
        console.error('Ошибка получения контактов:', error)
        throw error
    }
}

export async function getContactsById(id: string): Promise<IContacts> {
    const ids = parseInt(id, 10);
    try {
        const response = await axios.get(`http://127.0.0.1:9092/api/contacts/detail`, {
            params: { id: ids }
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка получения контакта по ID:', error);
        throw error
    }
}