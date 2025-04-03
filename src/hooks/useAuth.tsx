"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Проверяем наличие токена в куках
    const token = Cookies.get("access_token");
    setIsAuthenticated(!!token);

    // Если токен пришел в параметрах URL (например, после OAuth-редиректа)
    if (searchParams.has("access_token")) {
      const accessToken = searchParams.get("access_token");
      const refreshToken = searchParams.get("refresh_token");

      // Сохраняем токены в куки с настройками безопасности
      if (accessToken) {
        Cookies.set("access_token", accessToken, {
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          expires: 7, // Срок действия 7 дней
        });
      }

      if (refreshToken) {
        Cookies.set("refresh_token", refreshToken, {
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          expires: 7,
        });
      }

      // Удаляем токены из URL
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("access_token");
      newParams.delete("refresh_token");

      router.replace(`${pathname}?${newParams.toString()}`);
    }
  }, [pathname, searchParams, router]);

  return isAuthenticated;
}
