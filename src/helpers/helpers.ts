import {constants} from "./constants";

export const setTaskArray = () => {
    if(localStorage.getItem("tasks"))
        return JSON.parse(localStorage.getItem(constants.localStorageKey) || "{}");
    return []
};