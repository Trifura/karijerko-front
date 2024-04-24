import React from "react";
import axios from "axios";
import "./ItemCard.css";
import {Link, useLoaderData} from "react-router-dom";
import sczgLogo from "../../assets/sczg.png";
import Close_round from "../../assets/icons/Close_round.svg";
import Wallet from "../../assets/icons/Wallet.svg";
import Certificate from "../../assets/icons/Certificate.svg";
import Time from "../../assets/icons/Time.svg";
import Pin_fill from "../../assets/icons/Pin_fill.svg";
import GMaps from "../../assets/maps.png"

export async function loader({ params }) {
    try {
        const { data: jobAd } = await axios.get(`https://karijerko-api-qo5qt47cea-ez.a.run.app/job-ads/${params.jobAdId}`)
        return { jobAd };
    } catch (e) {
        console.error("Error fetching job ad:", e);
        return { jobAd: null };
    }
}
export default function JobAdView() {
    const { jobAd } = useLoaderData();

    if (!jobAd) {
        return <div>Oglas nije pronađen :(</div>;
    }

    return (
        <div className="mt-3">
            <div className="flex gap-4 p-4 shadow-md border-t border-[#E0E0E0] rounded-t-xl">
                <div className="flex-grow">
                    <Link to={'/'}>
                        <img src={Close_round} className="mb-4" alt={'Close'}/>
                    </Link>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-bold">{jobAd.title}</h2>
                        <div>
                            <p>{jobAd.company}</p>
                            <p>{jobAd.address}</p>
                        </div>
                        <div className="text-lg text-[#58CC02]">
                            {jobAd.payFixed}€ po satu
                        </div>
                        <div className="font-semibold">
                            Prijave do {new Date(jobAd.deadline).toLocaleDateString()}
                        </div>
                        <a href={jobAd.adUrl}
                           target="_blank"
                           className="bg-[#58CC02] text-sm text-white px-5 py-2 rounded-md w-fit font-medium"
                        >
                            Otvori
                        </a>
                    </div>
                </div>
                <div className="w-12 flex-none">
                    <img src={sczgLogo} alt="SCZG" className="w-full rounded-md"/>
                </div>
            </div>
            <div className='px-4 py-5 flex flex-col gap-4 border-b border-[#E0E0E0]'>
                <div className="text-xl">Pojedinosti o poslu:</div>
                <div className="flex flex-col gap-7">
                    <div className="flex align-top gap-2.5">
                        <img src={Wallet} alt="" className="w-6 h-6"/>
                        <div className="flex flex-col gap-1">
                            <div className="text-sm font-bold">Plaća</div>
                            <div className="text-xs bg-[#E5E5E5] px-2 py-1.5 w-fit rounded-md">
                                {jobAd.payFixed}€ po satu
                            </div>
                        </div>
                    </div>
                    <div className="flex align-top gap-2.5">
                        <img src={Certificate} alt="" className="w-6 h-6"/>
                        <div className="flex flex-col gap-1">
                            <div className="text-sm font-bold">Vrsta posla</div>
                            <div className="flex gap-1">
                                {
                                    jobAd.jobTypes.map((jobType, index) => (
                                        <div
                                            key={index}
                                            className="text-xs bg-[#E5E5E5] px-2 py-1.5 w-fit rounded-md">
                                            {jobType.nameHr}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex align-top gap-2.5">
                        <img src={Time} alt="" className="w-6 h-6"/>
                        <div className="flex flex-col gap-1">
                            <div className="text-sm font-bold">Radno vrijeme</div>
                            <div className="flex gap-1">
                                {
                                    jobAd.scheduleTags.map((jobType, index) => (
                                        <div
                                            key={index}
                                            className="text-xs bg-[#E5E5E5] px-2 py-1.5 w-fit rounded-md">
                                            {jobType.nameHr}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 flex flex-col gap-2">
                <div className="text-xl">Lokacija</div>
                <div className="flex flex-row gap-2.5 items-center">
                    <img src={Pin_fill} alt="Pin"/>
                    <div className="text-md">{jobAd.address}</div>
                       <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                jobAd.address
                            )}`}
                            target="_blank"
                            className="ml-3"
                        >
                           <img src={GMaps} alt="maps" className="w-[35px]" />
                        </a>
                </div>
            </div>

            {jobAd.supplementalPay.length ?
                <div className="px-4 py-4 flex flex-col gap-2">
                    <div className="text-xl">Dodatne pogodnosti</div>
                    <div className="flex gap-2">
                        {
                            jobAd.supplementalPay.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="text-sm bg-[#E5E5E5] px-3 py-2 w-fit rounded-md">
                                    {benefit.nameHr}
                                </div>
                            ))
                        }
                    </div>
            </div> : ''}
            <div className="px-4 py-4 flex flex-col gap-2">
                <div className="text-xl">Opis posla:</div>
                <div className="whitespace-pre-wrap">
                    {jobAd.description}
                </div>
            </div>
        </div>
    );
}
