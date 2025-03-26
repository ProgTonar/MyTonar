import { getNewsById } from "@/services/getNewsService";
import EditNew from "./client";

interface EditNewProps {
  params: {
    id: string;
  };
}

const EditNewPage = async ({ params }: EditNewProps) => {
  const { id } = await params; 
  const newItem = await getNewsById(id);
  return <EditNew  news={newItem}/>;
};

export default EditNewPage;
