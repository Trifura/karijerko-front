import Verified from "../../assets/icons/Verified.svg";
import CircleCheck from "../../assets/icons/Check_circle.svg";
import CircleUnCheck from "../../assets/icons/UnCheck_circle.svg";
import Pin from "../../assets/icons/Pin_fill.svg";
import "../../index.css";

function SideProfile({ selectedProfileId, setSelectedProfileId, account, profiles }) {

  return (
    <>
      <div className="border-[3px] border-Swan rounded-xl min-w-[240px] max-w-[400px] sticky top-20">
        <div className="m-5">
          <div className="flex">
            <div className="flex flex-row">
              <img
                className="p-1 w-[50px] h-[50px] border-2 border-Swan rounded-full"
                src={account.profilePicture}
                alt=""
              />
            </div>

            <div className="ml-3">
              <div className="font-medium flex flex-row underline underline-offset-4 items-center">
                <div>{account.firstName} {account.lastName}</div>
                <div className="ml-1">
                  <img src={Verified} alt="" />
                </div>
              </div>
              <div className="w-[14px] h-[14px] flex flex-row items-center">
                <img src={Pin} alt="" />
                <div className="text-md">Zagreb</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div>Profil</div>

            {profiles.map((profile) => (
              <button
                key={profile.id}
                className="gap-2 flex flex-row items-center mt-2"
                onClick={() => setSelectedProfileId(profile.id)}
              >
                <div className="flex items-center gap-2">
                  {
                    selectedProfileId === profile.id ? (
                        <img src={CircleCheck} alt="" className="w-5 h-5" />
                        ) : (
                        <img src={CircleUnCheck} alt="" className="w-5 h-5" />
                        )
                  }

                  <div className="text-sm font-medium">{profile.name}</div>
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
