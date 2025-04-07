import Contacts from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filters.name);

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={css.list}>
            {filteredContacts.map((item) => (
                <li key={item.id}>
                    <Contacts value={item} />
                </li>
            ))}
        </ul>
    );
}
