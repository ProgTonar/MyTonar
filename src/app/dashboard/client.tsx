"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useAuth from "@/hooks/useAuth";

interface UserData {
  name: string | null;
  login: string | null;
}

const DashboardClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuth = useAuth();
  const [user, setUser] = useState<UserData>({
    name: localStorage.getItem('name'),
    login: localStorage.getItem('login')
  });

  useEffect(() => {
    const accessToken = searchParams.get("access_token");
    const refreshToken = searchParams.get("refresh_token");
    const name = searchParams.get('user[first_name]');
    const login = searchParams.get('user[login]');

    if (accessToken) {
      
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken || "");
      localStorage.setItem("name", name || "");
      localStorage.setItem("login", login || "");

    
      isAuth
    }
  }, [searchParams, isAuth]);

  return (
    <div>
      {user.name ? (
        <div>Добро пожаловать, {user.name} ({user.login})</div>
      ) : (
        <div>Загрузка данных пользователя...</div>
      )}
    </div>
  );
};

export default DashboardClient;