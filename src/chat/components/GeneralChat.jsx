import Chat from "./Chat.jsx";
import {useEffect, useState} from "react";
import api from "../../core/utils/api.js";
import AIStars from "../../assets/icons/AI_Stars.svg";
import LoginMessage from "./LoginMessage.jsx";
import {useSelector} from "react-redux";

export default function GeneralChat() {
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [messages, setMessages] = useState([])
    const [isTyping, setIsTyping] = useState(false)
    const [showLoginMessage, setShowLoginMessage] = useState(false);

    const { isAuthenticated } = useSelector(state => state.auth);


    const addMessage = async (content) => {
        const updatedMessages = [...messages, { role: 'user', content }];
        setMessages(updatedMessages);

        setTimeout(() => {
            setIsTyping(true)
        }, 500)

        const {data} = await api.post(`assistant/general-message`, { content });

        setIsTyping(false)
        setMessages([...updatedMessages, { role: 'assistant', content: data.content }]);
    }

    useEffect(() => {
        if (!isAuthenticated) return;

        const defaultMessage = {
            role: 'assistant',
            content: `Bok, piši mi što te zanima i ja ću ti preporučiti firme!`
        }

        api.get(`assistant/general-message/`).then(r => {
            setMessages([defaultMessage, ...r.data]);
        }).catch(e => {
            console.error(e);
        })
    }, [isAuthenticated]);

    const openChat = () => {
        if (!isAuthenticated) {
            setShowLoginMessage(true);
            return;
        }

        setIsChatOpen(true);
    }

    return (
        <>
            {showLoginMessage && <LoginMessage onClose={() => setShowLoginMessage(false)} />}
            {
                isChatOpen ? (
                    <div className="fixed h-full w-full z-50 bg-white overscroll-none md:h-[640px] md:w-[420px] top-0 left-0 md:top-auto md:left-auto md:bottom-5 md:right-5">
                        <Chat messages={messages} addMessage={addMessage} setIsChatOpen={setIsChatOpen} isTyping={isTyping} />
                    </div>
                ) : (
                    <div className="fixed bottom-5 right-5 w-16 h-16 bg-white border-2 border-Swan rounded-full flex justify-center items-center">
                        <button onClick={openChat}>
                            <img src={AIStars} alt="Chat" className="w-full h-full p-2" />
                        </button>
                    </div>
                )
            }
        </>
    )
}