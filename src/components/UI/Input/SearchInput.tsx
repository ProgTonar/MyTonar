"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchIcon from "@/assets/images/search-icon.svg";
import styles from "./SearchInput.module.scss";
import { useState } from "react";

interface SearchInputProps {
  placeholder: string;
  onChange?: (value: string) => void;
}

const SearchInput = ({ placeholder, onChange }: SearchInputProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue.trim()) {
      await router.push(
        `/search?query=${encodeURIComponent(searchValue)}&filter=FIO`
      );
      setSearchValue("");
    }
  };

  const handleChange = (value: string) => {
    setSearchValue(value);
    onChange?.(value);
  };

  return (
    <div className={styles.searchContainer}>
      <Image src={SearchIcon.src} alt="Search" width={16} height={16} />
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchInput;
