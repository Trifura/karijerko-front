import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ItemCard.css";
import sczg from "../assets/sczg.png";
import maps from "../assets/maps.png";
import { CiBookmark } from "react-icons/ci";
import { GiCancel } from "react-icons/gi";
import { CiWallet } from "react-icons/ci";
import { PiCertificateLight } from "react-icons/pi";
import { CiClock1 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

function ItemCardInfo({ id }) {
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://karijerko-api-qo5qt47cea-ez.a.run.app/job-ads/${id}`)
      .then((response) => {
        setJobDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
        // Handle error
      });
  }, [id]);

  if (!jobDetails) {
    return <div></div>;
  }

  return (
    <div className="job-post p-10 border-b border-solid sm:w-[600px] md:w-[300px] lg:w-[470px]">
      <div className="flex flex-row">
        <div className="text-lg font-bold">{jobDetails.title}</div>
        <div>
          <img src={sczg} alt="sczg" className="w-[60px]" />
        </div>
      </div>
      <div className="text-sm">{jobDetails.company}</div>
      <div className="text-xs">{jobDetails.address}</div>
      <div className="text-[#58CC02] p-2 text-sm">
        {jobDetails.payFixed}€ po satu
      </div>
      <div className="text-base">
        Prijave do {new Date(jobDetails.deadline).toLocaleDateString()}
      </div>
      {/* TODO: Dodati da link otvori SC stranicu */}
      <div className="flex flex-row p-1">
        <div className="green-button">Otvori</div>

        {/*
        <CiBookmark className="bookmark-icon" />
        <GiCancel className="cancel-icon" />
        */}
      </div>
      <div>
        <div className="text-xl p-1">Pojedinosti o poslu:</div>
        <div className="flex flex-row">
            <div className="p-1">
            <CiWallet size={24} style={{ color: '#4b4b4b' }}/>
            </div>
          
          <div>
            <div>Plaća</div>
            <div>{jobDetails.payFixed}€ po satu</div>
          </div>
        </div>
        <div className="flex flex-row">
          <PiCertificateLight size={24} style={{ color: '#4b4b4b' }} />
          <div>
            <div>Vrsta posla</div>
            <div>{jobDetails.jobTypes[0].nameHr}</div>
          </div>
        </div>
        <div className="flex flex-row">
          <CiClock1 size={24} style={{ color: '#4b4b4b' }} />
          <div>
            <div>Radno vrijeme</div>
            <div>
              {jobDetails.hoursMin}-{jobDetails.hoursMax} sati tjedno
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>Lokacija</div>
        <div className="flex flex-row">
          <IoLocationOutline />
          <div>{jobDetails.address}</div>
          <img src={maps} alt="maps" className="w-[25px]" />
        </div>
      </div>

      <div>
        <div>Dodatne pogodnosti</div>
        <div>
          {jobDetails.supplementalPay.map((benefit, index) => (
            <div key={index}>{benefit.nameHr}</div>
          ))}
        </div>
      </div>

      <div>
        <div>Opis posla</div>
        <div>{jobDetails.description}</div>
      </div>
    </div>
  );
}

export default ItemCardInfo;
