import React from "react";
import LandingPage from "../Components/LandingPage";

function Root() {
    return (
        <>

{/*
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

        */}
        <LandingPage/>

        </>
    );
}

export default Root;
