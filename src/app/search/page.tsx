import { getProfilesSearch } from "@/services/profileSearch";
import SearchClient from "./client";

const SearchPage = async () => {
  const ModalContent = {
    block1: {
      title: "Поиск по ФИО",
      description:
        "Ищет по имени/фамилии/отчеству.Можно искать по всему ФИО или по-отдельности. Примеры: Александр, Мишин, Лапкин Павел Сергеевич.",
    },
    block2: {
      title: "Поиск по названию отдела",
      description:
        "«Электро» покажет сотрудников, у которых в названии отдела есть слово «электро».",
    },
    block3: {
      title: "Поиск по должности",
      description:
        "«Сварщик» покажет сотрудников, у которых в названии должности есть слово «сварщик».",
    },
  };

  const profiles = await getProfilesSearch();
  return <SearchClient ModalContent={ModalContent} profiles={profiles} />;
};

export default SearchPage;
