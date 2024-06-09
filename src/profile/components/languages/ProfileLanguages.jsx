import EditIcon from "../../../assets/icons/Edit.svg";
import AddIcon from "../../../assets/icons/Add.svg";
import LanguagesEdit from "./LanguagesEdit.jsx";
import LanguagesCreate from "./LanguagesCreate.jsx";
import {useState} from "react";
import userLanguageService from "../../services/userLanguage.js";
import { proficiencyOptions } from "../../../core/constants/Language.js";

export default function ProfileLanguages({ userLanguages, setUserLanguages }) {
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isCreateOpen, setIsCreateOpen] = useState(false)

    const saveLanguages = async (userLanguages) => {

        const updatedUserLanguages = await Promise.all(userLanguages.map(userLanguage =>  userLanguageService.edit(userLanguage)))

        setUserLanguages(updatedUserLanguages)
        setIsEditOpen(false)
    }

    const getProficiencyLabel = (proficiency) => {
        return proficiencyOptions.find(option => option.value === proficiency)?.label
    }

    return (
        <>
            <LanguagesEdit value={userLanguages} isOpen={isEditOpen} onConfirm={saveLanguages} onCancel={() => setIsEditOpen(false)} />
            <LanguagesCreate isOpen={isCreateOpen} />
            <div className="p-8 flex flex-col gap-2">
                <div className="w-full flex justify-between">
                    <h2 className="text-xl font-semibold">Jezici</h2>
                    <div className="flex gap-4">
                        <button onClick={() => setIsEditOpen(true)}>
                            <img src={EditIcon} alt="Edit"/>
                        </button>
                        <button onClick={() => setIsCreateOpen(true)}>
                            <img src={AddIcon} alt="Add"/>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    {
                        userLanguages.map((userLanguage) => (
                            <div className="flex gap-1" key={userLanguage.id}>
                                <span className="font-semibold text-base">
                                    {userLanguage.language.name}:
                                </span>
                                <span className="font-medium text-Ironside">
                                    {getProficiencyLabel(userLanguage.proficiency)}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}