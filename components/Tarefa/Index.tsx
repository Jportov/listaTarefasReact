import React, { useState } from 'react';
import * as enums from '../../components/utils/enums/Tarefa';
import * as S from './styles';

type TarefaProps = {
    titulo:string;
    prioridade: enums.Prioridade;
    status: enums.Status;
    descricao: string;



};


const Tarefa = ({titulo, prioridade, status, descricao}:TarefaProps) => {
    const [estaEditando, setEstaEditando] = useState(false);
    return  (
        <S.Card>
            <S.Titulo>{titulo}</S.Titulo>
            <S.Tag paramentro="prioridade" prioridade={prioridade}>{prioridade}</S.Tag>
            <S.Tag  paramentro="status" status={status}>{status}</S.Tag>
            <S.Descricao value={descricao}/>
            <S.BarraAcao>
                {estaEditando ? (
                    <>
                    <S.BotaoSalvar >Salvar</S.BotaoSalvar>
                    <S.BotaoCancelar onClick={()=> setEstaEditando(false)}>Cancelar</S.BotaoCancelar>
                    </>) :
                    ( 
                    <>
                    <S.Botao onClick={()=> setEstaEditando(true)}>Editar</S.Botao>
                    <S.BotaoCancelar>Remover</S.BotaoCancelar>
                    </>
                    
                )}
                
                </S.BarraAcao>
        </S.Card>
    );
};
export default Tarefa;