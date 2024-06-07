import {useState} from "react";

export const useUser = () => {
    const [user, setUser] = useState( {
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
        ],
        profiles: [
            { value: 'front-end-developer', label: 'Front-end developer' },
            { value: 'back-end-developer', label: 'Back-end developer' },
        ]
    });

    return {
        user,
        setUser,
    };
};