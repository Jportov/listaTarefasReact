import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
        *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        }
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 224px auto;`

    export const MainContainer = styled.main`
    background-color: ${variaveis.branco};
    padding: 0 40px;
    height: 100vh;
    overflow-y: scroll;
    width: 100%;
    `
    
    
    export const Titulo = styled.h2`
        display: block;
        font-size: 18px;
        font-weight: Bold;
        padding: 20px 0;
        margin-top: 40;
        margin-bottom: 40;
        
    `

    export const Campo = styled.input`
    padding: 8px;   
    background-color: ${variaveis.branco};
    border-radius: 8px;
    font-weight:bold;
    color:${variaveis.cinza2};
    width: 100%;
    border-color:${variaveis.cinza2};
    
`;

export const Botao = styled.button`
    background-color: ${variaveis.cinza};
    font-weight: bold;
    font-size: 12px;
    color: ${variaveis.branco};
    padding: 8px 12px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    margin-right: 8px;

`
export const BotaoSalvar = styled(Botao)`
    background-color: ${variaveis.botaoVerde};`

export default EstiloGlobal;