import {  IRole } from '@/type/Types'
import axios from 'axios'

export async function getRole(): Promise<IRole[]> {
	try {
        const token = localStorage.getItem('access_token');
        
        if (!token) {
          throw new Error('Токен авторизации не найден');
        }
        
        const response = await axios.get(`http://localhost:9091/api/roles`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
              withCredentials: true
        });

        console.log(response.data.roles)
        
        return response.data.roles;
      } catch (error) {
        console.error('Ошибка при получении списка ролей:', error);
        return [];
      }
}