import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import variables from "../../styles/variables";
import { remove, edit } from "../../store/reducers/contact";
import ContactClass from "../../models/contact";

const Card = styled.div`
  padding: 16px;
  margin: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
`;

const Label = styled.p`
  color: #8b8b8b;
  font-weight: bold;
  font-size: 14px;
  margin-top: 8px;
  line-height: 24px;
  font-family: "Roboto Mono", monospace;
`;

const Information = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  overflow: hidden;
  max-height: 40px;
  border-radius: 4px;
  font-family: "Roboto Mono", monospace;
  padding: 8px;
  resize: none;
  background-color: transparent;
`;

const InformationBigger = styled(Information)`
  max-height: 60px;
`;

const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variables.darkBlue};
  border-radius: 8px;
`;

const SaveButton = styled(Button)`
  background-color: ${variables.green};
`;

const DeleteButton = styled(Button)`
  background-color: ${variables.red};
`;

type Props = ContactClass;

const Contact = ({
  name,
  phone: phoneOriginal,
  email: emailOriginal,
  id,
}: Props) => {
  const [editing, setEditing] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    phoneOriginal.length > 0 && setPhone(phoneOriginal);
    emailOriginal.length > 0 && setEmail(emailOriginal);
  }, [phoneOriginal, emailOriginal]);

  function cancelEditing() {
    setEditing(false);
    setEmail(emailOriginal);
    setPhone(phoneOriginal);
  }

  return (
    <Card>
      <Title>{name}</Title>
      <Label>Número:</Label>
      <Information
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        maxLength={14}
        disabled={!editing}
      ></Information>
      <Label>E-mail:</Label>
      <InformationBigger
        disabled={!editing}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        maxLength={40}
      ></InformationBigger>
      <ActionBar>
        {editing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(edit({ email, phone, id, name }));
                setEditing(false);
              }}
            >
              Salvar
            </SaveButton>
            <DeleteButton onClick={cancelEditing}>Cancelar</DeleteButton>
          </>
        ) : (
          <>
            <Button onClick={() => setEditing(true)}>Editar</Button>
            <DeleteButton onClick={() => dispatch(remove(id))}>
              Remover
            </DeleteButton>
          </>
        )}
      </ActionBar>
    </Card>
  );
};

export default Contact;
