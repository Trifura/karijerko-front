import {useState} from "react";


export const useLanguages = () => {
    const [languages, setLanguages] = useState([]);

    return {
        languages,
        setLanguages,
    };
};