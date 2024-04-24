import React from "react";
import Navbar from "../Components/Navbar";
import JobAdList from "../Components/job-ad/JobAdList.jsx";
import {Outlet, useLoaderData, useLocation} from "react-router-dom";
import axios from "axios";

function Root() {
    const { jobAds } = useLoaderData();

    const location = useLocation();

    const isJobAdView = location.pathname.startsWith("/oglas/");

    return (
        <>
            <Navbar />
            <div className="h-[10px]"></div>
            <div className="md:flex md:flex-row gap-5 justify-center">
                <div className={`sm:w-[600px] md:w-[320px] lg:w-[500px] ${isJobAdView && 'hidden md:block'}`}>
                    <div className="sm:flex sm:flex-row">
                        <JobAdList jobAds={jobAds} />
                    </div>
                </div>
                <div className="sm:w-[600px] md:w-[320px] lg:w-[500px]">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export async function loader() {
    try {
        const {data} = await axios.get("https://karijerko-api-qo5qt47cea-ez.a.run.app/job-ads/")
        return { jobAds: data };
    } catch (e) {
        console.error("Error fetching job ads:", e);
        return { jobAds: [] };
    }

}

export default Root;
