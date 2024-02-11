import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ActionBar,
  Card,
  DeleteButton,
  Information,
  InformationBigger,
  Label,
  SaveButton,
  Title,
} from "../../../styles/index";
import { register } from "../../../store/reducers/contact";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 99vh;
`;

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function registerContact(event: FormEvent) {
    event.preventDefault();
    dispatch(register({ name, email, phone: number }));
    navigate("/");
  }
  return (
    <Content>
      <Card>
        <Title>Novo Contato</Title>
        <Label>Nome:</Label>
        <InformationBigger
          maxLength={40}
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></InformationBigger>
        <Label>Número de Contato:</Label>
        <Information
          maxLength={14}
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        ></Information>
        <Label>E-mail:</Label>
        <InformationBigger
          maxLength={40}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></InformationBigger>
        <ActionBar>
          <SaveButton onClick={registerContact} type="submit">
            Cadastrar
          </SaveButton>
          <DeleteButton onClick={() => navigate("/")}>Retornar</DeleteButton>
        </ActionBar>
      </Card>
    </Content>
  );
};

export default Form;
