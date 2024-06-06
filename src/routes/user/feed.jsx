import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Navbar from "../../core/components/Navbar.jsx";
import CompanyCard from "../../company/components/CompanyCard.jsx";
import SideProfile from "../../core/components/side-profile.jsx";
import Search from "../../assets/icons/Search.svg";
import { fetchCompanies } from "./feed.js"; // Import the fetch function

export default function Feed() {
  const { companies: initialCompanies } = useLoaderData();
  const [companies, setCompanies] = useState(initialCompanies);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    async function fetchAndSetCompanies() {
      const { companies: fetchedCompanies } = await fetchCompanies(debouncedTerm);
      setCompanies(fetchedCompanies);
    }
    fetchAndSetCompanies();
  }, [debouncedTerm]);

  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setDebouncedTerm(searchTerm);
    }
  };

  return (
    <>
      <Navbar showLink={true} className="pb-20" />
      <div className="flex justify-center">
        <div className="flex w-full max-w-6xl mt-20">
          <div className="flex-grow flex flex-col items-center mx-auto relative">
            <div className="w-full max-w-2xl">
              <form className="w-full mb-6" onSubmit={(e) => e.preventDefault()}>
                <label
                  htmlFor="company-search"
                  className="mb-2 text-sm font-medium sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <button type="submit" className="flex items-center">
                      <img src={Search} alt="Search" className="w-4 h-4" />
                    </button>
                  </div>
                  <input 
                    type="search" 
                    id="company-search" 
                    className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg" 
                    placeholder="Pretraži firme" 
                    required 
                    onChange={handleSearch}
                    onKeyDown={handleKeyPress}
                  />
                </div>
              </form>

              <div className="flex flex-col items-center w-full gap-3">
                {companies.map((company) => (
                  <Link to={`/company/${company.slug}`} key={company.id} className="w-full">
                    <CompanyCard company={company} />
                  </Link>
                ))}
              </div>
              <div className="h-[1000px]"></div>
            </div>
            <div className="hidden xl:block fixed xl:ml-[1050px] 2xl:ml-[1200px]">
              <SideProfile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
