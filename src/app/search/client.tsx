"use client";

import ButtonBack from "@/components/UI/ButtonBack/ButtonBack";
import styles from "./search.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import RuleNumber from "@/components/UI/RuleNumber/RuleNumber";
import Help from "@/assets/images/Подсказка.png";
import SearchSelect from "@/components/UI/SearchSelect/SearchSelect";
import { ProfileItem } from "@/data/profileData";
import UserCard from "@/components/UserCard/UserCard";
import { useState, useEffect } from "react";
import Button from "@/components/UI/ButtonDefault/ButtonDefault";
import ModalHelp from "@/components/UI/ModalHelp/ModalHelp";
import CardSkeleton from "@/components/UI/CardSkeleton/CardSkeleton";

interface ProfileCLientProps {
  profiles: ProfileItem[];
  ModalContent: {
    block1: { title: string; description: string };
    block2: { title: string; description: string };
    block3: { title: string; description: string };
  };
}

const SearchClient = ({ profiles, ModalContent }: ProfileCLientProps) => {
  const [searchResults, setSearchResults] = useState<ProfileItem[]>([]);
  const [visibleProfiles, setVisibleProfiles] = useState<ProfileItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("FIO");
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 6;
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClickCard = (table_number: string) => {
    router.push(`/profile_user/${table_number}`);
  };

  const handleSearch = async (query: string, filter: string) => {
    setIsLoading(true);
    let result: ProfileItem[] = [];

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (query.trim() === "") {
      setSearchResults([]);
      setIsLoading(false);
      return;
    }

    if (filter === "FIO") {
      result = profiles.filter((profile) =>
        profile.name.toLowerCase().includes(query.toLowerCase())
      );
    } else if (filter === "otdel") {
      result = profiles.filter((profile) =>
        profile.otdel.toLowerCase().includes(query.toLowerCase())
      );
    } else if (filter === "dolzhnost") {
      result = profiles.filter((profile) =>
        profile.dolznost.toLowerCase().includes(query.toLowerCase())
      );
    }

    setSearchResults(result);
    setCurrentPage(1);
    setIsLoading(false);

    const urlQuery = searchParams.get("query");
    const urlFilter = searchParams.get("filter");
    if (urlQuery !== query || urlFilter !== filter) {
      router.replace("/search");
    }
  };

  const handleQueryChange = (query: string) => {
    setSearchQuery(query);
    handleSearch(query, selectedFilter);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    if (searchQuery) {
      handleSearch(searchQuery, filter);
    }
  };

  useEffect(() => {
    const query = searchParams.get("query");
    const filter = searchParams.get("filter");

    if (query && filter) {
      setSearchQuery(query);
      setSelectedFilter(filter);
      handleSearch(query, filter);
    }
  }, [searchParams]);

  useEffect(() => {
    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    setVisibleProfiles(searchResults.slice(startIndex, endIndex));
  }, [searchResults, currentPage]);

  const ModalOpen = () => setIsOpenModal(true);
  const ModalClose = () => setIsOpenModal(false);

  return (
    <div className={styles.content}>
      <ModalHelp
        isOpen={isOpenModal}
        onClose={ModalClose}
        title="Как работает поиск"
        description="Выберите необходимую категорию для более точного результата поиска."
        block1={ModalContent.block1}
        block2={ModalContent.block2}
        block3={ModalContent.block3}
      />
      <div className={styles.header}>
        <div>
          <ButtonBack onClick={() => router.back()}>Назад</ButtonBack>
        </div>
        <div className={styles.title}>
          <h1>Поиск сотрудников</h1>
          <div>
            <RuleNumber
              label="Как пользоваться поиском"
              icon={<img src={Help.src} />}
              onClick={ModalOpen}
            />
          </div>
        </div>
      </div>
      <div className={styles.filtered}>
        <div className={styles.searchSection}>
          <SearchSelect
            onSearch={handleSearch}
            onQueryChange={handleQueryChange}
            onFilterChange={handleFilterChange}
            initialQuery={searchParams?.get("query") || ""}
            initialFilter={searchParams?.get("filter") || "FIO"}
          />
        </div>
      </div>
      {isLoading ? (
        <div className={styles.block__result}>
          {[...Array(6)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : searchQuery === "" && !searchParams?.get("query") ? (
        <div className={styles.block__result_null}>Введите запрос</div>
      ) : searchResults.length === 0 ? (
        <div className={styles.block__result_null}>
          Не найдено ни одного сотрудника
        </div>
      ) : (
        <>
          <div className={styles.result}>
            <h2>Результаты поиска:</h2>
            <h3>Найдено {searchResults.length} сотрудников</h3>
          </div>
          <div className={styles.block__result}>
            {visibleProfiles.map((profile, index) => (
              <UserCard
                key={index}
                profile={profile}
                onClick={() => handleClickCard(profile.tabel_number)}
              />
            ))}
          </div>
          {searchResults.length > visibleProfiles.length && (
            <div className={styles.showMore}>
              <Button onClick={() => setCurrentPage(currentPage + 1)}>
                Показать еще
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchClient;
