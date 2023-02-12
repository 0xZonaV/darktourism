import styled from "styled-components";
import {Button, Typography} from "@mui/material";

export const ToMainPageButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14.51%;
  margin-bottom: 9.55%;
`

export const ToMainPageButton = styled(Button)`
  
  && {
    border: 3px solid #899A99;
    border-radius: 50px;
    box-sizing: border-box;
    text-align: center;
  }
  
`

export const ToMainPageButtonText = styled(Typography)`
  && {
    font-family: 'Big Shoulders Display';
    font-style: normal;
    font-weight: 400;
    font-size: 75px;
    line-height: 90px;

    background: linear-gradient(180deg, #EBF0F8 0%, #B5D3D2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin: 20px 20px 20px 20px;
  }
`