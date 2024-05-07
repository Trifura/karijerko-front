import LogoShort from "../../assets/Logo_short.svg";

export default function MentorMessage({message}) {
    return (
        <div className="flex gap-1.5">
            <div className="flex-none">
                <img src={LogoShort}
                     alt="Karijerko"
                     className="w-10 h-10 rounded-full border border-neutral-200 p-2"
                />
            </div>
            <div className="text-base font-medium px-5 py-3 border-2 border-neutral-200 rounded-r-3xl rounded-b-3xl whitespace-pre-wrap">
                {message}
            </div>
        </div>
    )
}
