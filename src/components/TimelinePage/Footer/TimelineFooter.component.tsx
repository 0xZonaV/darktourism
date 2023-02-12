import {
    ToMainPageButton,
    ToMainPageButtonBox,
    ToMainPageButtonText
} from "./TimelineFooter.style";
import Router from "next/router";

const TimelineFooter = () => {

    const onClick = () => {
        Router.push("/");
    }

    return(
        <ToMainPageButtonBox>
            <ToMainPageButton onClick={onClick}>
                <ToMainPageButtonText>
                    TO MAIN PAGE
                </ToMainPageButtonText>
            </ToMainPageButton>
        </ToMainPageButtonBox>
    )
}

export default TimelineFooter;