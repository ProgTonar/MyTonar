import { IPermission } from '@/type/Types';
import axios from 'axios';
import Cookies from 'js-cookie';

export async function getPermissions(): Promise<IPermission[]> {
  try {
    // Получаем токен из куки
    const token = Cookies.get('access_token');
    
    if (!token) {
      throw new Error('Токен авторизации не найден');
    }
    
    const response = await axios.get(`http://localhost:9091/api/permissions`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      withCredentials: true // Важно для работы с httpOnly куками
    });

    console.log('Полученные разрешения:', response.data.permissions);
    
    return response.data.permissions;
  } catch (error) {
    console.error('Ошибка при получении списка разрешений:', error);
    return [];
  }
}