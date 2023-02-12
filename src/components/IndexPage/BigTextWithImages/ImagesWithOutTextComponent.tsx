import {Grid} from "@mui/material";
import {Box} from "@mui/system";
import {FirstLineImage, SecondLineImage} from "./BigTextWithImages.styles";

const ImagesWithOutTextComponent = () => {
    return(
        <Grid item xs={5.5}>
            <Box>
                <FirstLineImage>
                    <img src={"/img/Rectangle 1.png"} alt={"1"} style={{ marginBottom: "29px" }} />
                    <img src={"/img/Rectangle 3.png"} alt={"1"} style={{ marginTop: "20px", marginLeft: "29px" }}  />
                </FirstLineImage>
                <SecondLineImage style={{ marginTop: "6px" }}>
                    <img src={"/img/Rectangle 2.png"} alt={"1"} />
                    <img src={"/img/Rectangle 4.png"} alt={"1"} style={{ marginLeft: "29px", marginBottom: "20px" }} />
                </SecondLineImage>
            </Box>
        </Grid>
    )
}

export default ImagesWithOutTextComponent;