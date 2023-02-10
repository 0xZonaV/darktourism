import VectorIcon from "../../../public/ButtonStartIcon/Vector.svg";
import ActivityIcon from "../../../public/ButtonStartIcon/activity.svg";
import TagrightIcon from "../../../public/ButtonStartIcon/tagright.svg";
import HouseIcon from "../../../public/ButtonStartIcon/house.svg";

export type RedirectButtonsType = {
    name: string;
    startIcon: any;
}

export const RedirectButtons: RedirectButtonsType[] = [
    {
        name: "travel timeline",
        startIcon: <VectorIcon />
    },

    {
        name: "itenerary",
        startIcon: <ActivityIcon />
    },

    {
        name: "hiroshima",
        startIcon: <TagrightIcon />
    },

    {
        name: "okunoin cementary",
        startIcon: <TagrightIcon />
    },

    {
        name: "aokigahara",
        startIcon: <TagrightIcon />
    },

    {
        name: "where to stay",
        startIcon: <HouseIcon />
    },
];