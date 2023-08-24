import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import {myTheme} from "./styles/Theme.styled";
import {StyledCard} from "./components/Card.styled";
import {StyledPicture} from "./components/Picture.styled";
import {StyledText} from "./components/Text.styled";
import {StyledBtn} from "./components/Button.styled";



function App() {
  return (
    <div className="App">
      <Box>
          <StyledCard>
              <StyledPicture src = {'https://w.forfun.com/fetch/bc/bc45d1305c40e2ec7d72c71080b34751.jpeg'}>
              </StyledPicture>
              <StyledText fontsize={"1.2rem"} weight={'bold'}>Собака - лучший друг человека!</StyledText>
              <StyledText  color = {myTheme.text.secondary}>Не все собаки могут выслеживать преступников, преследовать лису в норе или пасти овец. Не все собаки сильные, мощные, отважные. Есть среди них и такие, которых самому владельцу нужно защищать от злых людей и собак.</StyledText>
              <StyledBtn btnType={"primary"}>Посмотреть подробнее</StyledBtn>
              <StyledBtn btnType={"outline"}>Сохранить</StyledBtn>
          </StyledCard>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div `
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button{
    cursor: pointer;
  }

  @media ${myTheme.media.tablet}{
    flex-direction: column;
  }
`
