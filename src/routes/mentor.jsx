import {Outlet} from "react-router-dom";
import Chat from "../Components/chat/Chat.jsx";
import Navbar from "../Components/Navbar.jsx";

export default function Mentor() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center h-screen mt-5">
                <div className="w-full lg:max-w-5xl lg:flex lg:gap-4">
                    <div className="hidden lg:block w-1/2 sticky top-2">
                        <Chat />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
