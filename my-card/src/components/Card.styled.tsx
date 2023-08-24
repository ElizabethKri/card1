import styled from "styled-components";
import {myTheme} from "../styles/Theme.styled";

type StyledCardPropsType = {
    img?: string;
}
export const StyledCard = styled.div <StyledCardPropsType>`
  background-color: ${myTheme.colors.primary};
  height: 480px;
  width: 350px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px rgba(199, 199, 206, 0.95)
`
