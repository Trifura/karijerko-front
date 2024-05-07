import CompanyCard from "../Components/company/CompanyCard.jsx";

export default function Firme() {
    const companies = [
        {
            id: 1,
            name: "Treblle",
            industry: {
                name_hr: 'Razvoj softvera',
            },
            specialties: 'API, Engineering, and Product Management',
            companySize: {
                name_hr: '11-50 zaposlenika',
            },
            headquarters: 'Zagreb',
            tagline: 'Treblle helps engineering and product teams build, ship and understand their REST APIs in one single place.',
            profilePicture: 'https://media.licdn.com/dms/image/C4D0BAQGcVJKjYswmcw/company-logo_200_200/0/1645522385436/treblle_logo?e=1723075200&v=beta&t=3DeljCHCzA8o3D5UwoWYuj9NU6fr0WMaNH1xqPyuVhY'
        },
        {
            id: 2,
            name: "Treblle",
            industry: {
                name_hr: 'Razvoj softvera',
            },
            specialties: 'API, Engineering, and Product Management',
            companySize: {
                name_hr: '11-50 zaposlenika',
            },
            headquarters: 'Zagreb',
            tagline: 'Treblle helps engineering and product teams build, ship and understand their REST APIs in one single place.',
            profilePicture: 'https://media.licdn.com/dms/image/C4D0BAQGcVJKjYswmcw/company-logo_200_200/0/1645522385436/treblle_logo?e=1723075200&v=beta&t=3DeljCHCzA8o3D5UwoWYuj9NU6fr0WMaNH1xqPyuVhY'
        },
        {
            id: 3,
            name: "Treblle",
            industry: {
                name_hr: 'Razvoj softvera',
            },
            specialties: 'API, Engineering, and Product Management',
            companySize: {
                name_hr: '11-50 zaposlenika',
            },
            headquarters: 'Zagreb',
            tagline: 'Treblle helps engineering and product teams build, ship and understand their REST APIs in one single place.',
            profilePicture: 'https://media.licdn.com/dms/image/C4D0BAQGcVJKjYswmcw/company-logo_200_200/0/1645522385436/treblle_logo?e=1723075200&v=beta&t=3DeljCHCzA8o3D5UwoWYuj9NU6fr0WMaNH1xqPyuVhY'
        },
        {
            id: 4,
            name: "Treblle",
            industry: {
                name_hr: 'Razvoj softvera',
            },
            specialties: 'API, Engineering, and Product Management',
            companySize: {
                name_hr: '11-50 zaposlenika',
            },
            headquarters: 'Zagreb',
            tagline: 'Treblle helps engineering and product teams build, ship and understand their REST APIs in one single place.',
            profilePicture: 'https://media.licdn.com/dms/image/C4D0BAQGcVJKjYswmcw/company-logo_200_200/0/1645522385436/treblle_logo?e=1723075200&v=beta&t=3DeljCHCzA8o3D5UwoWYuj9NU6fr0WMaNH1xqPyuVhY'
        },
        {
            id: 5,
            name: "Treblle",
            industry: {
                name_hr: 'Razvoj softvera',
            },
            specialties: 'API, Engineering, and Product Management',
            companySize: {
                name_hr: '11-50 zaposlenika',
            },
            headquarters: 'Zagreb',
            tagline: 'Treblle helps engineering and product teams build, ship and understand their REST APIs in one single place.',
            profilePicture: 'https://media.licdn.com/dms/image/C4D0BAQGcVJKjYswmcw/company-logo_200_200/0/1645522385436/treblle_logo?e=1723075200&v=beta&t=3DeljCHCzA8o3D5UwoWYuj9NU6fr0WMaNH1xqPyuVhY'
        }
    ]
    return (
        <div className="flex flex-col gap-4 p-5 lg:p-0">
            {companies.map(company => <CompanyCard key={company.id} company={company} />)}
        </div>
    )
}
