import {Grid} from "@mui/material";
import {LineWhat, WhatIsDarkTourism} from "./MiddleTitle.style";

const MiddleTitleComponent = () => {
    return(
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
    )
}

export default MiddleTitleComponent;