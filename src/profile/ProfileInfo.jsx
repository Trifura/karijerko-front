import EditIcon from "../assets/icons/Edit.svg";

export default function ProfileInfo() {
    return (
        <div className="flex flex-col gap-6 lg:p-8 w-full">
            <div className="flex w-full justify-between">
                <h2 className="text-2xl font-semibold">Front-end developer</h2>
                <button>
                    <img src={EditIcon} alt="Edit"/>
                </button>
            </div>
            <p>
                I am a Full stack developer with real project experience in Frontend (VueJs, Reactjs)
                and
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Backend (ExpressJs, Graphql). In my 3 years of experience I've learned a lot about
                NodeJs
                and how the web works. I started to work at a really young age because I found a passion
                for
                programming.
            </p>
        </div>
    )
}