import {RedirectButtons} from "@/components/RedirectButtons/RedirectButtons.const";
import {ButtonLink} from "@/components/RedirectButtons/RedirectButtons.style";

export const RedirectButtonsMapping = RedirectButtons.map(
    (element) => {
        const {name, startIcon} = element;

        return(
            <ButtonLink startIcon={startIcon} key={name}>
                {name}
            </ButtonLink>
        );
    }
);