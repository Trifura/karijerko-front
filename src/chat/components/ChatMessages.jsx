import MentorMessage from "./MentorMessage.jsx";
import UserMessage from "./UserMessage.jsx";

export default function ChatMessages({ messages, isTyping }) {
    const typingMessage = <div className='flex space-x-1 mr-1 mt-1 justify-center items-center'>
        <span className='sr-only'>Loading...</span>
        <div className='h-2 w-2 bg-Hare rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-2 w-2 bg-Hare rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-2 w-2 bg-Hare rounded-full animate-bounce'></div>
    </div>

    return (
        <div className="flex flex-col gap-2 flex-grow overflow-y-auto px-5 pb-2 overscroll-none">
            {messages.map((message, index) => {
                return message.role === 'assistant'
                    ? <MentorMessage key={index} message={message.content}/>
                    : <UserMessage key={index} message={message.content}/>;
            })}

            {isTyping && <MentorMessage message={typingMessage} />}
        </div>
    );
}
