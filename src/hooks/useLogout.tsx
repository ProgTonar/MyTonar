// hooks/useLogout.ts
'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function useLogout() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const logout = () => {
    try {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete('access_token');
      newParams.delete('refresh_token');
      
      const newUrl = `${pathname}?${newParams.toString()}`;
      
      router.replace(newUrl);
      router.refresh();
      
    } catch (error) {
      console.error('Logout failed:', error);
      window.location.href = '/';
    }
  };

  return logout;
}