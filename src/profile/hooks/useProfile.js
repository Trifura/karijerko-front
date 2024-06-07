import {useState} from "react";

const emptyProfile = {
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

export const useProfile = () => {
    const [profile, setProfile] = useState(emptyProfile);

    return {
        profile,
        setProfile,
    };
};