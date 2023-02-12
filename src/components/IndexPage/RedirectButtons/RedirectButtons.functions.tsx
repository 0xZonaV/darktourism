import {RedirectButtons} from "@/components/IndexPage/RedirectButtons/RedirectButtons.const";
import {ButtonLink} from "@/components/IndexPage/RedirectButtons/RedirectButtons.style";
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