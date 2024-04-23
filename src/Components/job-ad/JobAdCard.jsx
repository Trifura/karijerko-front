import React from "react";
import {Link} from "react-router-dom";

export default function JobAdCard({jobAd}) {
    const timeDifference = (postedDate) => {
        const difference = new Date() - new Date(postedDate);
        const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
        return `Objavljeno prije ${daysDifference} dana`;
    };

    return (
        <Link
            to={`/oglas/${jobAd.id}`}
            className="job-post flex flex-row relative cursor-pointer"
        >
            <div className="p-10 border-b border-solid sm:w-[600px] md:w-[320px] lg:w-[500px]">
                <div className="flex justify-between">
                    <div>
                        <div className="text-lg font-bold">{jobAd.title}</div>
                        <div className="text-sm">{jobAd.company}</div>
                    </div>
                </div>
                <div className="text-xs">{jobAd.address}</div>
                <div className="text-[#58CC02] p-2 text-sm">
                    {jobAd.payFixed}€ po satu
                </div>
                <div className="text-sm p-1">{jobAd.description}</div>
                <div className="absolute bottom-0 left-0 text-xs text-[#AFAFAF] p-2">
                    {timeDifference(jobAd.createdAt)}
                </div>
            </div>
        </Link>
    )
}
