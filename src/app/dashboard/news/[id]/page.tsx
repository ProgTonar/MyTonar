import { getNewsById } from "@/services/getNewsService";
import EditNew from "./client";

const EditNewPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const newItem = await getNewsById(id);
  return <EditNew news={newItem} />;
};

export default EditNewPage;
