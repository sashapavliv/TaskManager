export const setTaskArray = () => {
    if (Object.keys(JSON.parse(localStorage.getItem("tasks") || "{}")).length)
        return JSON.parse(localStorage.getItem("tasks") || "{}");
    return [];
};