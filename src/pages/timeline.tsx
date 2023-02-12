import {TimeLinePage} from "@/styles/timeLinePage.style";
import TimelineHeader from "@/components/TimelinePage/Header/TimelineHeader.component";
import TimelineContent from "@/components/TimelinePage/Content/TimelineContent.component";
import TimelineFooter from "@/components/TimelinePage/Footer/TimelineFooter.component";

const Timeline = () => {
    return(
        <TimeLinePage>
            <TimelineHeader />
            <TimelineContent />
            <TimelineFooter />
        </TimeLinePage>
    )
}

export default Timeline;