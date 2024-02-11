import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import variables from "../../styles/variables";
import { remove } from "../../store/reducers/contact";
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

const Information = styled.p`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: "Roboto Mono", monospace;
  padding: 8px;
  border-bottom: 1px solid;
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

const Contact = ({ name, phone, email, id }: Props) => {
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  return (
    <Card>
      <Title>{name}</Title>
      <Information>Número: {phone}</Information>
      <Information>E-mail: {email}</Information>
      <ActionBar>
        {editing ? (
          <>
            <SaveButton>Salvar</SaveButton>
            <DeleteButton onClick={() => setEditing(false)}>
              Cancelar
            </DeleteButton>
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
