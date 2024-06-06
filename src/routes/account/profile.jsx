import Navbar from "../../core/components/Navbar.jsx";
import {useSelector} from "react-redux";

import {useState} from "react";
import ProfileEdit from "../../profile/components/ProfileEdit.jsx";
import ProfileCreate from "../../profile/components/ProfileCreate.jsx";
import LanguagesEdit from "../../profile/languages/LanguagesEdit.jsx";
import LanguagesCreate from "../../profile/languages/LanguagesCreate.jsx";
import EducationEdit from "../../profile/education/EducatonEdit.jsx";
import EducationCreate from "../../profile/education/EducationCreate.jsx";
import ProjectEdit from "../../profile/components/ProjectEdit.jsx";
import ProfileLanguages from "../../profile/languages/ProfileLanguages.jsx";
import ProfileEducation from "../../profile/education/ProfileEducation.jsx";
import ProfileSkills from "../../profile/skills/ProfileSkills.jsx";
import ProfileSelect from "../../profile/ProfileSelect.jsx";
import ProfileHeader from "../../profile/ProfileHeader.jsx";
import ProfileInfo from "../../profile/ProfileInfo.jsx";
import ProfilePortfolio from "../../profile/portfolio/ProfilePortfolio.jsx";

export default function Profile() {
    const {account} = useSelector(state => state.auth)

    const [projectEdit, setProjectEdit] = useState(false)

    const [selectedOption, setSelectedOption] = useState('');
    const options = [
        {value: 'front-end-developer', label: 'Front-end developer'},
        {value: 'back-end-developer', label: 'Back-end developer'},
    ];

    const profile = {
        name: 'Front-end developer',
        description: 'I am a Full stack developer with real project experience in Frontend (VueJs, Reactjs) and Backend (ExpressJs, Graphql). In my 3 years of experience I\'ve learned a lot about NodeJs and how the web works. I started to work at a really young age because I found a passion for programming.'
    }

    const languages = [
        { id: 1, name: 'Engleski', proficiency: 'Advanced' },
    ]

    const selectedEducation = {
        name: 'Elektrotehnička i prometna škola Osijek',
        degree: 'Tehničar za računalstvo',
        dateFrom: '2018',
        dateTo: '2022',
        description: ''
    }

    const project = {
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

    const onProjectSave = (project) => {
        console.log('Project saved');
        console.log(project);

        setProjectEdit(false)
    }

    const editProject = () => {
        setProjectEdit(true)
    }


    return (
        <>
            <Navbar/>
            <ProfileEdit value={profile} isOpen={false} />
            <ProfileCreate isOpen={false} />
            <LanguagesEdit value={languages} isOpen={false} />
            <LanguagesCreate isOpen={false} />
            <EducationEdit value={selectedEducation} isOpen={false} />
            <EducationCreate isOpen={false} />
            <ProjectEdit value={project} isOpen={projectEdit} onCancel={() => setProjectEdit(false)} onConfirm={onProjectSave} />

            <div className="lg:hidden mt-20">
                <ProfileHeader account={account} />
                <hr className="border-Swan"/>
                <div className="p-8 flex flex-col gap-6">
                    <ProfileSelect value={selectedOption} onSelect={setSelectedOption} options={options}/>
                    <ProfileInfo />
                </div>
                <hr className="border-Swan"/>
                <ProfilePortfolio />
                <hr className="border-Swan"/>
                <ProfileSkills/>
                <hr className="border-Swan"/>
                <ProfileLanguages/>
                <hr className="border-Swan"/>
                <ProfileEducation/>
            </div>
            <div className="hidden lg:block border-2 border-Swan rounded-2xl mt-32 mb-10 max-w-5xl mx-auto">
                <ProfileHeader account={account} />
                <hr className="border-Swan"/>
                <div className="flex h-full">
                    <div className="w-[370px] border-r border-r-Swan">
                        <ProfileSelect value={selectedOption} onSelect={setSelectedOption} options={options} />
                        <hr className="border-Swan"/>
                        <ProfileLanguages />
                        <hr className="border-Swan"/>
                        <ProfileEducation />
                    </div>
                    <div className="w-full">
                        <ProfileInfo />
                        <hr className="border-Swan"/>
                        <ProfilePortfolio />
                        <hr className="border-Swan"/>
                        <ProfileSkills />
                    </div>
                </div>
            </div>
        </>
    )
}
