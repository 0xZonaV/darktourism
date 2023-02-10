import styled from "styled-components";
import {Button} from "@mui/material";
import {Box} from "@mui/system";
import TelegramIcon from "/public/telegramIcon.svg";
import InstagramIcon from "/public/instagramIcon.svg";

export const DarktourismToJapan = styled.div`
  width: 100%;
  height: 100%;
  
  font-family: 'Big Shoulders Display';
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 115px;

  background: linear-gradient(90deg, #BDBDCB 4.73%, #B5D3D2 63.99%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

export const WhatIsDarkTourism = styled.div`
  width: 100%;
  height: 100%;
  
  font-family: 'Big Shoulders Display';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;

  background: linear-gradient(89.81deg, #94B0AF 7.9%, #F9F2E6 97.89%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`


export const LineHeader = styled.div`
  box-sizing: border-box;
  
  width: 100%;
  height: 0;
  
  margin-top: 52px;
  margin-right: 7.99%;

  border: 3px solid #94B0AF;
  transform: rotate(-180deg);
`

export const LineWhat = styled.div`
  box-sizing: border-box;
  
  width: 100%;
  height: 0;
  
  margin-top: 33px;
  margin-right: 7.99%;


  border: 3px solid #94B0AF;
  transform: rotate(-180deg);
`



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

export const BigText = styled.div`
  font-family: 'Big Shoulders Display';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;

  color: #EBF0F8;
`

export const FirstLineImage = styled.div`
  display: block;
`

export const SecondLineImage = styled.div`
  display: block;
`

export const ContactMeBox = styled.div`
  border: 3px solid #899A99;
  border-radius: 30px;
  box-sizing: border-box;
  text-align:center;
  max-width: 179px;


`

export const ContactMeText = styled.div`

  font-family: 'Big Shoulders Display';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  
  color: #C9E1E0;
`

export const ContactBox = styled(Box)`
  margin-left: 13.75%;
  margin-top: 9.93%;
`

export const SocialMediaLinkBox = styled.div`
  display: block;

  font-family: 'Big Shoulders Display';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  
  margin-top: 1.28%;

  color: #E2F2F1;
  
`

export const InstMediaLinkImage = styled(InstagramIcon)`
  display: inline-block;
  margin-right: 1.81%;
  vertical-align: middle;
`

export const TGMediaLinkImage = styled(TelegramIcon)`
  display: inline-block;
  margin-right: 1.81%;
  vertical-align: middle;
`

export const YearText = styled.div`
  font-family: 'Mukta';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 66px;

  vertical-align: middle;
  
  float: right;

  color: #94B0AF;
  
  margin-right: 8.19%;
`