import React from "react";
import "./ItemCard.css";

import JobAdCard from "./JobAdCard.jsx";

export default function JobAdList({jobAds}) {
  return (
    <div className="m-4 flex flex-col gap-4">
      {jobAds.map((jobAd, index) => (
          <JobAdCard jobAd={jobAd} key={index} />
      ))}
    </div>
  );
}
