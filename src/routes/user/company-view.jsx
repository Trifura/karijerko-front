import Notifications from "../../assets/icons/Notifications.svg";
import NotificationsFilled from "../../assets/icons/NotificationsFilled.svg";
import Open_in_new from "../../assets/icons/Open_in_new.svg";
import Local_phone from "../../assets/icons/Local_phone.svg";
import GMaps from "../../assets/maps.png";
import Pin_fill from "../../assets/icons/Pin_fill.svg";
import ChatComponent from "../../chat/components/ChatComponent.jsx";
import Navbar from "../../core/components/Navbar.jsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import api from "../../core/utils/api.js";
import {useParams} from "react-router-dom";
import LoadingPage from "../../core/components/LoadingPage.jsx";
import subscriptionService from "../../company/services/subscription.js";

export default function CompanyView() {
    const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
    const [ company, setCompany ] = useState(null);

    const { companySlug} = useParams();

    useEffect(() => {
        if (isLoading) return

        if (!isAuthenticated) {
            api.get(`/company/slug/${companySlug}`).then((response) => {
                setCompany(response.data);
            })
        } else {
            api.get(`/company/slug/${companySlug}/user`).then((response) => {
                setCompany(response.data);
                console.log('logg');
            })
        }
    }, [isAuthenticated, isLoading, companySlug]);

    const toggleSubscribe = async () => {
        try {
            const updatedCompany = { ...company, isSubscribed: !company.isSubscribed };
            setCompany(updatedCompany);
            if (company.isSubscribed) {
                await subscriptionService.unsubscribe(company.id);
            } else {
                await subscriptionService.subscribe(company.id);
            }
        } catch (error) {
            setCompany({ ...company, isSubscribed: !company.isSubscribed });
        }
    };


    if (!company) {
        return <LoadingPage />
    }

    return (
        <>
            <Navbar showSearch={true} />
            <div className="lg:border-4 lg:max-w-4xl lg:mx-auto border-Swan rounded-3xl mt-24 pt-6">
                {/*<div className="px-4 pt-4 pb-2 lg:px-5 lg:py-4">*/}
                {/*    <Link to="/feed">*/}
                {/*        <img src={Arrow_back} alt="Go back" />*/}
                {/*    </Link>*/}
                {/*</div>*/}
                <div className="px-6 py-3 flex flex-col gap-4 lg:gap-6">
                    <div className="flex flex-col gap-2 lg:gap-3">
                        <div className="flex justify-between align-top">
                            <img
                                src={company.profilePicture}
                                alt={`${company.name} Logo`}
                                className="w-24 h-24 lg:w-32 lg:h-32 rounded-lg border-2 border-Swan"
                            />
                            <button onClick={toggleSubscribe}>
                                {
                                    company.isSubscribed
                                        ? <img src={NotificationsFilled} alt="Nofitications" className="w-8 h-8 lg:w-9 lg:h-9 cursor-pointer"/>
                                        : <img src={Notifications} alt="Nofitications" className="w-8 h-8 lg:w-9 lg:h-9 cursor-pointer"/>
                                }
                            </button>
                        </div>
                        <h1 className="text-2xl lg:text-4xl font-bold">{company.name}</h1>
                        <h2 className="text-base lg:text-lg font-medium">{company.tagline}</h2>
                        <div className="flex gap-1 text-neutral-500 text-xs lg:text-sm font-medium">
                            {
                                company.companySize && <span>{company.companySize.nameHr}</span>
                            }
                            •
                            <span>{company.headquarters}</span>
                        </div>
                        <div className="flex flex-col text-sm lg:text-base font-medium">
                            {company.industry && <span>{company.industry.nameHr}</span>}
                            <span>{company.specialties}</span>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <a
                            href={company.website}
                            target="_blank"
                            className="text-white bg-Primary py-1.5 px-3.5 flex gap-1 items-center text-sm font-semibold rounded-md">
                            Stranica
                            <img src={Open_in_new} alt="" className="w-5 h-5"/>
                        </a>
                        {
                            company.phone && (
                                <a
                                    href={`tel:${company.phone}`}
                                    className="py-1 px-3.5 flex gap-1 border-2 border-gray-900 items-center text-sm font-semibold rounded-md">
                                    <img src={Local_phone} alt="" className="w-5 h-5"/>
                                    {company.phone}
                                </a>
                            )
                        }
                    </div>
                </div>
                <hr/>
                <div className="px-6 py-3 lg:py-4">
                    <h2 className="text-xl font-semibold mb-2 lg:mb-3 lg:text-2xl">O firmi</h2>
                    <span className="font-medium" dangerouslySetInnerHTML={{__html: company.description}}></span>
                </div>
                <hr/>
                <div className="px-6 py-3 lg:py-4">
                    <h2 className="text-xl font-semibold mb-3 lg:mb-4 lg:text-2xl">Specijalnosti</h2>
                    <div className="flex flex-wrap gap-2">
                    {
                            company.skills.map((skill) => (
                                <div key={skill.id} className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                                    {skill.name}
                                </div>
                            ))
                        }

                        {
                            !company.skills && (
                                <p className="text-Ironside font-medium text-center w-full">
                                    Firma trenutno nema definirane specijalnosti
                                </p>
                            )
                        }
                    </div>
                </div>
                <hr/>
                <div className="px-6 py-3 lg:py-4">
                    <h2 className="text-xl font-semibold mb-2 lg:mb-3 lg:text-2xl">Lokacija</h2>
                    <div className="flex flex-row gap-2.5 items-center">
                        <img src={Pin_fill} alt="Pin"/>
                        <div className="text-md font-semibold">{company.headquarters}</div>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                company.headquarters
                            )}`}
                            target="_blank"
                            className="ml-3"
                        >
                            <img src={GMaps} alt="maps" className="w-[35px]"/>
                        </a>
                    </div>
                </div>
            </div>
            <ChatComponent companyId={company.id} companyName={company.name} />
        </>
    );
}
