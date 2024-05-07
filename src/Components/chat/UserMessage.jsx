export default function UserMessage({message}) {
    return (
        <div className="flex gap-1.5 w-full justify-end">
            <div className="text-base font-medium px-5 py-3 rounded-l-3xl rounded-b-3xl bg-[#58CC02] text-white whitespace-pre-wrap">
                {message}
            </div>
            <div className="flex-none">
                <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1943470099.1714064712&semt=ais"
                     alt="User"
                     className="w-10 h-10 rounded-full border border-neutral-200"
                />
            </div>
        </div>
    )
}
