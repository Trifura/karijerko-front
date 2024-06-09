import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../core/components/Navbar.jsx";
import CompanyCard from "../../company/components/CompanyCard.jsx";
import SideProfile from "../../core/components/side-profile";
import {fetchCompanies, fetchFeed} from "./feed.js";
import {useSelector} from "react-redux";

export default function Feed() {

  const { account } = useSelector(state => state.auth);
  const { profiles } = useSelector(state => state.profile);


  const [companies, setCompanies] = useState([]);
  const [selectedProfileId, setSelectedProfileId] = useState(null);

  useEffect(() => {
    // Ensure profiles are loaded before setting the selected profile
    if (profiles && profiles.length > 0) {
      const primaryProfile = profiles.find(profile => profile.isPrimary);
      setSelectedProfileId(primaryProfile?.id);
    }
  }, [profiles]);

  useEffect(() => {
    if (!selectedProfileId) {
      fetchCompanies().then((data) => setCompanies(data.companies))
      return
    }

    fetchFeed(selectedProfileId).then((data) => setCompanies(data))
  }, [selectedProfileId]);

  return (
    <>
      <Navbar showLink={true} showSearch={true} className="pb-20" />
      <div className="flex justify-center mt-14 px-4">
        <div className="flex flex-col lg:flex-row w-full gap-4 max-w-6xl mt-20 relative">
          <div className="flex-grow flex flex-col items-center w-full mx-auto order-2 lg:order-1">
            <div className="w-full max-w-2xl">
              <div className="flex flex-col items-center w-full gap-3">
                {companies.map((company) => (
                    <Link to={`/company/${company.slug}`} key={company.id} className="w-full">
                      <CompanyCard company={company}/>
                    </Link>
                ))}
              </div>
              <div className="h-[1000px]">

              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 w-full">
            <SideProfile selectedProfileId={selectedProfileId} setSelectedProfileId={setSelectedProfileId} account={account} profiles={profiles}/>
          </div>
        </div>
      </div>
    </>
  );
}
