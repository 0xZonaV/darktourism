import {
    BigText,
    ButtonLink, ContactBox, ContactMeBox, ContactMeText,
    DarktourismToJapan, FirstLineImage, InstMediaLinkImage,
    LineHeader,
    LineWhat, SecondLineImage, SocialMediaLinkBox, TGMediaLinkImage,
    WhatIsDarkTourism, YearText
} from "@/styles/indexPage.style";
import {Grid} from "@mui/material"
import {Box} from "@mui/system";

import VectorIcon from '/public/Vector.svg';
import ActivityIcon from '/public/activity.svg';
import TagrightIcon from '/public/tagright.svg';
import HouseIcon from '/public/house.svg';

export default function Home() {

    return (
      <>
         <Grid component="main"
               container
               spacing={2}
               style={{
                   marginLeft: "7.64%",
                   marginTop: "5.37%",
                   marginRight: "20px"
                }}
         >
             <Grid item xs={7}>
                 <DarktourismToJapan>
                     DARK TOURISM TRIP TO JAPAN
                 </DarktourismToJapan>
             </Grid>
             <Grid item xs={3}>
                <LineHeader />
             </Grid>
         </Grid>

          <Box sx={{
              marginLeft: "49%",
              marginRight: "27%",
              marginTop: "13%",
          }}>
              <ButtonLink  startIcon={<VectorIcon />}>
                  travel timeline
              </ButtonLink>
              <ButtonLink  startIcon={<ActivityIcon />}>
                  itenerary
              </ButtonLink>
              <ButtonLink  startIcon={<TagrightIcon />}>
                  hiroshima
              </ButtonLink>
              <ButtonLink  startIcon={<TagrightIcon />}>
                  okunoin cementary
              </ButtonLink>
              <ButtonLink  startIcon={<TagrightIcon />}>
                  aokigahara
              </ButtonLink>
              <ButtonLink  startIcon={<HouseIcon />}>
                  where to stay
              </ButtonLink>
          </Box>

          <Grid
                container
                spacing={2}
                style={{
                    marginLeft: "12.78%",
                    marginTop: "12%",
                    marginRight: "20px"
                }}
          >
              <Grid item xs={4}
                    sx={{
                        marginRight:"50px"
                    }}
              >
                  <WhatIsDarkTourism>
                      WHAT IS DARK TOURISM?
                  </WhatIsDarkTourism>
              </Grid>
              <Grid item xs={5}>
                  <LineWhat />
              </Grid>
          </Grid>


          <Grid container sx={{
              marginLeft: "13.75%",
              marginTop: "12%",
          }}>
              <Grid item xs={4.5} style={{ marginTop: "56px", marginRight: "10%" }}>
                  <BigText>
                      Dark tourism deals with the philosophical interrogation on death. Visitors who are interested in these spaces manifest their intention to understand others' pain or simply educational goals. Dark tourists imagine often their own finitude through the figure of the Other. Dark tourism helps to enhance the recipient capacity of society as well as giving a lesson to next generations.
                  </BigText>
              </Grid>
              <Grid item xs={5.5}>
                  <Box>
                      <FirstLineImage>
                          <img src={"/Rectangle 1.png"} alt={"1"} style={{ marginBottom: "29px" }} />
                          <img src={"/Rectangle 3.png"} alt={"1"} style={{ marginTop: "20px", marginLeft: "29px" }}  />
                      </FirstLineImage>
                      <SecondLineImage style={{ marginTop: "6px" }}>
                          <img src={"/Rectangle 2.png"} alt={"1"} />
                          <img src={"/Rectangle 4.png"} alt={"1"} style={{ marginLeft: "29px", marginBottom: "20px" }} />
                      </SecondLineImage>
                  </Box>
              </Grid>
          </Grid>

          <ContactBox>
              <ContactMeBox>
                  <ContactMeText>
                      Contact Me
                  </ContactMeText>
              </ContactMeBox>

              <SocialMediaLinkBox>
                  <InstMediaLinkImage />
                  hanagasum11
              </SocialMediaLinkBox>

              <SocialMediaLinkBox>
                  <TGMediaLinkImage />
                  ha_nagasumi
                  <YearText>
                      2023
                  </YearText>
              </SocialMediaLinkBox>

          </ContactBox>

      </>
  )
}
