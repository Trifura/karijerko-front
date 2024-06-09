import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Navbar from "../../core/components/Navbar.jsx";
import CompanyCard from "../../company/components/CompanyCard.jsx";
import SearchIcon from "../../assets/icons/Search.svg";
import { fetchCompanies } from "./feed.js";
import Footer from "../../core/components/Footer.jsx";

export default function Search() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const initialSearchTerm = query.get("name") || "";
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [debouncedTerm, setDebouncedTerm] = useState(initialSearchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
      navigate(`/search?name=${encodeURIComponent(searchTerm)}`);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, navigate]);

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
      event.preventDefault();
      navigate(`/search?name=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      <Navbar showLink={true} className="pb-20" />
      <div className="flex justify-center">
        <div className="flex w-full max-w-6xl mt-20">
          <div className="flex-grow flex flex-col items-center mx-auto relative">
            <div className="w-full max-w-2xl">
              <form className="w-full mb-6 text-4" onSubmit={(e) => e.preventDefault()}>
                <label
                  htmlFor="company-search"
                  className="mb-2 text-base font-medium sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <button type="submit" className="flex items-center">
                      <img src={SearchIcon} alt="Search" className="w-4 h-4" />
                    </button>
                  </div>
                  <input 
                    type="search" 
                    id="company-search" 
                    className="block w-full p-4 pl-10 text-base border border-gray-300 rounded-lg" 
                    placeholder="Pretraži firme" 
                    required 
                    value={searchTerm}
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




            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
