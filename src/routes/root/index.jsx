import Navbar from "../../core/components/Navbar.jsx";
import SimpleCompanyCard from "../../company/components/SimpleCompanyCard.jsx";
import { Link, Navigate } from "react-router-dom";
import ArrowRight from "../../assets/icons/Arrow_right.svg";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Footer from "../../core/components/Footer.jsx";
import { useEffect, useState } from "react";
import { fetchCompanies } from "../user/feed.js";

import SpaceLottie from "../../assets/lottie/space.json";
import BuildingLottie from "../../assets/lottie/building.json";
import ChatLottie from "../../assets/lottie/chat_animation.json";
import ProfileLottie from "../../assets/lottie/profile.json";
import LottieFile from "../../core/components/LottieFile.jsx";

import LogoShort from "../../assets/Logo_short.svg";

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
            <Navbar />
            <div className="flex flex-col flex-grow">
                <div
                    className="min-h-screen pt-32 px-10 lg:pt-56 flex justify-center items-center flex-col gap-8 lg:gap-12 lg:flex-row pb-5">
                    <h1 className="text-center lg:text-left text-5xl lg:text-6xl xl:text-7xl font-bold lg:w-1/3">
                        <span className="text-Primary">karijerko</span> će ti pomoći lansirati karijeru
                    </h1>
                    <div className="w-full lg:w-[600px]">
                        <LottieFile src={SpaceLottie}/>
                    </div>
                </div>
                <div className="px-8 flex flex-col gap-5 w-fit mx-auto pb-10 lg:pb-20">
                    <div>
                        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 pt-10 justify-center">
                            {companies.map((company) => (
                                <Link to={`/company/${company.slug}`} key={company.id}>
                                    <SimpleCompanyCard key={company.id} company={company}/>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="min-h-screen p-8 md:px-20 xl:px-40 2xl:px-64 flex justify-center items-center flex-col gap-16 lg:gap-24 lg:flex-row pb-10 bg-Primary">
                    <div className="lg:w-1/2 flex flex-col gap-4 bg-white border-Swan border-2 rounded-xl p-4 lg:p-8">
                        <div className="flex gap-1.5">
                            <div className="flex-none">
                                <img src={LogoShort}
                                     alt="Karijerko"
                                     className="w-10 h-10 rounded-full border border-Swan p-2 bg-white"
                                />
                            </div>
                            <div
                                className="bg-white text-base font-medium px-5 py-3 border-2 border-Swan rounded-r-3xl rounded-b-3xl whitespace-pre-wrap">
                                Bok, piši mi što te zanima i ja ću ti preporučiti firme!
                            </div>
                        </div>

                        <div className="flex gap-1.5 w-full justify-end">
                            <div
                                className="text-base font-medium px-5 py-3 rounded-l-3xl rounded-b-3xl bg-Primary text-white whitespace-pre-wrap">
                                Zanima me react programiranje
                            </div>
                            <div className="flex-none">
                                <img
                                    src="https://www.pawlovetreats.com/cdn/shop/articles/pembroke-welsh-corgi-puppy_1000x.jpg?v=1628638716"
                                    alt="User"
                                    className="w-10 h-10 rounded-full border border-Swan"
                                />
                            </div>
                        </div>

                        <div className="flex gap-1.5">
                            <div className="flex-none">
                                <img src={LogoShort}
                                     alt="Karijerko"
                                     className="w-10 h-10 rounded-full border border-Swan p-2 bg-white"
                                />
                            </div>
                            <div
                                className="bg-white text-base font-medium px-5 py-3 border-2 border-Swan rounded-r-3xl rounded-b-3xl whitespace-pre-wrap">
                                Divno! React je izvrstan izbor za web development. Koje su tvoje trenutne vještine i
                                iskustvo u React-u? Volio bih ti preporučiti neke kompanije koje se bave React
                                programiranjem.
                            </div>
                        </div>

                        <div className="flex gap-1.5 w-full justify-end">
                            <div
                                className="text-base font-medium px-5 py-3 rounded-l-3xl rounded-b-3xl bg-Primary text-white whitespace-pre-wrap">
                                Trenutno nemam puno iskustva, radio sam samo na osobnim projektima
                            </div>
                            <div className="flex-none">
                                <img
                                    src="https://www.pawlovetreats.com/cdn/shop/articles/pembroke-welsh-corgi-puppy_1000x.jpg?v=1628638716"
                                    alt="User"
                                    className="w-10 h-10 rounded-full border border-Swan"
                                />
                            </div>
                        </div>

                        <div className="flex gap-1.5">
                            <div className="flex-none">
                                <img src={LogoShort}
                                     alt="Karijerko"
                                     className="w-10 h-10 rounded-full border border-Swan p-2 bg-white"
                                />
                            </div>
                            <div
                                className="bg-white text-base font-medium px-5 py-3 border-2 border-Swan rounded-r-3xl rounded-b-3xl whitespace-pre-wrap">
                                Nema problema, svakako možeš pronaći prilike za učenje i razvoj u području React
                                programiranja. Evo nekoliko kompanija koje se bave web developmentom s fokusom na React:
                                <br/>
                                <br/>
                                1. <strong>WebWizards</strong>
                                <br/>
                                Specijalizirani za stvaranje magičnih web stranica koristeći moderne tehnologije poput
                                JavaScript-a i React-a.
                                <br/>
                                2. <strong>TechWave</strong>
                                <br/>
                                Pružaju inovativne tehnološke usluge koristeći JavaScript i Vue.js.
                                <br/>
                                <br/>
                                Nadam se da će ti ove preporuke pomoći da pronađeš pravu priliku za daljnji razvoj u
                                React
                                programiranju. Ako imaš još pitanja, slobodno pitaj!
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <h1 className="text-center text-white lg:text-left text-5xl lg:text-6xl xl:text-7xl font-bold underline mb-2">
                            karijerko chat
                        </h1>
                        <h2 className="text-center text-white lg:text-left text-2xl lg:text-3xl font-bold">
                            AI koji ti pomaže napraviti relevantne projekte na željenom tržištu
                        </h2>
                    </div>
                </div>

                <div
                    className="p-8 md:px-20 xl:px-40 2xl:px-64 lg:pb-20 flex flex-col pt-20 gap-16">
                    <h1 className="text-center  text-5xl lg:text-6xl xl:text-7xl font-bold">
                        Što možeš?
                    </h1>
                    <div className="flex flex-col lg:flex-row lg:justify-center">
                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="bg-Fox lg:w-80 rounded-2xl shadow-lg hover:shadow-2xl transition pt-5">
                                <LottieFile src={BuildingLottie} className="h-40"/>
                                <div className="py-5 px-8">
                                    <h2 className="text-3xl font-bold text-white">Istraži firme</h2>
                                    <p className="text-lg font-semibold text-white">
                                        Pretraži firme i preko našeg naprednog sistema preporuka pronađi firme koje
                                        zadovoljavaju tvoje potrebe
                                    </p>
                                </div>
                            </div>
                            <div className="bg-Fox lg:w-80 rounded-2xl shadow-lg hover:shadow-2xl transition pt-5">
                                <LottieFile src={ChatLottie} className="h-40"/>
                                <div className="py-5 px-8">
                                    <h2 className="text-3xl font-bold text-white">Chat</h2>
                                    <p className="text-lg font-semibold text-white">
                                        Pričaj s karijerkom i saznaj najbolje načine za impresionirati tvoje najdraže firme
                                    </p>
                                </div>
                            </div>
                            <div className="bg-Fox lg:w-80 rounded-2xl shadow-lg hover:shadow-2xl transition pt-5">
                                <LottieFile src={ProfileLottie} className="h-40"/>
                                <div className="py-5 px-8">
                                    <h2 className="text-3xl font-bold text-white">Profil</h2>
                                    <p className="text-lg font-semibold text-white">
                                        Napravi svoj interaktivni profil koji možeš dijeliti u javnost i impresionirati firme
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Root;
