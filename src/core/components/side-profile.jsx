import Verified from "../../assets/icons/Verified.svg";
import CircleCheck from "../../assets/icons/Check_circle.svg";
import CircleUnCheck from "../../assets/icons/UnCheck_circle.svg";
import Pin from "../../assets/icons/Pin_fill.svg";
import "../../index.css";
import { Link } from "react-router-dom";

function SideProfile({ selectedProfileId, setSelectedProfileId, account, profiles }) {

  const getInitials = (name) => {
    if (!name) return '';

    const nameParts = name.trim().split(/\s+/);
    let initials = '';
    for (let i = 0; i < nameParts.length; i++) {
        initials += nameParts[i].charAt(0).toUpperCase();
        if (initials.length >= 2) break;
    }

    return initials;
  }

  const drawInitialsAvatar = (initials) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const colors = [
      '#264653',
    ];

    const size = 44; // Width and height of the canvas
    canvas.width = size;
    canvas.height = size;

    // Randomly select a background color
    const backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Draw circle
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = backgroundColor; // Use the selected background color
    context.fill();

    // Draw initials
    context.font = '20px Arial';
    context.fillStyle = '#ffffff'; // Text color
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(initials, size / 2, size / 2);

    return canvas.toDataURL();
  };

  return (
    <>
      <div className="border-[3px] border-Swan rounded-3xl w-full lg:w-fit min-w-[300px] h-fit lg:max-w-[400px] sticky top-24 p-5">
        <div className="flex">
          <div className="flex flex-row">
            {account && account.role !== "" ? (
              account.profilePicture ? (
                <img
                  src={account?.profilePicture}
                  className="rounded-full w-full h-full"
                  alt=""
                />
              ) : (
                <img
                  src={drawInitialsAvatar(getInitials(`${account?.firstName} ${account?.lastName}`))}
                  className="rounded-full w-full h-full"
                  alt=""
                />
              )
            ) : (
              <img
                src={drawInitialsAvatar(getInitials(`${account?.name}`))}
                className="rounded-full w-full h-full"
                alt=""
              />
            )}
          </div>

          <div className="ml-3">
            <div className="font-bold flex flex-row text-lg items-center">
              <Link to="/profile">{account.firstName} {account.lastName}</Link>
              <div className="ml-1">
                <img src={Verified} alt="" />
              </div>
            </div>
            <div className="w-5 h-5 flex flex-row items-center">
              <img src={Pin} alt="" />
              <div className="text-md font-medium">Zagreb</div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-lg font-medium">Profil</div>
          {
            profiles.length === 0 && (
              <Link to="/profile" className="mt-2 font-bold bg-Primary hover:bg-PrimaryDark text-white rounded-2xl pl-4 pr-8 py-0.5 flex items-center gap-3">
                <span className="text-white text-2xl mb-0.5">
                  +
                </span>
                Napravi profil
              </Link>
            )
          }
          {profiles.map((profile) => (
            <button
              key={profile.id}
              className="gap-2 flex flex-row items-center mt-2"
              onClick={() => setSelectedProfileId(profile.id)}
            >
              <div className="flex items-center gap-3">
                {
                  selectedProfileId === profile.id ? (
                    <img src={CircleCheck} alt="" className="w-5 h-5" />
                  ) : (
                    <img src={CircleUnCheck} alt="" className="w-5 h-5" />
                  )
                }

                <div className="font-medium text-left">{profile.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideProfile;
