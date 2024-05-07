import CompanyCard from "../../Components/company/CompanyCard.jsx";
import {Link, useLoaderData} from "react-router-dom";

export default function Firme() {
    const {companies} = useLoaderData()

    return (
        <div className="flex flex-col gap-4 p-5 lg:p-0">
            {companies.map(company =>
                <Link to={`/mentor/firma/${company.id}`} key={company.id}>
                    <CompanyCard key={company.id} company={company} />
                </Link>
            )}
        </div>
    )
}
