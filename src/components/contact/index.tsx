import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { remove, edit } from "../../store/reducers/contact";
import ContactClass from "../../models/contact";
import {
  ActionBar,
  Button,
  Card,
  DeleteButton,
  Information,
  InformationBigger,
  Label,
  SaveButton,
  Title,
} from "../../styles";

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
