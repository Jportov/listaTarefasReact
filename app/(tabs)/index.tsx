
import BarraLateral from '@/components/BarraLateral/BarraLateral';
import BotaoAdd from '@/components/BotaoAdicionar/BotaoAdd';
import ListaDeTarefas from '@/components/ListaDeTarefas/ListaDeTarefas';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import EstiloGlobal, { Container } from '../styles';



export default function HomeScreen() {
  return (
    <Provider store={store} >
      <EstiloGlobal />
        <Container>
          <BarraLateral mostrarFiltros/>
          <ListaDeTarefas />
          <BotaoAdd/>
      </Container>
    </Provider>
    
  );
};

