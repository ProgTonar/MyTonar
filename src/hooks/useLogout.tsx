// hooks/useLogout.ts
"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export default function useLogout() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const logout = () => {
    try {
      // Удаляем все аутентификационные куки
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");

      // Дополнительно можно удалить другие пользовательские куки
      Cookies.remove("user_id");
      Cookies.remove("user_name");

      // Очищаем токены из URL параметров (если есть)
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete("access_token");
      newParams.delete("refresh_token");

      const newUrl = `${pathname}?${newParams.toString()}`;

      // Перенаправляем с очисткой URL
      router.replace(newUrl);
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
      // Полная перезагрузка как fallback
      window.location.href = "/";
    }
  };

  return logout;
}
