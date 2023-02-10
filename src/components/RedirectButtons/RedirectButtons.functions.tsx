import {RedirectButtons} from "@/components/RedirectButtons/RedirectButtons.const";
import {ButtonLink} from "@/components/RedirectButtons/RedirectButtons.style";
import Router from "next/router";



export const RedirectButtonsMapping = RedirectButtons.map(
    (element) => {
        const {name, startIcon, redirect} = element;

        const onClick = async () => {
            await Router.push(redirect)
        }

        return(
            <ButtonLink
                startIcon={startIcon}
                key={name}
                onClick={onClick}
            >
                {name}
            </ButtonLink>
        );
    }
);