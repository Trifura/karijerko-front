import {useSelector} from "react-redux";

export default function UserMessage({message}) {

    const {account} = useSelector(state => state.auth);
    return (
        <div className="flex gap-1.5 w-full justify-end">
            <div className="text-base font-medium px-5 py-3 rounded-l-3xl rounded-b-3xl bg-Primary text-white whitespace-pre-wrap">
                {message}
            </div>
            <div className="flex-none">
                <img src={account.profilePicture}
                     alt="User"
                     className="w-10 h-10 rounded-full border border-Swan"
                />
            </div>
        </div>
    )
}
