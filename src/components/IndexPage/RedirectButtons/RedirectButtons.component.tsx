import {Box} from "@mui/system";
import {RedirectButtonsMapping} from "@/components/IndexPage/RedirectButtons/RedirectButtons.functions";

const RedirectButtonsComponent = () => {
    return(
        <Box sx={{
            marginLeft: "49%",
            marginRight: "27%",
            marginTop: "13%",
            display: "block",
        }}>
            {RedirectButtonsMapping}
        </Box>
    )
}

export default RedirectButtonsComponent;