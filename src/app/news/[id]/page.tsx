import { getNewsById } from "@/services/getNewsService";
import NewClient from "./client";

interface NewPageProps {
  params: {
    id: string;
  };
}

const NewPage = async ({ params }: NewPageProps) => {
  const { id } = await params;
  const newItem = await getNewsById(id);

  return <NewClient news={newItem} />;
};

export default NewPage;
