import { Botao, BotaoSalvar } from '@/app/styles';
import TarefaClass from '@/models/Tarefa';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as enums from '../../components/utils/enums/Tarefa';
import { alteraStatus, editar, remover } from '../../store/reducers/tarefas';
import * as S from './styles';



type TarefaProps = TarefaClass & {
    titulo:string;
    prioridade: enums.Prioridade;
    status: enums.Status;
    descricao: string;
    id: number;
};


const Tarefa = ({titulo, prioridade, status, descricao: descricaoOriginal, id}:TarefaProps) => {
    const [descricao, setDescricao] = useState('');
    const dispatch = useDispatch();
    const [estaEditando, setEstaEditando] = useState(false);

    useEffect(() => {
        if (descricaoOriginal.length > 0) {
            setDescricao(descricaoOriginal);
        }
    }, [descricaoOriginal]);

    function cancelarEdicao() {
        setEstaEditando(false);
        setDescricao(descricaoOriginal);
    }

    function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
        dispatch(alteraStatus({id, finalizado: evento.target.checked}))
    }
    




    return  (
        <S.Card>
            <label htmlFor={titulo}>
            <input type='checkbox' id={titulo} checked={status === enums.Status.CONCLUIDA} onChange={alteraStatusTarefa}/>
            <S.Titulo>
                {estaEditando && <em>Editando: </em>}
                
                {titulo}</S.Titulo>
            </label>
            <S.Tag paramentro="prioridade" prioridade={prioridade}>{prioridade}</S.Tag>
            <S.Tag  paramentro="status" status={status}>{status}</S.Tag>
            <S.Descricao  disabled={!estaEditando} value={descricao} onChange={evento => setDescricao(evento.target.value)} />
            <S.BarraAcao>
                {estaEditando ? (
                    <>
                    <BotaoSalvar onClick={()=>
                        {
                            dispatch(editar({
                                id,
                                titulo,
                                prioridade,
                                status,
                                descricao
                            })
                        )
                        setEstaEditando(false);
                    }}
                    >
                        Salvar
                    </BotaoSalvar>
                    <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
                    </>) :
                    ( 
                    <>
                    <Botao onClick={()=> setEstaEditando(true)}>Editar</Botao>
                    <S.BotaoCancelar onClick={()=>dispatch(remover(id))}>Remover</S.BotaoCancelar>
                    </>
                    
                )}
                
                </S.BarraAcao>
        </S.Card>
    );
};
export default Tarefa;