
import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsAuthenticated(!!token);
    
    if (searchParams.has('access_token')) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('access_token');
      newParams.delete('refresh_token');
      
      router.replace(`${pathname}?${newParams.toString()}`);
    }
  }, [pathname, searchParams, router]);

  return isAuthenticated
}