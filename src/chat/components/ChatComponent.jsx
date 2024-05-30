import Chat from "./Chat.jsx";
import LogoShort from "../../assets/Logo_short.svg";
import {useEffect, useState} from "react";
import api from "../../core/utils/api.js";


export default function ChatComponent({ companyId }) {
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [messages, setMessages] = useState([])

    const addMessage = (message) => {
        const updatedMessages = [...messages, { role: 'user', content: message }];
        setMessages(updatedMessages);
    }

    useEffect(() => {
        api.get(`assistant/messages/${companyId}/`).then(r => {
            setMessages(r.data);
        }).catch(e => {
            console.error(e);
        })
    }, [companyId]);

    return (
        <>
            {
                isChatOpen ? (
                    <div className="fixed h-full w-full z-50 bg-white overscroll-none md:h-[640px] md:w-[360px] top-0 left-0 md:top-auto md:left-auto md:bottom-5 md:right-5">
                        <Chat messages={messages} addMessage={addMessage} setIsChatOpen={setIsChatOpen} />
                    </div>
                ) : (
                    <div className="fixed bottom-5 right-5 w-16 h-16 bg-white border-2 border-Swan rounded-full flex justify-center items-center">
                        <button onClick={() => setIsChatOpen(true)}>
                            <img src={LogoShort} alt="Chat" className="w-full h-full p-2" />
                        </button>
                    </div>
                )
            }
        </>
    )
}