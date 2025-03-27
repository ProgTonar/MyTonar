'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

interface UserPermissionsState {
  isLoading: boolean;
  hasAccess: boolean;
  message: string | null;
}

export function useUserPermissions(resource: string): UserPermissionsState {
  const [state, setState] = useState<UserPermissionsState>({
    isLoading: true,
    hasAccess: false,
    message: null
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkPermissions = async () => {
      try {
        const token = localStorage.getItem('access_token');
        
        if (!token) {
          setState({
            isLoading: false,
            hasAccess: false,
            message: 'Необходима авторизация'
          });
          return;
        }
        
        // Запрос к API сервера для проверки прав доступа
        const response = await axios.get(
          `http://localhost:9091/api/${resource}`, 
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
        
        if (response.data && response.data.message === "У пользователя не хватает прав доступа") {
          setState({
            isLoading: false,
            hasAccess: false,
            message: response.data.message
          });
        } else {
          setState({
            isLoading: false,
            hasAccess: true,
            message: null
          });
        }
        
      } catch (error) {
        console.error('Ошибка при проверке прав доступа:', error);
        
        if (axios.isAxiosError(error) && error.response?.data?.message) {
          setState({
            isLoading: false,
            hasAccess: false,
            message: error.response.data.message
          });
        } else {
          setState({
            isLoading: false,
            hasAccess: false,
            message: error instanceof Error ? error.message : 'Произошла ошибка при проверке прав'
          });
        }
      }
    };

    checkPermissions();
  }, [resource]);

  return state;
} 