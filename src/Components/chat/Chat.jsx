import MentorMessage from "./MentorMessage.jsx";
import UserMessage from "./UserMessage.jsx";
import Send from "../../assets/icons/Send.svg";
import Close_round from "../../assets/icons/Close_round.svg";
import {useState} from "react";
export default function Chat({messages, addMessage, setIsChatOpen}) {
    const [newMessage, setNewMessage] = useState('')

    const sendMessage = (event) => {
        if (event.key && event.key !== 'Enter') {
            return
        }

        if (!newMessage) return

        addMessage(newMessage)
        setNewMessage('')
    }

    return (
        <>
            <div className="hidden lg:flex border-4 border-neutral-200 rounded-3xl w-full h-full py-4 flex-col">
                <div className="flex flex-col gap-2 flex-grow overflow-y-auto px-5 pb-2 overscroll-none">
                    {
                        messages.map((message, index) => {
                            if (message.type === 'mentor') {
                                return <MentorMessage key={index} message={message.message} />
                            } else {
                                return <UserMessage key={index} message={message.message} />
                            }
                        })
                    }
                </div>
                <div className="pt-3 px-5">
                    <div className="w-full border-2 border-neutral-200 rounded-xl px-5 py-3 flex gap-2">
                        <input
                            value={newMessage}
                            type="text"
                            placeholder="Napiši poruku..."
                            className="w-full focus:outline-none"
                            onChange={e => setNewMessage(e.target.value)}
                            onKeyDown={sendMessage}
                        />
                        <button onClick={sendMessage}>
                            <img src={Send} alt="Send" className="w-6 h-6"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex lg:hidden w-full h-full flex-col py-4">
                <div className="pb-4 flex justify-end px-6">
                    <button onClick={() => {setIsChatOpen(false)}}>
                        <img src={Close_round} alt="" className="w-8 h-8"/>
                    </button>
                </div>
                <div className="flex flex-col gap-2 flex-grow overflow-y-auto px-5 pb-2 overscroll-none">
                    {
                        messages.map((message, index) => {
                            if (message.type === 'mentor') {
                                return <MentorMessage key={index} message={message.message} />
                            } else {
                                return <UserMessage key={index} message={message.message} />
                            }
                        })
                    }
                </div>
                <div className="pt-3 px-5">
                    <div className="w-full border-2 border-neutral-200 rounded-xl px-5 py-3 flex gap-2">
                        <input
                            value={newMessage}
                            type="text"
                            placeholder="Napiši poruku..."
                            className="w-full focus:outline-none"
                            onChange={e => setNewMessage(e.target.value)}
                            onKeyDown={sendMessage}
                        />
                        <button onClick={sendMessage}>
                            <img src={Send} alt="Send" className="w-6 h-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}
