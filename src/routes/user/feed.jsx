import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../core/components/Navbar.jsx";
import CompanyCard from "../../company/components/CompanyCard.jsx";
import SideProfile from "../account/side-profile.jsx";

export default function Feed() {
  const { companies } = useLoaderData();

  return (
    <>
      <Navbar showLink={false} className="pb-20" />
      <div className="flex">
        {/* Sidebar */}
        <SideProfile/>

        {/* Main Content */}
        <div className="flex flex-col gap-4 p-5 lg:p-0 mt-20 mx-auto">
          {companies.map((company) => (
            <Link to={`/company/${company.slug}`} key={company.id}>
              <CompanyCard company={company} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
