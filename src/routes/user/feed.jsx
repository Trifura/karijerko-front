import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../core/components/Navbar.jsx";
import CompanyCard from "../../company/components/CompanyCard.jsx";
import { fetchCompanies } from "./feed.js";

export default function Feed() {
  const { companies: initialCompanies } = useLoaderData();
  const [companies, setCompanies] = useState(initialCompanies);

  useEffect(() => {
    async function fetchAndSetCompanies() {
      const { companies: fetchedCompanies } = await fetchCompanies();
      setCompanies(fetchedCompanies);
    }
    fetchAndSetCompanies();
  }, []);

  return (
    <>
      <Navbar showLink={true} showSearch={true} className="pb-20" />
      <div className="flex justify-center">
        <div className="flex w-full max-w-6xl mt-20">
          <div className="flex-grow flex flex-col items-center mx-auto relative">
            <div className="w-full max-w-2xl">
              <div className="flex flex-col items-center w-full gap-3">
                {companies.map((company) => (
                  <Link to={`/company/${company.slug}`} key={company.id} className="w-full">
                    <CompanyCard company={company} />
                  </Link>
                ))}
              </div>
              <div className="h-[1000px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
