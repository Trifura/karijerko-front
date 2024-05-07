import {Outlet} from "react-router-dom";
import Chat from "../Components/chat/Chat.jsx";
import Navbar from "../Components/Navbar.jsx";
import {useState} from "react";

export default function Mentor() {
    const [messages, setMessages] = useState([
        {
            type: 'mentor',
            message: 'Bok! Ja sam Karijerko, tvoj virtualni asistent za karijeru. Tu sam da ti pomognem razvijati vještine, postaviti i ostvariti profesionalne ciljeve te naći put do posla koji ti najviše odgovara 😊.'
        }
        ]
    )
    const addMessage = (message) => {
        setMessages([...messages, {type: 'user', message}])

        setTimeout(() => {
            setMessages([...messages, {type: 'user', message}, {type: 'mentor', message: 'Nažalost sam trenutno u fazi razvoja i ne mogu odgovoriti na tvoje poruke. Molim te pokušaj kasnije. Hvala na razumijevanju! 😊'}])
        }, 1000)
    }
    return (
        <>
            <Navbar />
            <div className="flex justify-center h-full mt-20 lg:mt-24">
                <div className="w-full lg:max-w-5xl lg:flex lg:gap-4">
                    <div className="hidden lg:block w-[500px] screen-height fixed top-24">
                        <Chat messages={messages} addMessage={addMessage}/>
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
