import {Grid} from "@mui/material";
import BigTextComponent from "@/components/IndexPage/BigTextWithImages/BigText.component";
import ImagesWithOutTextComponent from "@/components/IndexPage/BigTextWithImages/ImagesWithOutTextComponent";

const BigTextWithImagesModule = () => {
    return(
        <Grid container sx={{
            marginLeft: "13.75%",
            marginTop: "12%",
        }}>
            <BigTextComponent />
            <ImagesWithOutTextComponent />
        </Grid>
    )
}

export default BigTextWithImagesModule;