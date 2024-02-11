import { useSelector } from "react-redux";
import Contact from "../../contact";
import styled from "styled-components";
import { RootReducer } from "../../../store";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardList = styled.ul`
  margin: 0 auto;
  padding: 16px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
  }
`;

const ContactList = () => {
  const contactList = useSelector((state: RootReducer) => state.contact);

  return (
    <Main>
      <h1>Contact List</h1>
      <CardList>
        {contactList.items.map((contact) => (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              id={contact.id}
            ></Contact>
          </li>
        ))}
      </CardList>
    </Main>
  );
};

export default ContactList;
