import {  IUser } from '@/type/Types'
import axios from 'axios'

export async function getUser(): Promise<IUser[]> {
	try {
        const token = localStorage.getItem('access_token');
        
        if (!token) {
          throw new Error('Токен авторизации не найден');
        }
        
        const response = await axios.get(`http://localhost:9091/api/users`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
              withCredentials: true
        });
        
        return response.data.users;
      } catch (error) {
        console.error('Ошибка при получении списка пользователей:', error);
        return [];
      }
}