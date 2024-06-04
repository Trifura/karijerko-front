import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../core/components/Navbar.jsx";
import CompanyCard from "../../company/components/CompanyCard.jsx";
import SideProfile from "../../core/components/side-profile.jsx";
import Search from "../../assets/icons/Search.svg";

export default function Feed() {
  const { companies } = useLoaderData();

  function handleSearch(event) {
    const query = event.target.value;
    // Implement your search logic here
    console.log('Searching for:', query);
    // Trigger the search automatically
    // For example, you could use a debounce function to limit the number of search requests
  }

  return (
    <>
      <Navbar showLink={true} className="pb-20" />
      <div className="lg:ml-[220px] md:mdl-[0px] flex justify-center">
        <div className="flex w-full max-w-6xl mt-20">
          <div className="flex-grow flex flex-col items-center mx-auto">
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
                    style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
                  />
                </div>
              </form>

              <div className="flex flex-col items-center w-full space-y-4">
                {companies.map((company) => (
                  <Link to={`/company/${company.slug}`} key={company.id} className="w-full">
                    <CompanyCard company={company} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block flex-shrink-0 ml-10">
            <SideProfile />
          </div>
        </div>
      </div>
    </>
  );
}
