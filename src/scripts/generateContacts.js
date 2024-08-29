import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { getAllContacts } from "./getAllContacts.js";

const generateContacts = async (number) => {
    const contactList = await getAllContacts();
    const updatedContactList = Array(number).fill(0).map(createFakeContact);
    contactList.push(...updatedContactList);
    await writeContacts(contactList);
};

generateContacts(5);
