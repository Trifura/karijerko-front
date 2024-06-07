import EditIcon from "../../assets/icons/Edit.svg";
import ProfileEdit from "./ProfileEdit.jsx";
import {useProfileDialogs} from "../hooks/useProfileDialogs.js";

export default function ProfileInfo({ profile, setProfile }) {
    const { isEditOpen, openEdit, closeEdit } = useProfileDialogs();

    const saveProfile = (newProfile) => {
        setProfile(newProfile);
        closeEdit();
    }

    return (
        <>
            <ProfileEdit value={profile} isOpen={isEditOpen} onCancel={closeEdit} onConfirm={saveProfile} />
            <div className="flex flex-col gap-6 lg:p-8 w-full">
                <div className="flex w-full justify-between">
                    <h2 className="text-2xl font-semibold">{profile.name}</h2>
                    <button onClick={openEdit}>
                        <img src={EditIcon} alt="Edit"/>
                    </button>
                </div>
                <p>{profile.description}</p>
            </div>
        </>
    )
}