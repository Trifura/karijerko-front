import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../core/components/Navbar.jsx";
import CompanyCard from "../../company/components/CompanyCard.jsx";
import SideProfile from "../../core/components/side-profile";
import { fetchFeed } from "./feed.js";
import {useSelector} from "react-redux";
import LoadingPage from "../../core/components/LoadingPage.jsx";

export default function Feed() {

  const { account } = useSelector(state => state.auth);
  const { profiles } = useSelector(state => state.profile);


  const [companies, setCompanies] = useState([]);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [loadingProfiles, setLoadingProfiles] = useState(true);


  useEffect(() => {
    // Ensure profiles are loaded before setting the selected profile
    if (profiles && profiles.length > 0) {
      const primaryProfile = profiles.find(profile => profile.isPrimary);
      setSelectedProfileId(primaryProfile?.id);
      setLoadingProfiles(false); // Profiles are now loaded
    }
  }, [profiles]);

  useEffect(() => {
    if (!selectedProfileId) { return }

    fetchFeed(selectedProfileId).then((data) => setCompanies(data))
  }, [selectedProfileId]);

  if (loadingProfiles) {
    return <LoadingPage />
  }

  return (
    <>
      <Navbar showLink={true} showSearch={true} className="pb-20" />
      <div className="flex justify-center mt-14">
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
            </div>
            <div className="hidden xl:block fixed xl:ml-[1050px] 2xl:ml-[1200px]">
              <SideProfile selectedProfileId={selectedProfileId} setSelectedProfileId={setSelectedProfileId} account={account} profiles={profiles} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
