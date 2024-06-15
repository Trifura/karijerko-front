import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../core/components/Navbar.jsx";
import CompanyCard from "../../company/components/CompanyCard.jsx";
import SideProfile from "../../core/components/side-profile";
import {fetchCompanies, fetchFeed, fetchSubscriptions} from "./feed.js";
import {useSelector} from "react-redux";
import GeneralChat from "../../chat/components/GeneralChat.jsx";
import Footer from "../../core/components/Footer.jsx";

export default function Feed() {
  const { account } = useSelector(state => state.auth);
  const { profiles } = useSelector(state => state.profile);
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [view, setView] = useState('feed');

  const onFetchFeed = async () => {
    setView('feed');
    if (!selectedProfileId) {
      const { companies } = await fetchCompanies();
      setCompanies(companies);
      return;
    }
    const data = await fetchFeed(selectedProfileId);
    setCompanies(data);
  };

  const onFetchSubscriptions = async () => {
    const data = await fetchSubscriptions();
    setCompanies(data);
    setView('subscriptions');
  };

  useEffect(() => {
    if (profiles && profiles.length > 0) {
      const primaryProfile = profiles.find(profile => profile.isPrimary);
      setSelectedProfileId(primaryProfile?.id);
    }
    setIsLoading(false);
  }, [profiles]);

  useEffect(() => {
    if (isLoading) return;
    onFetchFeed();
  }, [selectedProfileId, isLoading]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showLink={true} showSearch={true} className="pb-20" />
      <div className="flex justify-center mt-14 px-4 flex-grow">
        <div className="flex flex-col lg:flex-row w-full gap-4 max-w-6xl mt-20 relative">
          <div className="flex-grow flex flex-col items-center w-full mx-auto order-2 lg:order-1">
            <div className="w-full max-w-2xl mt-10 lg:mt-0">
              <div className="flex gap-6 text-lg">
                <button onClick={onFetchFeed}>
                  <h1 className={`font-semibold ${view !== 'feed' && 'text-Hare'}`}>Preporučeno</h1>
                </button>
                <button onClick={onFetchSubscriptions}>
                  <h1 className={`font-semibold ${view !== 'subscriptions' && 'text-Hare'}`}>Pretplate</h1>
                </button>
              </div>
              <hr className="my-3" />
              <div className="flex flex-col items-center w-full gap-3">
                {companies.map((company) => (
                  <Link to={`/company/${company.slug}`} key={company.id} className="w-full">
                    <CompanyCard company={company} />
                  </Link>
                ))}
                {companies.length === 0 && view === 'subscriptions' && (
                  <h1 className="text-center text-xl text-Ironside font-semibold">Ne pratite niti jednu firmu</h1>
                )}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 w-full lg:w-fit">
            <SideProfile selectedProfileId={selectedProfileId} setSelectedProfileId={setSelectedProfileId} account={account} profiles={profiles} />
          </div>
        </div>
      </div>
      <GeneralChat />
      <div className="mt-10"></div>
      <Footer />
    </div>
  );
}
