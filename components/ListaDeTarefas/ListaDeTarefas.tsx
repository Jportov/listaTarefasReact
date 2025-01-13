import { MainContainer, Titulo } from "@/app/styles";
import React from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store/store";
import Tarefa from "../Tarefa/Index";


const ListaDeTarefas = () => {
  const {itens} = useSelector((state: RootReducer) => state.tarefas);
  const {termo, criterio, valor} = useSelector((state: RootReducer) => state.filtro);

  const filtraTarefas = () => {
    let tarefasFiltradas = itens;
    if(termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter( 
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0)
      

        if(criterio==='prioridade') {
          tarefasFiltradas = tarefasFiltradas.filter( 
            (item) => item.prioridade === valor)
        }else if (criterio=== 'status') {
          tarefasFiltradas = tarefasFiltradas.filter( 
            (item) => item.status === valor)
        } return tarefasFiltradas 
      }else {
        return itens}
  }
    const exibeResultadoFiltragem = (quantidade: number) => {
      let mensagem = '';  
      const complementacao = termo !== undefined && termo.length > 0 ? ` e "${termo}"` : '';

      if(criterio === 'todas') {
          mensagem =`${quantidade} Tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
        mensagem = `${quantidade} Tarefa(s) encontrada(s) como: "${`${criterio}=${valor}`}" ${complementacao}`
    }
    return mensagem;
  }
      const tarefas = filtraTarefas();
      const mensagem = exibeResultadoFiltragem(tarefas.length);

  return (
    <MainContainer>
    <Titulo  as='p'>
      {mensagem}
    </Titulo>
    <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa id={t.id} titulo={t.titulo} prioridade={t.prioridade} status={t.status} descricao={t.descricao}/>
          </li>
        ))}
      
    </ul>
</MainContainer>)
};


export default ListaDeTarefas;































/* export default function ListaDeTarefas() {
    return(
        <ThemedText style={styles.container} >
            <ThemedText  style={styles.label} type='title'>2 Tarefas marcadas como: &quot;Categoria&ldquo; e &quot;Termo&ldquo;</ThemedText>
        </ThemedText>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:2,
    padding: 8,
    color: '#000',
    
  },
  contador: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  label: {
    
    textAlign: 'center',
    color: '#000'
    
  },
});
 */