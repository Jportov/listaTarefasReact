import * as enums from '@/components/utils/enums/Tarefa';
import Tarefa from '@/models/Tarefa';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const tarefasSlice = createSlice({
    name: 'tarefas',
    initialState: [
        new Tarefa('Estudar Redux', enums.Prioridade.IMPORTANTE, enums.Status.PENDENTE, 'Estudar Redux para melhorar a performance do projeto', 1),
        new Tarefa('Estudar TypesScript', enums.Prioridade.URGENTE, enums.Status.CONCLUIDA, 'Estudar TS para melhorar a performance do projeto', 2),
        new Tarefa('Estudar React', enums.Prioridade.NORMAL, enums.Status.PENDENTE, 'Estudar REACT para melhorar a performance do projeto', 3),
        
    ],
    reducers:{
                remove: (state, action: PayloadAction<number>) => {
                    return state.filter((tarefa) => tarefa.id !== action.payload);}
}});

export const { remove } = tarefasSlice.actions;
export default tarefasSlice.reducer;