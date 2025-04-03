
import { getContacts } from "@/services/getContacts";
import ContactsClient from "./client";

export default async function ContactsPage() {
    const contacts = await getContacts()
    return (<ContactsClient  contacts={contacts}/>
    )
}