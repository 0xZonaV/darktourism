import styled from "styled-components";
import {Button} from "@mui/material";

export const ButtonLink = styled(Button)`
  && {
    font-family: 'Big Shoulders Display';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    text-transform: lowercase;
    text-decoration: none;
    color: #FFFFFF; 
    white-space: nowrap;
    display: block;
  }
  
  & .MuiButton-startIcon{
    margin-right: 21px;
    display: inline-block;
    vertical-align: middle;
  }
`