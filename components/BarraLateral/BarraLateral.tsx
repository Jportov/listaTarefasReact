import { Botao, Campo } from "@/app/styles";
import { alteraTermo } from "@/store/reducers/filtro";
import { RootReducer } from "@/store/store";
import { useRouter } from "expo-router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as enums from '../../components/utils/enums/Tarefa';
import FiltroCard from "../FiltrosCard/FiltroCard";
import * as S from './styles';


type Props = {
    mostrarFiltros: boolean
}





export default function BarraLateral({mostrarFiltros}: Props) {
    const router = useRouter(); 
    const dispatch = useDispatch();
    const {termo} = useSelector((state: RootReducer) => state.filtro);



    return (
    <S.Aside>
        {mostrarFiltros ? (
            <>
            <Campo placeholder="Buscar" value={termo} onChange={evento=>dispatch(alteraTermo(evento.target.value))}/>
            <S.Filtros>
            <FiltroCard criterio="status"  legenda={'Pendentes'} valor={enums.Status.PENDENTE}/>
            <FiltroCard criterio="status"  legenda={'Concluidas'} valor={enums.Status.CONCLUIDA}/>
            <FiltroCard criterio="prioridade"  legenda={'Urgentes'} valor={enums.Prioridade.URGENTE}/>
            <FiltroCard criterio="prioridade"  legenda={'Importantes'} valor={enums.Prioridade.IMPORTANTE}/>
            <FiltroCard criterio="prioridade"  legenda={'Normal'} valor={enums.Prioridade.NORMAL}/>
            <FiltroCard criterio="todas"  legenda={'Todas'} />
            </S.Filtros>
            </>
        ): (
            <Botao type="button" onClick={()=> router.push('/')}>Voltar a lista de tarefas</Botao>
        )}
            
        </S.Aside>
        
    
)}