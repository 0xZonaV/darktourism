import {Grid} from "@mui/material";
import {BigText} from "@/components/BigTextWithImages/BigTextWithImages.styles";

const BigTextComponent = () => {
    return(
        <Grid item xs={4.5} style={{ marginTop: "56px", marginRight: "10%" }}>
            <BigText>
                Dark tourism deals with the philosophical interrogation on death. Visitors who are interested in these spaces manifest their intention to understand others' pain or simply educational goals. Dark tourists imagine often their own finitude through the figure of the Other. Dark tourism helps to enhance the recipient capacity of society as well as giving a lesson to next generations.
            </BigText>
        </Grid>
    )
}

export default BigTextComponent;