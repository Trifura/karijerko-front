import CloseRound from "../../assets/icons/Close_round.svg";
import { useState } from "react";
import ChatMessages from "./ChatMessages.jsx";
import ChatInput from "./ChatInput.jsx";


export default function Chat({ messages, addMessage, setIsChatOpen }) {
    const [newMessage, setNewMessage] = useState('');

    const sendMessage = (event) => {
        if (event.key && event.key !== 'Enter') return
        if (!newMessage) return

        addMessage(newMessage)
        setNewMessage('')
    };

    return (
        <>
            <div className="hidden md:flex border-4 border-Swan rounded-3xl w-full h-full py-4 flex-col">
                <div className="pb-4 flex justify-end px-6">
                    <button onClick={() => setIsChatOpen(false)}>
                        <img src={CloseRound} alt="Close" className="w-8 h-8"/>
                    </button>
                </div>
                <ChatMessages messages={messages}/>
                <ChatInput newMessage={newMessage} setNewMessage={setNewMessage} sendMessage={sendMessage}/>
            </div>

            <div className="flex md:hidden w-full h-full flex-col py-4">
                <div className="pb-4 flex justify-end px-6">
                    <button onClick={() => setIsChatOpen(false)}>
                        <img src={CloseRound} alt="Close" className="w-8 h-8" />
                    </button>
                </div>
                <ChatMessages messages={messages} />
                <ChatInput newMessage={newMessage} setNewMessage={setNewMessage} sendMessage={sendMessage} />
            </div>
        </>
    )
}
