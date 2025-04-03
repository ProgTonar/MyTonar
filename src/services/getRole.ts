import { IRole } from '@/type/Types'
import axios from 'axios'
import Cookies from 'js-cookie'

export async function getRole(): Promise<IRole[]> {
  try {
    // Получаем токен из куки
    const token = Cookies.get('access_token');
    
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