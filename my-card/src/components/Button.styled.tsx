import styled, {css} from "styled-components";
import {myTheme} from "../styles/Theme.styled";

type StyledBtnPropsType = {
    fontSize?: string;
    color?: string;
    btnType?: "primary" | "outline";
    backgroundColor?: string;
}

export const StyledBtn = styled.button <StyledBtnPropsType>`
  
  margin: 15px 5px;
  padding: 7px;
  border: 2px solid #228dd9;
  border-radius: 5px;
  &:hover {
    background-color: green;
  }
  
  ${props => props.btnType === "primary" && css <StyledBtnPropsType> `
  background-color: #228dd9;
  color: ${props => props.color || "white"};
  };
`}

  ${props => props.btnType === "outline" && css <StyledBtnPropsType> `
  color: ${props => props.color || myTheme.colors.button};
  };
`}
 
`