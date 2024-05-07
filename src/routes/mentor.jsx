import {Outlet} from "react-router-dom";
import Chat from "../Components/chat/Chat.jsx";
import Navbar from "../Components/Navbar.jsx";

export default function Mentor() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center h-full mt-20 lg:mt-24">
                <div className="w-full lg:max-w-5xl lg:flex lg:gap-4">
                    <div className="hidden lg:block w-[500px] screen-height fixed top-24">
                        <Chat />
                    </div>
                    <div className="w-[500px]"></div>
                    <div className="w-full lg:w-1/2 overflow-y-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
