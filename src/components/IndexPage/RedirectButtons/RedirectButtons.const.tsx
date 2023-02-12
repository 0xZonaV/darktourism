import VectorIcon from "../../../../public/ButtonStartIcon/Vector.svg";
import ActivityIcon from "../../../../public/ButtonStartIcon/activity.svg";
import TagrightIcon from "../../../../public/ButtonStartIcon/tagright.svg";
import HouseIcon from "../../../../public/ButtonStartIcon/house.svg";

export type RedirectButtonsType = {
    name: string;
    startIcon: any;
    redirect: string;
}

export const RedirectButtons: RedirectButtonsType[] = [
    {
        name: "travel timeline",
        startIcon: <VectorIcon />,
        redirect: "/timeline"
    },

    {
        name: "itenerary",
        startIcon: <ActivityIcon />,
        redirect: "/itenerary"
    },

    {
        name: "hiroshima",
        startIcon: <TagrightIcon />,
        redirect: "/hiroshima"
    },

    {
        name: "okunoin cementary",
        startIcon: <TagrightIcon />,
        redirect: "/okunoincementary"
    },

    {
        name: "aokigahara",
        startIcon: <TagrightIcon />,
        redirect: "/aokigahara"
    },

    {
        name: "where to stay",
        startIcon: <HouseIcon />,
        redirect: "/stay"
    },
];