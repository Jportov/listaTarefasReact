import styled from "styled-components";



type Props = {
    ativo: boolean;
}
export const Card = styled.div<Props>`
    padding: 8px;
    color:${(props)=> (props.ativo ? '#1E90FF   ' : '#a1a1a1')};
    border: 1px solid ${(props)=> (props.ativo ? '#1E90FF  ' : '#fcfcfc')};
    border-radius: 8px;
    border-width: 1px;
    background-color:${(props)=> (props.ativo ? '#fff  ' : '#fcfcfc')};
    gap: 8px;
    cursor: pointer;
`;

export const Contador = styled.div`
    font-size: 24px;
    display: block;
    font-weight: bold;
    `

export const Label = styled.div`
    font-size: 14px;

`;