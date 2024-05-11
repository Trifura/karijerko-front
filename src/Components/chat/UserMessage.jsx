import ChatAvatar from "../../assets/ChatAvatar.avif";
export default function UserMessage({message}) {
    return (
        <div className="flex gap-1.5 w-full justify-end">
            <div className="text-base font-medium px-5 py-3 rounded-l-3xl rounded-b-3xl bg-Primary text-white whitespace-pre-wrap">
                {message}
            </div>
            <div className="flex-none">
                <img src={ChatAvatar}
                     alt="User"
                     className="w-10 h-10 rounded-full border border-Swan"
                />
            </div>
        </div>
    )
}
