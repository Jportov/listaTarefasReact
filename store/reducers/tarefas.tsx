import * as enums from '@/components/utils/enums/Tarefa';
import Tarefa from '@/models/Tarefa';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TarefaState = {
    itens: Tarefa[];

}
const initialState: TarefaState = {
    itens: [
        { id: 1, titulo: 'Tarefa 1', prioridade: enums.Prioridade.IMPORTANTE, status: enums.Status.PENDENTE, descricao: 'Descrição da tarefa 1' },
        { id: 2, titulo: 'Tarefa 2', prioridade: enums.Prioridade.URGENTE, status: enums.Status.PENDENTE, descricao: 'Descrição da tarefa 2' },
        { id: 3, titulo: 'Tarefa 3', prioridade: enums.Prioridade.NORMAL, status: enums.Status.CONCLUIDA, descricao: 'Descrição da tarefa 3' }
    ]
}

const tarefasSlice = createSlice({
    name: 'tarefas',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload);
        },
        editar: (state, action: PayloadAction<Tarefa>) => {
            const indexDaTarefa =  state.itens.findIndex(t=>t.id === action.payload.id);
        if(indexDaTarefa >= 0) {
            state.itens[indexDaTarefa] = action.payload;
        }
        }, 
        cadastrar: (state, action:PayloadAction<Omit<Tarefa, 'id'>>) => {
            const buscarTarefaExistente = state.itens.find(tarefa => tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase())
            if (buscarTarefaExistente) {
                alert("Já existe uma tarefa com esse nome!")
            } else {

                const ultimaTarefa = state.itens[state.itens.length -1]
                const tarefaNova= { 
                    ...action.payload,
                    id: ultimaTarefa ? ultimaTarefa.id + 1 : 1}
                state.itens.push(tarefaNova)
            }
        }, alteraStatus: (state, action: PayloadAction<{id: number; finalizado: boolean }>) =>{
            const indexDaTarefa = state.itens.findIndex((t)=> t.id === action.payload.id)
            if (indexDaTarefa >= 0) {
                state.itens[indexDaTarefa].status = action.payload.finalizado ? enums.Status.CONCLUIDA : enums.Status.PENDENTE
            }

        }
    }
});

export const { remover, editar, cadastrar,alteraStatus } = tarefasSlice.actions;
export default tarefasSlice.reducer;