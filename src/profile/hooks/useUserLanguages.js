import {useState} from "react";


export const useUserLanguages = () => {
    const [userLanguages, setUserLanguages] = useState([]);

    return {
        userLanguages,
        setUserLanguages,
    };
};