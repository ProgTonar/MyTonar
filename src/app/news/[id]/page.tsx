import { getNewsById } from "@/services/getNewsService";
import NewClient from "./client";

const NewPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const newItem = await getNewsById(id);

  return <NewClient news={newItem} />;
};

export default NewPage;
