import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Navbar from "../../core/components/Navbar.jsx";
import CompanyCard from "../../company/components/CompanyCard.jsx";
import SearchIcon from "../../assets/icons/Search.svg";
import { fetchCompanies } from "./feed.js";
import Footer from "../../core/components/Footer.jsx";
import { Helmet } from "react-helmet";

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
      const { companies: fetchedCompanies } = await fetchCompanies(
        debouncedTerm
      );
      setCompanies(fetchedCompanies);
    }
    fetchAndSetCompanies();
  }, [debouncedTerm]);

  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate(`/search?name=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>Karijerko - Istraži firme</title>
        <meta
          name="description"
          content="Istraži firme i pronađi posao iz snova."
        />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar showLink={true} className="pb-20" />
        <div className="flex justify-center flex-grow">
          <div className="flex w-full max-w-6xl mt-20">
            <div className="flex-grow flex flex-col items-center mx-auto relative">
              <div className="w-full max-w-2xl">
                <form className="mt-2 relative flex-grow">
                  <input
                    type="text"
                    name="search"
                    value={searchTerm}
                    onChange={handleSearch}
                    onKeyPress={handleKeyPress}
                    placeholder="Pretraži firme..."
                    className="w-full text-4 px-6 py-2 border-2 border-gray-300 rounded-full bg-white text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-500 ease-in-out focus:w-full"
                  />
                  <img
                    src={SearchIcon}
                    alt="Search"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                  />
                </form>

                <div className="flex flex-col items-center w-full mt-3 gap-3">
                  {companies.map((company) => (
                    <Link
                      to={`/company/${company.slug}`}
                      key={company.id}
                      className="w-full"
                    >
                      <CompanyCard company={company} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10"></div>
        <Footer />
      </div>
    </>
  );
}
