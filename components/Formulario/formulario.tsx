import { BotaoSalvar, Campo, MainContainer, Titulo } from "@/app/styles";
import Tarefa from "@/models/Tarefa";
import { cadastrar } from "@/store/reducers/tarefas";
import { useRouter } from "expo-router";
import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import * as enums from "../utils/enums/Tarefa";
import { Form, Opcao, Prioridades } from "./styles";

const Formulario = () => {
  const dispatch = useDispatch();
  const router = useRouter(); 
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL);
  const cadastrarTarefa = (evento: FormEvent) => {evento.preventDefault();
  const tarefaNova = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      Date.now() 
    );
    dispatch(cadastrar({
      titulo,
      prioridade,
      descricao,
      status: enums.Status.PENDENTE,
      
    }));
      router.push("/");};

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          as="textarea"
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          placeholder="Descrição da Tarefa"
          id=""
        />
        <Prioridades>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{" "}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Prioridades>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  );
};

export default Formulario;
