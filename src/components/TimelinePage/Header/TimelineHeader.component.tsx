import {
    TimelineLine,
    TimelineText
} from "@/components/TimelinePage/Header/TimelineHeader.style";
import {Grid} from "@mui/material";

const TimelineHeader = () => {
    return(
        <>
            <Grid component="main"
                  container
                  spacing={2}
                  style={{
                      marginLeft: "7.5%",
                      marginTop: "7.5%",
                      marginRight: "20px",
                  }}
            >
                <Grid item xs={6}>
                    <TimelineText>
                        TRAVEL TIMELINE
                    </TimelineText>
                </Grid>
                <Grid item xs={4} sx={{ verticalAlign: "middle" }}>
                    <TimelineLine />
                </Grid>
            </Grid>
        </>

    )
}

export default TimelineHeader;