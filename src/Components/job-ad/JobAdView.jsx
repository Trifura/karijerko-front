import React from "react";
import axios from "axios";
import "./ItemCard.css";
import sczg from "../../assets/sczg.png";
import maps from "../../assets/maps.png";
import { CiBookmark } from "react-icons/ci";
import { GiCancel } from "react-icons/gi";
import { CiWallet } from "react-icons/ci";
import { PiCertificateLight } from "react-icons/pi";
import { CiClock1 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import {useLoaderData} from "react-router-dom";


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
        <div className="job-post border-b border-solid sm:w-[600px] md:w-[320px] lg:w-[500px]">
            <div className="p-10">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="text-lg font-bold">{jobAd.title}</div>
                        <div className="text-sm">{jobAd.company}</div>
                        <div className="text-xs">{jobAd.address}</div>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="w-[30px]">
                        <div className="sczg-image-container">
                            <img src={sczg} alt="sczg" className="sczg-image" />
                        </div>
                    </div>
                </div>
                <div className="text-[#58CC02] p-2 text-sm">
                    {jobAd.payFixed}€ po satu
                </div>
                <div className="text-base">
                    Prijave do {new Date(jobAd.deadline).toLocaleDateString()}
                </div>
                <div className="flex flex-row p-1">
                    <a
                        href={jobAd.adUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="green-button"
                    >
                        Otvori
                    </a>
                    <CiBookmark className="bookmark-icon invisible" />
                    <GiCancel className="cancel-icon invisible" />
                </div>
            </div>
            <div className="border-b sm:w-[600px] md:w-[300px] lg:w-[470px]"></div>

            <div className="p-5">
                <div className="text-xl p-1">Pojedinosti o poslu:</div>
                <div className="flex flex-row">
                    <div className="p-1">
                        <CiWallet size={24} style={{ color: "#4b4b4b" }} />
                    </div>

                    <div>
                        <div className="text-sm">Plaća</div>
                        <div className="gray-button text-xs">
                            {jobAd.payFixed}€ po satu
                        </div>
                    </div>
                </div>
                <div className="flex flex-row p-1">
                    <PiCertificateLight size={24} style={{ color: "#4b4b4b" }} />
                    <div>
                        <div className="text-sm">Vrsta posla</div>
                        <div className="gray-button text-xs">
                            {jobAd.jobTypes[0].nameHr}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row p-1">
                    <CiClock1 size={24} style={{ color: "#4b4b4b" }} />
                    <div>
                        <div className="text-sm">Radno vrijeme</div>
                        <div className="gray-button text-xs">
                            {jobAd.hoursMin}-{jobAd.hoursMax} sati tjedno
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b sm:w-[600px] md:w-[300px] lg:w-[470px]"></div>

            <div className="p-5">
                <div className="text-xl">Lokacija</div>
                <div className="flex flex-row items-center">
                    <IoLocationOutline className="mr-2" size={24} />
                    <div className="text-md">{jobAd.address}</div>
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            jobAd.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3"
                    >
                        <div className="pl-4">
                            <img src={maps} alt="maps" className="w-[35px]" />
                        </div>
                    </a>
                </div>
            </div>

            <div className="border-b sm:w-[600px] md:w-[300px] lg:w-[470px]"></div>

            <div className="p-5">
                {jobAd.supplementalPay.length > 0 && (
                    <div>
                        <div className="text-xl">Dodatne pogodnosti</div>
                        <div>
                            {jobAd.supplementalPay.map((benefit, index) => (
                                <div className="text-md" key={index}>
                                    {benefit.nameHr}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {jobAd.description && (
                    <>
                        <div className="pt-5"></div>
                        <div>
                            <div className="text-xl">Opis posla</div>
                            <div className="text-md">{jobAd.description}</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
