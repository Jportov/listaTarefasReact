import { alteraFiltro } from "@/store/reducers/filtro";
import { RootReducer } from "@/store/store";
import { useDispatch, useSelector } from 'react-redux';
import * as enums from '../utils/enums/Tarefa';
import * as S from './styles';

export type FiltroProps = {
  legenda:string;
  criterio: 'status' | 'prioridade' | 'todas';
  valor?: enums.Prioridade | enums.Status;
};

const FiltroCard = ({legenda, criterio, valor }: FiltroProps)=> {

    const dispatch = useDispatch();
  
    const {filtro, tarefas} = useSelector((state: RootReducer) => state);
  
    const verificaAtivo = () => {
  
      const mesmoCriterio = filtro.criterio === criterio 
  
      const mesmoValor = filtro.valor === valor;
  
        return mesmoCriterio && mesmoValor;}
      
  const filtrar = ()=> dispatch(alteraFiltro({criterio, valor}));


  const ativo= verificaAtivo();


  const contarTarefas = () => {
    if (criterio === 'todas')return tarefas.itens.length;
    if (criterio  === 'prioridade'){ return tarefas.itens.filter((item)=> item.prioridade === valor).length;}
    if (criterio  === 'status') {return tarefas.itens.filter((item)=> item.status === valor).length;}
}
const contador = contarTarefas(); 

  return (
    <S.Card ativo={ativo} onClick={filtrar}> 
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
  )
}
;


export default FiltroCard;

