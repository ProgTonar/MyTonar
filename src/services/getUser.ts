import { IUser } from '@/type/Types';
import axios from 'axios';
import Cookies from 'js-cookie';

export async function getUser(): Promise<IUser[]> {
  try {
    // Получаем токен из куки
    const token = Cookies.get('access_token');
    
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