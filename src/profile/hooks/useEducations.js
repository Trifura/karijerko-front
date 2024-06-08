import {useState} from "react";


export const useEducations = () => {
    const [educations, setEducations] = useState([]);

    return {
        educations,
        setEducations,
    };
};