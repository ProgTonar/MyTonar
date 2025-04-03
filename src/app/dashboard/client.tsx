"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import Cookies from "js-cookie";

interface UserData {
  name: string | null;
  login: string | null;
}

const DashboardClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuth = useAuth();
  const [user, setUser] = useState<UserData>({
    name: null,
    login: null,
  });

  useEffect(() => {
    const name = Cookies.get("name") || null;
    const login = Cookies.get("login") || null;
    setUser({ name, login });

    const accessToken = searchParams.get("access_token");
    const refreshToken = searchParams.get("refresh_token");
    const nameFromParams = searchParams.get("user[first_name]");
    const loginFromParams = searchParams.get("user[login]");

    if (accessToken) {
      // Сохраняем данные в куки
      Cookies.set("access_token", accessToken, {
        secure: true,
        sameSite: "strict",
        expires: 7, // 7 дней
      });

      if (refreshToken) {
        Cookies.set("refresh_token", refreshToken, {
          secure: true,
          sameSite: "strict",
          expires: 7,
        });
      }

      if (nameFromParams) {
        Cookies.set("name", nameFromParams, { expires: 7 });
        setUser((prev) => ({ ...prev, name: nameFromParams }));
      }

      if (loginFromParams) {
        Cookies.set("login", loginFromParams, { expires: 7 });
        setUser((prev) => ({ ...prev, login: loginFromParams }));
      }

      isAuth;

      // Очищаем параметры URL после сохранения
      router.replace("/dashboard");
    }
  }, [searchParams, isAuth, router]);

  return (
    <div>
      {user.name ? (
        <div>
          Добро пожаловать, {user.name} ({user.login})
        </div>
      ) : (
        <div>Загрузка данных пользователя...</div>
      )}
    </div>
  );
};

export default DashboardClient;
