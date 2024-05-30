import CompanyCard from "../../company/components/CompanyCard.jsx";
import {Link, useLoaderData} from "react-router-dom";

export default function Feed() {
    const {companies} = useLoaderData()

    return (
        <div className="flex flex-col gap-4 p-5 lg:p-0">
            {companies.map(company =>
                <Link to={`/company/${company.slug}`} key={company.id}>
                    <CompanyCard key={company.id} company={company} />
                </Link>
            )}
        </div>
    )
}