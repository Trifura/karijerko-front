import EditIcon from "../../assets/icons/Edit.svg";
import DeleteIcon from "../../assets/icons/Delete.svg";
import ProfileEdit from "./ProfileEdit.jsx";
import {useProfileDialogs} from "../hooks/useProfileDialogs.js";
import ConfirmDialog from "../../core/components/ConfirmDialog.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {edit, remove} from "../store/actions.js";

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

    const removeProfile = async () => {
        await dispatch(remove(profile.id));

        const newSelection = profiles.find(p => p.id !== profile.id);

        setSelectedProfileId(newSelection?.id);

        setIsDeleteOpen(false)
    }

    const setPrimary = async () => {
        const oldPrimary = profiles.find(p => p.isPrimary);

        if (oldPrimary) {
            await dispatch(edit({...oldPrimary, isPrimary: false}));
        }

        const { payload } = await dispatch(edit({...profile, isPrimary: true}));

        setProfile(payload);
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
                <div className="flex flex-col lg:flex-row w-full gap-5 justify-between">
                    <div className="flex gap-4 lg:gap-5 items-center order-2 lg:order-1">
                        <h2 className="text-2xl font-semibold lg:font-medium lg:max-w-xs overflow-hidden text-ellipsis">{profile.name}</h2>
                    </div>
                    <div className="flex gap-4 flex-none order-1 lg:order-2 ml-auto lg:ml-0">
                        <div className="flex items-center">
                            {
                                profile.isPrimary
                                    ? (
                                        <p className="text-white bg-Sapphire text-xs border-2 border-Sapphire font-bold px-4 py-0.5 rounded-full">
                                            Primaran
                                        </p>
                                    )
                                    : (
                                        <button
                                            className="text-Sapphire font-bold text-xs border-2 border-Sapphire px-4 py-0.5 rounded-full"
                                            onClick={setPrimary}
                                        >
                                            Postavi primarni
                                        </button>
                                    )
                            }
                        </div>

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