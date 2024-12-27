import { useSelector } from "react-redux";
import { RootReducer } from "../../store/store";
import Tarefa from "../Tarefa/Index";
import { Container, TituloH2 } from "./styles";


const ListaDeTarefas = () => {
  const {tarefas} = useSelector((state: RootReducer) => state)
  return (
    <Container>
    <TituloH2>2 Tarefas marcadas como:&quot;Categoria&ldquo; e &quot;Termo&ldquo;</TituloH2>
    <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa titulo={t.titulo} prioridade={t.prioridade} status={t.status} descricao={t.descricao}/>
          </li>
        ))}
      
    </ul>
</Container>)
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