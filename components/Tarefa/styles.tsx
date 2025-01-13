import { Botao } from "@/app/styles";
import styled from "styled-components";
import variaveis from "../../app/styles/variaveis";
import * as enums from "../utils/enums/Tarefa";


type TagProps = {
  prioridade?: enums.Prioridade;
  status?: enums.Status;
  paramentro:'status' | 'prioridade';
} 


function retonarCorDeFundo(props: TagProps): string {
  if(props.paramentro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.botaoVermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE) return variaveis.botaoAmarelo2
  } else {
  if (props.status === enums.Status.PENDENTE) return variaveis.botaoAmarelo
  if (props.status === enums.Status.CONCLUIDA) return variaveis.botaoVerde
}

return '#ccc';}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px #1E90FF;
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 32px;
  width: 100%;
  max-width: 100%;
  
  

        label {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        }
`;
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
 
  
`;


export const Tag = styled.span<TagProps>`
padding: 4px 8px;
color: #fff;
font-size: 10px;
font-weight: bold;
background-color:${(props)=> retonarCorDeFundo(props)};
border-radius: 8px;
margin-right: 16px;
display: inline-block;
`;

export const Descricao = styled.textarea`
  color: #8B8B8B;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom:16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  `;
  
export const BarraAcao = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`;
  export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.botaoVermelho};`
  
  export const BotaoEditar = styled(Botao)`
  background-color: ${variaveis.botaoVerde};`
