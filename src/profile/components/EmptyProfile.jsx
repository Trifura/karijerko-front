import Navbar from "../../core/components/Navbar.jsx";
import ProfileCreate from "./ProfileCreate.jsx";
import UserInfo from "./UserInfo.jsx";
import {useProfileDialogs} from "../hooks/useProfileDialogs.js";

export default function EmptyProfile({ user, createProfile }) {
    const { isCreateOpen, openCreate, closeCreate } = useProfileDialogs();

    const onConfirmCreate = async (profile) => {
        createProfile(profile)
        closeCreate()
    }

    return (
        <>
            <Navbar/>
            <ProfileCreate isOpen={isCreateOpen} onCancel={closeCreate} onConfirm={onConfirmCreate} />
            <div className="border-2 border-Swan rounded-2xl mt-28 lg:mt-32 mb-10 pb-10 max-w-5xl mx-auto">
                <UserInfo user={user}/>
                <hr className="border-Swan"/>
                <div className="h-full mt-10 flex flex-col gap-10 items-center">
                    <h2 className="font-bold text-2xl lg:text-3xl">Napravi svoj prvi profil</h2>
                    <button
                        className="bg-Primary hover:bg-PrimaryDark text-8xl font-bold text-white rounded-3xl px-10 py-5 flex items-center justify-center"
                        onClick={openCreate}
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    )
}