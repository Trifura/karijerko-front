import { Outlet } from "react-router-dom";
import Chat from "../Components/chat/Chat";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import LogoShort from "../assets/Logo_short.svg";

export default function Mentor() {
    const [messages, setMessages] = useState([
        {
            type: 'mentor',
            message: 'Bok! Ja sam Karijerko, tvoj virtualni asistent za karijeru. Tu sam da ti pomognem razvijati vještine, postaviti i ostvariti profesionalne ciljeve te naći put do posla koji ti najviše odgovara 😊.'
        }
    ]);

    const [isChatOpen, setIsChatOpen] = useState(false)

    const addMessage = (message) => {
        const updatedMessages = [...messages, { type: 'user', message }];
        setMessages(updatedMessages);

        setTimeout(() => {
            setMessages([
                ...updatedMessages,
                { type: 'mentor', message: 'Nažalost sam trenutno u fazi razvoja i ne mogu odgovoriti na tvoje poruke. Molim te pokušaj kasnije. Hvala na razumijevanju! 😊' }
            ]);
        }, 1000);
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center h-full mt-20 lg:mt-24">
                <div className="w-full lg:max-w-5xl lg:flex lg:gap-4">
                    <div className="hidden lg:block w-[500px] screen-height fixed top-24">
                        <Chat messages={messages} addMessage={addMessage} setIsChatOpen={setIsChatOpen} />
                    </div>
                    <div className="w-[500px] hidden lg:block"></div>
                    <div className="w-full lg:w-1/2 overflow-y-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
            {
                isChatOpen ? (
                    <div className="fixed lg:hidden top-0 left-0 h-full w-full z-50 bg-white overscroll-none">
                        <Chat messages={messages} addMessage={addMessage} setIsChatOpen={setIsChatOpen} />
                    </div>
                ) : (
                    <div className="fixed lg:hidden bottom-5 right-5 w-16 h-16 bg-white border-2 border-neutral-200 rounded-full flex justify-center items-center">
                        <button onClick={() => setIsChatOpen(true)}>
                            <img src={LogoShort} alt="Chat" className="w-full h-full p-2" />
                        </button>
                    </div>
                )
            }
        </>
    )
}
