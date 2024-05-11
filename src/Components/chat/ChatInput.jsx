import Send from "../../assets/icons/Send.svg";

export default function ChatInput({ newMessage, setNewMessage, sendMessage }) {
    return (
        <div className="pt-3 px-5">
            <div className="w-full border-2 border-Swan rounded-xl px-5 py-3 flex gap-2">
                <input
                    value={newMessage}
                    type="text"
                    placeholder="Napiši poruku..."
                    className="w-full focus:outline-none"
                    onChange={e => setNewMessage(e.target.value)}
                    onKeyDown={sendMessage}
                />
                <button onClick={sendMessage}>
                    <img src={Send} alt="Send" className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
