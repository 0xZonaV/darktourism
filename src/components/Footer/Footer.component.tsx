import {
    ContactBox,
    ContactMeBox,
    ContactMeText,
    InstMediaLinkImage,
    SocialMediaLinkBox, TGMediaLinkImage, YearText
} from './Footer.style';

const Footer = () => {
    return(
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
    )
}

export default Footer;