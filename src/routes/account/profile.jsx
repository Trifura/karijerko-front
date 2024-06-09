import Navbar from "../../core/components/Navbar.jsx";

import ProfileLanguages from "../../profile/components/languages/ProfileLanguages.jsx";
import ProfileEducation from "../../profile/components/education/ProfileEducation.jsx";
import ProfileSkills from "../../profile/components/skills/ProfileSkills.jsx";
import ProfileSelect from "../../profile/components/ProfileSelect.jsx";
import ProfileInfo from "../../profile/components/ProfileInfo.jsx";
import ProfilePortfolio from "../../profile/components/portfolio/ProfilePortfolio.jsx";
import UserInfo from "../../profile/components/UserInfo.jsx";
import { useProfile } from "../../profile/hooks/useProfile.js";
import {useDispatch, useSelector} from "react-redux";
import { useUserLanguages} from "../../profile/hooks/useUserLanguages.js";
import {useEducations} from "../../profile/hooks/useEducations.js";
import {useEffect, useState} from "react";

import profileService from '../../profile/services/profile.js'
import userLanguageService from "../../profile/services/userLanguage.js";

import EmptyProfile from "../../profile/components/EmptyProfile.jsx";
import {create} from "../../profile/store/actions.js";
import educationService from "../../profile/services/education.js";


export default function Profile() {
    const dispatch = useDispatch()

    const { account: user } = useSelector(state => state.auth);
    const { profiles } = useSelector(state => state.profile);

    const [selectedProfileId, setSelectedProfileId] = useState(null);

    const { profile, setProfile } = useProfile();
    const { userLanguages, setUserLanguages } = useUserLanguages()
    const { educations, setEducations } = useEducations()

    useEffect(() => {
        if (selectedProfileId) return
        
        // on first render fetch profiles from user because they are already available
        const primaryProfile = profiles.find(profile => profile.isPrimary);

        setSelectedProfileId(primaryProfile?.id);
    }, [profiles])

    useEffect(() => {
        if (!selectedProfileId) return;

        profileService.fetch(selectedProfileId).then(data => {
            setProfile(data)
        })
    }, [selectedProfileId]);

    useEffect(() => {
        userLanguageService.fetchAll().then(data => {
            setUserLanguages(data)
        })
    }, [])

    useEffect(() => {
        educationService.fetchAll().then(data => {
            setEducations(data)
        })
    }, [])


    const createProfile = async (createdProfile) => {
        const {payload} = await dispatch(create(createdProfile))

        setSelectedProfileId(payload.id)
    }

    const setProjects = (projects) => {
        setProfile({...profile, projects})
    }


    if (!profiles.length) {
        return <EmptyProfile user={user} createProfile={createProfile} />
    }

    if (!profile) return null;

    return (
        <>
            <Navbar/>
            <div className="lg:hidden mt-20">
                <UserInfo user={user}/>
                <hr className="border-Swan"/>
                <div className="p-8 flex flex-col gap-6">
                    <ProfileSelect value={profile} onSelect={setSelectedProfileId} createProfile={createProfile} options={profiles}/>
                    <ProfileInfo profile={profile} setProfile={setProfile} setSelectedProfileId={setSelectedProfileId} profiles={profiles}/>
                </div>
                <hr className="border-Swan"/>
                <ProfilePortfolio profile={profile} projects={profile.projects} setProjects={setProjects} />
                <hr className="border-Swan"/>
                <ProfileSkills skills={profile.skills}/>
                <hr className="border-Swan"/>
                <ProfileLanguages userLanguages={userLanguages} setUserLanguages={setUserLanguages} />
                <hr className="border-Swan"/>
                <ProfileEducation educations={educations} setEducations={setEducations} />
            </div>
            <div className="hidden lg:block border-2 border-Swan rounded-2xl mt-32 mb-10 max-w-5xl mx-auto">
                <UserInfo user={user}/>
                <hr className="border-Swan"/>
                <div className="flex h-full">
                    <div className="max-w-[350px] w-full border-r border-r-Swan">
                        <ProfileSelect value={profile} onSelect={setSelectedProfileId} createProfile={createProfile} options={profiles} />
                        <hr className="border-Swan"/>
                        <ProfileLanguages userLanguages={userLanguages} setUserLanguages={setUserLanguages} />
                        <hr className="border-Swan" />
                        <ProfileEducation educations={educations} setEducations={setEducations} />
                    </div>
                    <div className="w-full">
                        <ProfileInfo profile={profile} setProfile={setProfile} setSelectedProfileId={setSelectedProfileId} profiles={profiles} />
                        <hr className="border-Swan" />
                        <ProfilePortfolio profile={profile} projects={profile.projects} setProjects={setProjects} />
                        <hr className="border-Swan" />
                        <ProfileSkills skills={profile.skills} />
                    </div>
                </div>
            </div>
        </>
    )
}
