import MentorMessage from "./MentorMessage.jsx";
import UserMessage from "./UserMessage.jsx";

export default function ChatMessages({ messages }) {
    return (
        <div className="flex flex-col gap-2 flex-grow overflow-y-auto px-5 pb-2 overscroll-none">
            {messages.map((message, index) => {
                return message.type === 'mentor'
                    ? <MentorMessage key={index} message={message.message} />
                    : <UserMessage key={index} message={message.message} />;
            })}
        </div>
    );
}