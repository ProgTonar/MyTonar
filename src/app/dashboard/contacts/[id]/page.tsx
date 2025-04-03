import { getContactsById } from "@/services/getContacts";
import EditPhone from "./client";

export default async function EditPhonePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const contactItem = await getContactsById((await params).id);
  return <EditPhone contact={contactItem} />;
}
