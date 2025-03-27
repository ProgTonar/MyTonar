'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

interface NewsPermissionsState {
  isLoading: boolean;
  hasAccess: boolean;
  roles: string[];
  isAdmin: boolean;
  message: string | null;
}
export function useNewsPermissions(): NewsPermissionsState {
  const [state, setState] = useState<NewsPermissionsState>({
    isLoading: true,
    hasAccess: false,
    roles: [],
    isAdmin: false,
    message: null
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const getUserRoles = async () => {
      try {
        const token = localStorage.getItem('access_token');
        
        if (!token) {
          setState({
            isLoading: false,
            hasAccess: false,
            roles: [],
            isAdmin: false,
            message: 'Токен авторизации не найден'
          });
          return;
        }
        
        const response = await axios.post(
          `http://localhost:9091/api/user/roles-and-permissions`, 
          {}, 
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
        
        const userRoles = response.data.roles || [];
        const isAdmin = userRoles.includes('admin');
        const isEditor = userRoles.includes('management');
        
        // Доступ есть у админов и редакторов
        const hasAccess = isAdmin || isEditor;
        
        setState({
          isLoading: false,
          hasAccess,
          roles: userRoles,
          isAdmin,
          message: hasAccess ? null : 'Управление новостями доступно только администраторам и редакторам'
        });
        
      } catch (error) {
        console.error('Ошибка при получении ролей и разрешений:', error);
        setState({
          isLoading: false,
          hasAccess: false,
          roles: [],
          isAdmin: false,
          message: error instanceof Error ? error.message : 'Ошибка при проверке прав доступа'
        });
      }
    };

    getUserRoles();
  }, []);

  return state;
} 