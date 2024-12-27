import FiltroCard from "../FiltrosCard/FiltroCard";
import * as S from './styles';


export default function BarraLateral() {
    return (
    <S.Aside>
        <S.CampoBuscar placeholder="Buscar"/>
        <S.Filtros>
            <FiltroCard ativo contador={1} legenda={'Pendentes'}/>
            <FiltroCard contador={2} legenda={'Concluidas'}/>
            <FiltroCard contador={3} legenda={'Urgentes'}/>
            <FiltroCard contador={4} legenda={'Importantes'}/>
            <FiltroCard contador={5} legenda={'Normal'}/>
            <FiltroCard contador={6} legenda={'Todas'}/>
        </S.Filtros>
</S.Aside>
);
} 

