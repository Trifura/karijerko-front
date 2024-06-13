import Navbar from "../../core/components/Navbar.jsx";

import ProfileLanguages from "../../profile/components/languages/ProfileLanguages.jsx";
import ProfileEducation from "../../profile/components/education/ProfileEducation.jsx";
import ProfileSkills from "../../profile/components/skills/ProfileSkills.jsx";
import ProfileSelect from "../../profile/components/ProfileSelect.jsx";
import ProfileInfo from "../../profile/components/ProfileInfo.jsx";
import ProfilePortfolio from "../../profile/components/portfolio/ProfilePortfolio.jsx";
import UserInfo from "../../profile/components/UserInfo.jsx";
import { useProfile } from "../../profile/hooks/useProfile.js";
import {useEffect, useState} from "react";

import profileService from '../../profile/services/profile.js'
import {useLoaderData} from "react-router-dom";


export default function PublicView() {
    const user = useLoaderData()

    const [selectedProfileId, setSelectedProfileId] = useState(null);
    const { profile, setProfile } = useProfile();

    useEffect(() => {
        if (selectedProfileId) return

        // on first render fetch profiles from user because they are already available
        const primaryProfile = user.profiles.find(profile => profile.isPrimary);

        setSelectedProfileId(primaryProfile?.id);
    }, [user.profiles])

    useEffect(() => {
        if (!selectedProfileId) return;

        profileService.fetchPublic(selectedProfileId).then(data => {
            setProfile(data)
        })
    }, [selectedProfileId]);

    if (!profile) return null

    return (
        <>
            <Navbar />
            <div className="lg:hidden mt-20">
                <UserInfo user={user} isPublic={true} />
                <hr className="border-Swan"/>
                <div className="p-8 flex flex-col gap-6">
                    <ProfileSelect value={profile} onSelect={setSelectedProfileId} options={user.profiles} isPublic={true} />
                    <ProfileInfo profile={profile} setProfile={setProfile} setSelectedProfileId={setSelectedProfileId} isPublic={true}/>
                </div>
                <hr className="border-Swan"/>
                <ProfilePortfolio profile={profile} projects={profile.projects} isPublic={true} />
                <hr className="border-Swan"/>
                <ProfileSkills skills={profile.skills} isPublic={true} />
                <hr className="border-Swan"/>
                <ProfileLanguages userLanguages={user.languages} isPublic={true} />
                <hr className="border-Swan"/>
                <ProfileEducation educations={user.educations} isPublic={true} />
            </div>
            <div className="hidden lg:block border-2 border-Swan rounded-2xl mt-32 mb-10 max-w-5xl mx-auto">
                <UserInfo user={user} isPublic={true} />
                <hr className="border-Swan"/>
                <div className="flex h-full">
                    <div className="max-w-[350px] w-full border-r border-r-Swan">
                        <ProfileSelect value={profile} onSelect={setSelectedProfileId} options={user.profiles} isPublic={true} />
                        <hr className="border-Swan"/>
                        <ProfileLanguages userLanguages={user.languages} isPublic={true}  />
                        <hr className="border-Swan" />
                        <ProfileEducation educations={user.educations} isPublic={true} />
                    </div>
                    <div className="w-full">
                        <ProfileInfo profile={profile} setProfile={setProfile} setSelectedProfileId={setSelectedProfileId} profiles={user.profiles} isPublic={true} />
                        <hr className="border-Swan" />
                        <ProfilePortfolio profile={profile} projects={profile.projects} isPublic={true} />
                        <hr className="border-Swan" />
                        <ProfileSkills skills={profile.skills} isPublic={true} />
                    </div>
                </div>
            </div>
        </>
    )
}
