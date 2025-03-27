import {  IPermission } from '@/type/Types'
import axios from 'axios'

export async function getPermissions(): Promise<IPermission[]> {
	try {
        const token = localStorage.getItem('access_token');
        
        if (!token) {
          throw new Error('Токен авторизации не найден');
        }
        
        const response = await axios.get(`http://localhost:9091/api/permissions`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
              withCredentials: true
        });

        console.log(response.data.permissions)
        
        return response.data.permissions;
      } catch (error) {
        console.error('Ошибка при получении списка разрешений', error);
        return [];
      }
}