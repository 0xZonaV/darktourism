import {Grid} from "@mui/material";
import {DarktourismToJapan, LineHeader} from "./HeaderTitle.style";

const HeaderTitleComponent = () => {
    return(
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
    )
}

export default HeaderTitleComponent;