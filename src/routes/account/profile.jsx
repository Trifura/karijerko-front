import Navbar from "../../core/components/Navbar.jsx";

import {useState} from "react";
import ProfileEdit from "../../profile/components/ProfileEdit.jsx";
import ProfileCreate from "../../profile/components/ProfileCreate.jsx";
import ProfileLanguages from "../../profile/components/languages/ProfileLanguages.jsx";
import ProfileEducation from "../../profile/components/education/ProfileEducation.jsx";
import ProfileSkills from "../../profile/components/skills/ProfileSkills.jsx";
import ProfileSelect from "../../profile/components/ProfileSelect.jsx";
import ProfileHeader from "../../profile/components/UserInfo.jsx";
import ProfileInfo from "../../profile/components/ProfileInfo.jsx";
import ProfilePortfolio from "../../profile/components/portfolio/ProfilePortfolio.jsx";
import UserInfo from "../../profile/components/UserInfo.jsx";

export default function Profile() {
    const [selectedOption, setSelectedOption] = useState('');
    const options = [
        { value: 'front-end-developer', label: 'Front-end developer' },
        { value: 'back-end-developer', label: 'Back-end developer' },
    ];

    const user = {
        firstName: 'Ivan',
        lastName: 'Mikodanić',
        location: 'Zagreb, Croatia',
        profilePicture: 'https://lh3.googleusercontent.com/a/ACg8ocKKio0Y8lxkgeDVxIeMmxhnTWMp4_VUbd0BIB5WVQuDZ_EEmUY=s96-c',
        languages: [
            { id: 1, name: 'Engleski', proficiency: 'Advanced' },
            { id: 2, name: 'Njemački', proficiency: 'Beginner' },
        ],
        educations: [
            {
                id: '1',
                name: 'Tehničko veleučilište u Zagrebu',
                degree: 'Informatika',
                dateFrom: '2022',
                dateTo: '2025',
                description: ''
            }
        ]
    }

    const profile = {
        name: 'Front-end developer',
        description: 'I am a Full stack developer with real project experience in Frontend (VueJs, Reactjs) and Backend (ExpressJs, Graphql). In my 3 years of experience I\'ve learned a lot about NodeJs and how the web works. I started to work at a really young age because I found a passion for programming.',
        skills: [
            {
                id: '1',
                name: 'VueJs',
            },
            {
                id: '2',
                name: 'Reactjs',
            },
            {
                id: '3',
                name: 'ExpressJs',
            },
            {
                id: '4',
                name: 'Graphql',
            },
        ],
        projects: [
            {
                id: '1',
                title: 'Github profil',
                description: 'Ovo je moj Github profil sa puno raznih projekata.',
                skills: [
                    {
                        value: 'swift',
                        label: 'Swift'
                    },
                    {
                        value: 'kotlin',
                        label: 'Kotlin'
                    },
                    {
                        value: 'typescript',
                        label: 'TypeScript'
                    },
                ],
                contents: [
                    {
                        type: 'image',
                        url: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
                        description: 'Ovo je moj Github profil sa puno raznih projekata.'
                    },
                    {
                        type: 'video',
                        url: 'https://www.youtube.com/embed/4K33w-0-p2c',
                        description: 'Ovo je demo video mog projekta'
                    },
                    {
                        type: 'web',
                        url: 'https://www.google.com',
                        title: 'Google',
                        description: 'Ovo je link na moj projekt'
                    },
                    {
                        type: 'file',
                        url: 'https://clickdimensions.com/links/TestPDFfile.pdf',
                        description: 'Ovo je dokumentacija mog projekta',
                        title: "Dokumentacija.pdf"
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Navbar/>
            <ProfileEdit value={profile} isOpen={true} />
            <ProfileCreate isOpen={false} />

            <div className="lg:hidden mt-20">
                <UserInfo user={user} />
                <hr className="border-Swan"/>
                <div className="p-8 flex flex-col gap-6">
                    <ProfileSelect value={selectedOption} onSelect={setSelectedOption} options={options}/>
                    <ProfileInfo />
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
                <ProfileHeader user={user} />
                <hr className="border-Swan" />
                <div className="flex h-full">
                    <div className="w-[370px] border-r border-r-Swan">
                        <ProfileSelect value={selectedOption} onSelect={setSelectedOption} options={options} />
                        <hr className="border-Swan"/>
                        <ProfileLanguages languages={user.languages} />
                        <hr className="border-Swan" />
                        <ProfileEducation educations={user.educations} />
                    </div>
                    <div className="w-full">
                        <ProfileInfo />
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
