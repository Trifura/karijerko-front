import MentorMessage from "./MentorMessage.jsx";
import UserMessage from "./UserMessage.jsx";
import Send from "../../assets/icons/Send.svg";
import {useState} from "react";
export default function Chat({messages, addMessage}) {
    const [newMessage, setNewMessage] = useState('')

    const sendMessage = (event) => {
        if (event.key && event.key !== 'Enter') {
            return
        }
        addMessage(newMessage)
        setNewMessage('')
    }

    return (
        <div className="border-4 border-neutral-200 rounded-3xl w-full h-full py-4 flex flex-col">
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
    )
}
