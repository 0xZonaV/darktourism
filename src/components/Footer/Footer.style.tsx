import styled from "styled-components";
import {Box} from "@mui/system";
import TelegramIcon from "/public/ScialMedia/telegramIcon.svg";
import InstagramIcon from "/public/ScialMedia/instagramIcon.svg";



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