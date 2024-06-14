import Navbar from "../../core/components/Navbar.jsx";
import LogoShort from "../../assets/Logo_short.svg";
import SimpleCompanyCard from "../../company/components/SimpleCompanyCard.jsx";
import { Link, Navigate } from "react-router-dom";
import ArrowRight from "../../assets/icons/Arrow_right.svg";
import MentorMessage from "../../chat/components/MentorMessage.jsx";
import Send from "../../assets/icons/Send.svg";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Footer from "../../core/components/Footer.jsx";
import { useEffect, useState } from "react";
import { fetchCompanies } from "../user/feed.js";

function Root() {
    const [companies, setCompanies] = useState([]);

    const { isAuthenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        fetchCompanies().then((data) => {
            const topCompanies = data.companies.slice(0, 3);
            setCompanies(topCompanies);
        });
    }, []);

    // TODO: handle this better because it gitters
    if (isAuthenticated) {
        return <Navigate to={"/feed"} />;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <title>Karijerko - Tvoj Mentor</title>
                <meta name="description" content="Karijerko je tvoj virtualni karijerni mentor koji ti pomaže u razvijanju projekata i pronalaženju firmi koje ti najviše odgovaraju." />
            </Helmet>
            <Navbar showLink={true} />
            <div className="flex flex-col flex-grow">
                <div className="pt-32 px-10 lg:pt-56 bg-Primary flex justify-center flex-col gap-24 lg:gap-8 lg:flex-row pb-5">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white lg:w-1/3">
                        Tvoj virtualni mentor za karijerno usmjeravanje
                    </h1>
                    <div className="lg:w-1/3 flex flex-col items-end gap-3">
                        <div className="flex gap-3">
                            <div className="w-20 h-20 rounded-full border border-Swan bg-white p-2 flex-none">
                                <img src={LogoShort} alt="Karijerko" className="w-full h-full" />
                            </div>
                            <div className="text-base lg:text-lg font-medium px-5 py-3 border-2 border-Swan rounded-r-3xl rounded-b-3xl w-full bg-white">
                                Bok, ja sam Karijerko. Predstavi mi se i uz moju pomoć pronađi najbolju kompaniju za sebe te unaprijedi svoje vještine!
                            </div>
                        </div>
                        <Link to="/feed" className="text-base lg:text-lg px-4 py-2 font-semibold bg-white rounded-md border-2 border-Swan">
                            Započni razgovor
                        </Link>
                    </div>
                </div>
                <div className="w-full -mt-5">
                    <svg viewBox="0 0 1440 289" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1440 220.568C1440 220.568 1178.25 103.162 772.125 234.115C366 365.067 5.98252e-06 220.568 5.98252e-06 220.568L2.52652e-05 -1.29082e-05L1440 0.000112981L1440 220.568Z" fill="#58CC02" />
                    </svg>
                </div>
                <div className="px-8 flex flex-col gap-5 w-fit mx-auto">
                    <h2 className="text-4xl lg:text-6xl lg:text-center pt-10 font-bold">Top firme</h2>
                    <div>
                        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 pt-10 justify-center">
                            {companies.map((company) => (
                                <Link to={`/company/${company.slug}`} key={company.id}>
                                    <SimpleCompanyCard key={company.id} company={company} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <Link to="/search" className="text-xl font-semibold flex items-center">
                        Pogledaj sve firme
                        <img src={ArrowRight} alt="" />
                    </Link>
                </div>

                <hr className="bg-Bee h-4 rounded-full border-none w-32 lg:w-60 my-20 mx-auto" />

                <div className="flex flex-col mx-8 items-center gap-12 flex-grow">
                    <h2 className="text-4xl lg:text-6xl font-bold text-center lg:w-1/2">
                        Još uvijek možeš pričati sa Karijerkom!
                    </h2>
                    <div className="bg-white mb-10 lg:mb-40 px-5 pt-4 pb-2 border-4 border-Swan rounded-3xl lg:w-1/2 lg:h-[600px] flex flex-col justify-between gap-20">
                        <MentorMessage message="Bok! Ja sam Karijerko, tvoj virtualni asistent za karijeru. Tu sam da ti pomognem razvijati vještine, postaviti i ostvariti profesionalne ciljeve te naći put do posla koji ti najviše odgovara. Ako imaš bilo kakva pitanja ili trebaš savjet vezan za svoju karijeru, slobodno se obrati! 😊" />
                        <Link to="/feed" className="ml-auto border-[3px] border-black py-3 px-5 rounded-xl flex gap-10">
                            <span className="font-bold">Pošalji poruku</span>
                            <img src={Send} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Root;
