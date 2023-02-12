import styled from "styled-components";

export const TimelineText = styled.div`
  width: 100%;
  height: 100%;
  
  font-family: 'Big Shoulders Display';
  font-style: normal;
  font-weight: 700;
  font-size: 128px;
  line-height: 153px;

  background: linear-gradient(91.69deg, #FFFFFF 24.21%, #C2D8D6 104.39%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export const TimelineLine = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 0;

  margin-top: 68px;
  margin-right: 7.99%;

  border: 3px solid #94B0AF;
  transform: rotate(-180deg);
`