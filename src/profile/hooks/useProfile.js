import {useState} from "react";
import {getSkillsFromProjects} from "../utils/ProjectHelper.js";


export const useProfile = () => {
    const [profile, setProfileState] = useState(null);

    const setProfile = (updatedProfile) => {
        const skills = getSkillsFromProjects(updatedProfile.projects)
        setProfileState({
            ...updatedProfile,
            skills
        });
    }
    return {
        profile,
        setProfile,
    };
};