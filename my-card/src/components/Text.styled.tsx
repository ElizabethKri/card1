import styled from "styled-components";

type StyledTextPropsType = {
    fontsize?: string;
    color?: string;
    weight?: string;
}

export const StyledText = styled.div  <StyledTextPropsType> `
  font-size: ${props => props.fontsize || '1rem'};
  color: ${props => props.color || 'black'} ;
  font-weight: ${props => props.weight || 'normal'};
  width: 100%;
  text-align:justify;
  padding: 5px;
`