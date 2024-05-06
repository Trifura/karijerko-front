import React from "react";
import {Link} from "react-router-dom";
import sczgLogo from "../../../assets/sczg.png";

export default function JobAdCard({jobAd}) {
    const timeDifference = (postedDate) => {
        const difference = new Date() - new Date(postedDate);
        const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
        return `Objavljeno prije ${daysDifference} dana`;
    };

    return (
        <Link
            to={`/oglas/${jobAd.id}`}
            className="cursor-pointer px-4 py-5 border border-[#E0E0E0] rounded-lg block w-full"
        >
            <div className="flex">
                <div className="flex-grow">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg font-bold">{jobAd.title}</h2>
                        <div>
                            <p className="text-sm">{jobAd.company}</p>
                            <p className="text-sm">{jobAd.address}</p>
                        </div>
                        <div className="font-semibold text-[#58CC02]">
                            {jobAd.payFixed}€ po satu
                        </div>
                        <div className="whitespace-pre-wrap hidden md:block">
                            {jobAd.description}
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-[#AFAFAF] mt-6">{timeDifference(jobAd.createdAt)}</p>
                    </div>
                </div>
                <div className="w-11 flex-none flex flex-col">
                    <div className="flex-grow"></div>
                    <img src={sczgLogo} alt="SCZG" className="w-9 h-9 rounded-md"/>
                </div>
            </div>
        </Link>
    )
}
