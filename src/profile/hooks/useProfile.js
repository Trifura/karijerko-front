import {useState} from "react";


export const useProfile = () => {
    const [profile, setProfile] = useState(null);

    return {
        profile,
        setProfile,
    };
};