import EditIcon from "../../assets/icons/Edit.svg";
import DeleteIcon from "../../assets/icons/Delete.svg";
import ProfileEdit from "./ProfileEdit.jsx";
import {useProfileDialogs} from "../hooks/useProfileDialogs.js";
import ConfirmDialog from "../../core/components/ConfirmDialog.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {remove} from "../store/actions.js";

export default function ProfileInfo({ profile, setProfile, setSelectedProfileId, profiles }) {
    const dispatch = useDispatch()
    const { isEditOpen, openEdit, closeEdit } = useProfileDialogs();

    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const saveProfile = (newProfile) => {
        setProfile(newProfile);
        closeEdit();
    }

    const openRemove = () => {
        setIsDeleteOpen(true)
    }

    const removeProfile = () => {
        dispatch(remove(profile.id))
        setIsDeleteOpen(false);
        setSelectedProfileId(profiles[0].id);
    }

    return (
        <>
            <ProfileEdit value={profile} isOpen={isEditOpen} onCancel={closeEdit} onConfirm={saveProfile} />
            <ConfirmDialog
                isOpen={isDeleteOpen}
                text="Jeste li sigurni da želite obrisati ovaj profil?"
                onConfirm={removeProfile} onCancel={() => setIsDeleteOpen(false)}
            />
            <div className="flex flex-col gap-6 lg:p-8 w-full">
                <div className="flex w-full justify-between">
                    <h2 className="text-2xl font-semibold lg:font-medium">{profile.name}</h2>
                    <div className="flex gap-4">
                        <button onClick={openEdit}>
                            <img src={EditIcon} alt="Edit"/>
                        </button>
                        <button onClick={openRemove}>
                            <img src={DeleteIcon} alt="Delete"/>
                        </button>
                    </div>
                </div>
                <p>{profile.description}</p>
            </div>
        </>
    )
}