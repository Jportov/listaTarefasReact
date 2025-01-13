import Cadastro from "@/components/Cadastro/Cadastro";
import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import EstiloGlobal, { Container } from "../styles";





export default function NovaTarefa() {
  return (
    <Provider store={store} >
      <EstiloGlobal />
        <Container>
        <Cadastro/>
        </Container>
    </Provider>
    
  );
}





























