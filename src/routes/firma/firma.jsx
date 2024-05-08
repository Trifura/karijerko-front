import Arrow_back from "../../assets/icons/Arrow_back.svg";
import Notifications from "../../assets/icons/Notifications.svg";
import Open_in_new from "../../assets/icons/Open_in_new.svg";
import Local_phone from "../../assets/icons/Local_phone.svg";
import GMaps from "../../assets/maps.png";
import Pin_fill from "../../assets/icons/Pin_fill.svg";
import {Link, useLoaderData} from "react-router-dom";

export default function Firma() {
    const {company} = useLoaderData()

    return (
        <div className="lg:border-4 border-neutral-200 rounded-3xl">
            <div className="px-4 pt-4 pb-2 lg:px-5 lg:py-4">
                <Link to="/mentor">
                    <img src={Arrow_back} alt="Go back"/>
                </Link>
            </div>
            <div className="px-6 py-3 flex flex-col gap-4 lg:gap-6">
                <div className="flex flex-col gap-2 lg:gap-3">
                    <div className="flex justify-between align-top">
                        <img
                            src={company.profilePicture}
                            alt={`${company.name} Logo`}
                            className="w-24 h-24 lg:w-32 lg:h-32 rounded-lg border-2 border-neutral-200"
                        />
                        <img src={Notifications} alt="Nofitications" className="w-8 h-8 lg:w-9 lg:h-9 cursor-pointer"/>
                    </div>
                    <h1 className="text-2xl lg:text-4xl font-bold">{company.name}</h1>
                    <h2 className="text-base lg:text-lg font-medium">{company.tagline}</h2>
                    <div className="flex gap-1 text-neutral-500 text-xs lg:text-sm font-medium">
                        <span>{company.companySize.nameHr}</span>
                        •
                        <span>{company.headquarters}</span>
                    </div>
                    <div className="flex flex-col text-sm lg:text-base font-medium">
                        <span>{company.industry.nameHr}</span>
                        <span>{company.specialties}</span>
                    </div>
                </div>
                <div className="flex gap-6">
                    <a
                        href={company.website}
                        target="_blank"
                        className="text-white bg-[#58CC02] py-1.5 px-3.5 flex gap-1 items-center text-sm font-semibold rounded-md">
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
                <span className="whitespace-pre-wrap text-sm font-medium lg:text-base">{company.description}</span>
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
                        <img src={GMaps} alt="maps" className="w-[35px]" />
                    </a>
                </div>
            </div>
        </div>

    )
}
