import Navbar from "../../core/components/Navbar.jsx";
import {useSelector} from "react-redux";

import EditIcon from "../../assets/icons/Edit.svg";
import AddIcon from "../../assets/icons/Add.svg";
import DeleteIcon from "../../assets/icons/Delete.svg";

export default function Profile() {
    const {account} = useSelector(state => state.auth)
    return (
        <>
            <Navbar/>
            <div className="lg:hidden mt-20">
                <div className="flex gap-4 items-center p-8">
                    <img src={account.profilePicture} className="w-20 h-20 rounded-full" alt=""/>
                    <div className="flex flex-col gap-1.5">
                        <div className="flex gap-2 items-center">
                            <h1 className="text-2xl font-semibold">{account.firstName} {account.lastName}</h1>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.25 9L15.42 6.9075L15.675 4.14L12.9675 3.525L11.55 1.125L9 2.22L6.45 1.125L5.0325 3.5175L2.325 4.125L2.58 6.9L0.75 9L2.58 11.0925L2.325 13.8675L5.0325 14.4825L6.45 16.875L9 15.7725L11.55 16.8675L12.9675 14.475L15.675 13.86L15.42 11.0925L17.25 9ZM7.035 12.0075L5.25 10.2075C4.9575 9.915 4.9575 9.4425 5.25 9.15L5.3025 9.0975C5.595 8.805 6.075 8.805 6.3675 9.0975L7.575 10.3125L11.4375 6.4425C11.73 6.15 12.21 6.15 12.5025 6.4425L12.555 6.495C12.8475 6.7875 12.8475 7.26 12.555 7.5525L8.115 12.0075C7.8075 12.3 7.335 12.3 7.035 12.0075Z"
                                    fill="#1F57C3"/>
                            </svg>
                        </div>
                        <div className="flex gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.2656 19.8716C13.5438 19.2283 19 16.1789 19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11C5 16.1789 10.4562 19.2283 11.7344 19.8716C11.904 19.957 12.096 19.957 12.2656 19.8716ZM11.9999 14C13.6568 14 14.9999 12.6569 14.9999 11C14.9999 9.34316 13.6568 8.00002 11.9999 8.00002C10.3431 8.00002 8.99994 9.34316 8.99994 11C8.99994 12.6569 10.3431 14 11.9999 14Z"
                                      fill="#676767"/>
                            </svg>
                            <p className="text-base text-Ironside font-medium">Zagreb, Croatia</p>
                        </div>
                    </div>
                </div>
                <hr className="border-Swan"/>
                <div className="p-8 flex flex-col gap-6">
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-semibold">Profili</h2>
                            <button>
                                <img src={EditIcon} alt="Edit"/>
                            </button>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">DROPDOWN GOES HERE</h2>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between">
                            <h2 className="text-2xl font-semibold">Front-end developer</h2>
                            <button>
                                <img src={EditIcon} alt="Edit"/>
                            </button>
                        </div>
                        <div className="flex items-start">
                            <p>
                                I am a Full stack developer with real project experience in Frontend (VueJs, Reactjs) and
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Backend (ExpressJs, Graphql). In my 3 years of experience I've learned a lot about NodeJs
                                and how the web works. I started to work at a really young age because I found a passion for
                                programming.
                            </p>
                            <button className="flex-none">
                                <img src={EditIcon} alt="Edit"/>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="border-Swan"/>
                <div className="p-8 flex flex-col gap-6">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-semibold">Portfolio</h2>
                        <button>
                            <img src={AddIcon} alt="Edit"/>
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-between gap-1">
                        <div className="w-[150px]">
                            <div className="border border-Swan rounded-2xl p-4 ">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                                    alt="Portfolio"/>
                            </div>
                            <p className="text-center font-semibold">Github profil</p>
                        </div>
                        <div className="w-[150px]">
                            <div className="border border-Swan rounded-2xl p-4 ">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                                    alt="Portfolio"/>
                            </div>
                            <p className="text-center font-semibold">Github profil</p>
                        </div>
                        <div className="w-[150px]">
                            <div className="border border-Swan rounded-2xl p-4 ">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                                    alt="Portfolio"/>
                            </div>
                            <p className="text-center font-semibold">Github profil</p>
                        </div>
                    </div>
                </div>
                <hr className="border-Swan"/>
                <div className="p-8 flex flex-col gap-6">
                    <h2 className="text-2xl font-semibold">Vještine</h2>
                    <div className="flex flex-wrap gap-2">
                        <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                            MongoDB
                        </div>
                        <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                        JavaScript
                        </div>
                        <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                            Docker
                        </div>
                        <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                            MySQL
                        </div>
                        <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                            AWS
                        </div>
                        <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                            React
                        </div>
                        <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                            MongoDB
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block border-2 border-Swan rounded-2xl mt-32 mb-10 max-w-5xl mx-auto">
                <div className="flex gap-4 items-center p-8">
                    <img src={account.profilePicture} className="w-20 h-20 rounded-full" alt=""/>
                    <div className="flex flex-col gap-1.5">
                        <div className="flex gap-2 items-center">
                            <h1 className="text-4xl font-semibold">{account.firstName} {account.lastName}</h1>
                            <svg width="28" height="28" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.25 9L15.42 6.9075L15.675 4.14L12.9675 3.525L11.55 1.125L9 2.22L6.45 1.125L5.0325 3.5175L2.325 4.125L2.58 6.9L0.75 9L2.58 11.0925L2.325 13.8675L5.0325 14.4825L6.45 16.875L9 15.7725L11.55 16.8675L12.9675 14.475L15.675 13.86L15.42 11.0925L17.25 9ZM7.035 12.0075L5.25 10.2075C4.9575 9.915 4.9575 9.4425 5.25 9.15L5.3025 9.0975C5.595 8.805 6.075 8.805 6.3675 9.0975L7.575 10.3125L11.4375 6.4425C11.73 6.15 12.21 6.15 12.5025 6.4425L12.555 6.495C12.8475 6.7875 12.8475 7.26 12.555 7.5525L8.115 12.0075C7.8075 12.3 7.335 12.3 7.035 12.0075Z"
                                    fill="#1F57C3"/>
                            </svg>
                        </div>
                        <div className="flex gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.2656 19.8716C13.5438 19.2283 19 16.1789 19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11C5 16.1789 10.4562 19.2283 11.7344 19.8716C11.904 19.957 12.096 19.957 12.2656 19.8716ZM11.9999 14C13.6568 14 14.9999 12.6569 14.9999 11C14.9999 9.34316 13.6568 8.00002 11.9999 8.00002C10.3431 8.00002 8.99994 9.34316 8.99994 11C8.99994 12.6569 10.3431 14 11.9999 14Z"
                                      fill="#676767"/>
                            </svg>
                            <p className="text-base text-Ironside font-medium">Zagreb, Croatia</p>
                        </div>
                    </div>
                </div>
                <hr className="border-Swan"/>
                <div className="flex h-full">
                    <div className="w-[370px] border-r border-r-Swan">
                        <div className="p-8 flex flex-col gap-4">
                            <div className="w-full flex justify-between">
                                <h2 className="text-xl font-semibold">Profili</h2>
                                <button>
                                    <img src={EditIcon} alt="Edit"/>
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <div className="px-4 py-2 bg-Primary text-white font-bold text-base rounded-xl">
                                    Front-end developer
                                </div>
                                <div className="px-4 py-2 font-bold text-base rounded-xl">
                                    Back-end developer
                                </div>
                            </div>
                        </div>
                        <hr className="border-Swan"/>
                        <div className="p-8 flex flex-col gap-2">
                            <div className="w-full flex justify-between">
                                <h2 className="text-xl font-semibold">Jezici</h2>
                                <button>
                                    <img src={EditIcon} alt="Edit"/>
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="font-semibold text-base rounded-xl">
                                    Engleski
                                </div>
                                <div className="font-semibold text-base rounded-xl">
                                    Njemački
                                </div>
                            </div>
                        </div>
                        <hr className="border-Swan"/>
                        <div className="p-8 flex flex-col gap-8">
                            <div className="w-full flex justify-between">
                                <h2 className="text-xl font-semibold">Edukacija</h2>
                                <button>
                                    <img src={AddIcon} alt="Add"/>
                                </button>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <div className="flex gap-5 items-start">
                                        <h3 className="text-xl font-semibold">Elektrotehnička i prometna škola
                                            Osijek</h3>
                                        <div className="flex gap-2">
                                            <button className="w-8 flex-none">
                                                <img src={EditIcon} alt="Edit"/>
                                            </button>
                                            <button className="w-8 flex-none">
                                                <img src={DeleteIcon} alt="Delete"/>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-Ironside font-medium">Tehničar za računalstvo</p>
                                    <p className="text-Ironside font-medium">2018 - 2022</p>
                                </div>
                                <div>
                                    <div className="flex gap-5 items-start">
                                        <h3 className="text-xl font-semibold">Tehničko veleučilište u Zagrebu</h3>
                                        <div className="flex gap-2">
                                            <button className="w-8 flex-none">
                                                <img src={EditIcon} alt="Edit"/>
                                            </button>
                                            <button className="w-8 flex-none">
                                                <img src={DeleteIcon} alt="Delete"/>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-Ironside font-medium">Informatika</p>
                                    <p className="text-Ironside font-medium">2022 - 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="p-8 flex flex-col gap-6 w-full">
                            <div className="flex w-full justify-between">
                                <h2 className="text-2xl font-medium">Front-end Developer</h2>
                                <button>
                                    <img src={EditIcon} alt="Edit"/>
                                </button>
                            </div>
                            <p>
                                I am a Full stack developer with real project experience in Frontend (VueJs, Reactjs)
                                and Backend (ExpressJs, Graphql).
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                In my 3 years of experience I've learned a lot about NodeJs and how the web works.
                                I started to work at a really young age because I found a passion for programming.
                            </p>
                        </div>
                        <hr className="border-Swan"/>
                        <div className="w-full flex flex-col gap-6 p-8">
                            <div className="flex w-full justify-between">
                                <h2 className="text-2xl font-medium">Portfolio</h2>
                                <button>
                                    <img src={AddIcon} alt="Add"/>
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-6">
                                <div className="w-[170px]">
                                    <div className="border border-Swan rounded-2xl p-4 ">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                                            alt="Portfolio"/>
                                    </div>
                                    <p className="text-center font-semibold">Github profil</p>
                                </div>
                                <div className="w-[170px]">
                                    <div className="border border-Swan rounded-2xl p-4 ">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                                            alt="Portfolio"/>
                                    </div>
                                    <p className="text-center font-semibold">Github profil</p>
                                </div>
                                <div className="w-[170px]">
                                    <div className="border border-Swan rounded-2xl p-4 ">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                                            alt="Portfolio"/>
                                    </div>
                                    <p className="text-center font-semibold">Github profil</p>
                                </div>
                                <div className="w-[170px]">
                                    <div className="border border-Swan rounded-2xl p-4 ">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                                            alt="Portfolio"/>
                                    </div>
                                    <p className="text-center font-semibold">Github profil</p>
                                </div>
                            </div>
                        </div>
                        <hr className="border-Swan"/>
                        <div className="p-8 flex flex-col gap-6 w-full">
                            <h2 className="text-2xl font-semibold">Vještine</h2>
                            <div className="flex flex-wrap gap-2">
                                <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                                    MongoDB
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                                    JavaScript
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                                    Docker
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                                    MySQL
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                                    AWS
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                                    React
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                                    MongoDB
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
