import React, { useState } from "react";
import LogoShort from "../../assets/Logo_short.svg";
import Verified from "../../assets/icons/Verified.svg";
import CircleCheck from "../../assets/icons/Check_circle.svg";
import CircleUnCheck from "../../assets/icons/UnCheck_circle.svg";
import Pin from "../../assets/icons/Pin_fill.svg";
import "../../index.css";

const profileData = {
  name: "Ime i Prezime",
  tags: ["Back-end developer", "Full-stack developer", "Software Engineer"],
};

function SideProfile() {
  const [checkedStates, setCheckedStates] = useState(
    new Array(profileData.tags.length).fill(true)
  );

  const handleButtonClick = (index) => {
    const newCheckedStates = checkedStates.map((item, i) =>
      i === index ? !item : item
    );
    setCheckedStates(newCheckedStates);
  };

  return (
    <>
      <div className="mt-5 border-[3px] border-Swan rounded-xl min-w-[240px] max-w-[400px] sticky top-20">
        <div className="m-5">
          <div className="flex">
            <div className="flex flex-row">
              <img
                className="p-1 w-[50px] h-[50px] border-2 border-Swan rounded-full"
                src="https://media.licdn.com/dms/image/D4D03AQHqe3q7qQA3XQ/profile-displayphoto-shrink_200_200/0/1714681109181?e=1723075200&v=beta&t=xMKS3vHfD_GGg8JSAS1oHcgxeufPCvvL1qvvJSwqysE"
                alt=""
              />
            </div>

            <div className="ml-3">
              <div className="font-medium flex flex-row underline underline-offset-4 items-center">
                <div>{profileData.name}</div>
                <div className="ml-1">
                  <img src={Verified} alt="" />
                </div>
              </div>
<div className="w-[14px] h-[14px] flex flex-row items-center">
<img src={Pin} alt="" />
<div className="text-md">Lokacija</div>
</div>
              
            </div>
          </div>

          <div className="mt-8">
            <div>Profil</div>

            {profileData.tags.map((tag, index) => (
              <button
                key={index}
                className="gap-2 flex flex-row items-center mt-2"
                onClick={() => handleButtonClick(index)}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={checkedStates[index] ? CircleUnCheck : CircleCheck}
                    alt=""
                  />
                  <div className="text-sm font-medium">{tag}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideProfile;
