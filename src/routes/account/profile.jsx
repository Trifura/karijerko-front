import Navbar from "../../core/components/Navbar.jsx";

import ProfileLanguages from "../../profile/components/languages/ProfileLanguages.jsx";
import ProfileEducation from "../../profile/components/education/ProfileEducation.jsx";
import ProfileSkills from "../../profile/components/skills/ProfileSkills.jsx";
import ProfileSelect from "../../profile/components/ProfileSelect.jsx";
import ProfileInfo from "../../profile/components/ProfileInfo.jsx";
import ProfilePortfolio from "../../profile/components/portfolio/ProfilePortfolio.jsx";
import UserInfo from "../../profile/components/UserInfo.jsx";
import { useProfile } from "../../profile/hooks/useProfile.js";
import { useUser } from "../../profile/hooks/useUser.js";

export default function Profile() {
    const { profile, setProfile } = useProfile();
    const { user, setUser } = useUser();


    return (
        <>
            <Navbar/>
            <div className="lg:hidden mt-20">
                <UserInfo user={user} />
                <hr className="border-Swan"/>
                <div className="p-8 flex flex-col gap-6">
                    <ProfileSelect value={profile} onSelect={setProfile} options={user.profiles} />
                    <ProfileInfo profile={profile} setProfile={setProfile} />
                </div>
                <hr className="border-Swan" />
                <ProfilePortfolio projects={profile.projects} />
                <hr className="border-Swan" />
                <ProfileSkills skills={profile.skills} />
                <hr className="border-Swan"/>
                <ProfileLanguages languages={user.languages} />
                <hr className="border-Swan"/>
                <ProfileEducation educations={user.educations} />
            </div>
            <div className="hidden lg:block border-2 border-Swan rounded-2xl mt-32 mb-10 max-w-5xl mx-auto">
                <UserInfo user={user} />
                <hr className="border-Swan" />
                <div className="flex h-full">
                    <div className="w-[370px] border-r border-r-Swan">
                        <ProfileSelect value={profile} onSelect={setProfile} options={user.profiles} />
                        <hr className="border-Swan"/>
                        <ProfileLanguages languages={user.languages} />
                        <hr className="border-Swan" />
                        <ProfileEducation educations={user.educations} />
                    </div>
                    <div className="w-full">
                        <ProfileInfo profile={profile} setProfile={setProfile} />
                        <hr className="border-Swan" />
                        <ProfilePortfolio projects={profile.projects} />
                        <hr className="border-Swan" />
                        <ProfileSkills skills={profile.skills} />
                    </div>
                </div>
            </div>
        </>
    )
}
