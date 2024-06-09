import AddIcon from "../../../assets/icons/Add.svg";
import EditIcon from "../../../assets/icons/Edit.svg";
import DeleteIcon from "../../../assets/icons/Delete.svg";
import EducationEdit from "./EducatonEdit.jsx";
import EducationCreate from "./EducationCreate.jsx";
import {useState} from "react";

import educationService from "../../services/education.js";
import ConfirmDialog from "../../../core/components/ConfirmDialog.jsx";

export default function ProfileEducation({ educations, setEducations }) {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedEducation, setSelectedEducation] = useState(null);

    const openEdit = (education) => {
        setSelectedEducation(education);
        setIsEditOpen(true);
    }

    const saveEducation = async (education) => {
        const newEducation = await educationService.edit(education);

        setEducations(educations.map((e) => e.id === newEducation.id ? newEducation : e));

        setIsEditOpen(false);
        setSelectedEducation(null)
    }

    const createEducation = async (education) => {
        const newEducation = await educationService.create(education);

        setEducations([...educations, newEducation]);

        setIsCreateOpen(false);
    }

    const openDelete = (education) => {
        setSelectedEducation(education);
        setIsDeleteOpen(true);
    }

    const removeEducation = async () => {
        await educationService.remove(selectedEducation.id);

        setEducations(educations.filter((e) => e.id !== selectedEducation.id));

        setIsDeleteOpen(false);
        setSelectedEducation(null);
    }

    return (
        <>
            <EducationEdit
                value={selectedEducation}
                isOpen={isEditOpen}
                onConfirm={saveEducation}
                onCancel={() => setIsEditOpen(false)}
            />

            <EducationCreate
                isOpen={isCreateOpen}
                onConfirm={createEducation}
                onCancel={() => setIsCreateOpen(false)}
            />

            <ConfirmDialog
                isOpen={isDeleteOpen}
                text="Jeste li sigurni da želite obrisati ovu edukaciju?"
                onConfirm={removeEducation} onCancel={() => setIsDeleteOpen(false)}
            />

            <div className="p-8 flex flex-col gap-8">
                <div className="w-full flex justify-between">
                    <h2 className="text-xl font-semibold">Obrazovanje</h2>
                    <button onClick={() => setIsCreateOpen(true)}>
                        <img src={AddIcon} alt="Add"/>
                    </button>
                </div>
                <div className="flex flex-col gap-5">
                    {
                        educations.map((education) => (
                            <div key={education.id}>
                                <div className="flex gap-5 justify-between items-start">
                                    <h3 className="text-xl font-semibold">{education.institution}</h3>
                                    <div className="flex flex-none gap-2">
                                        <button className="w-8 flex-none" onClick={() => openEdit(education)}>
                                            <img src={EditIcon} alt="Edit"/>
                                        </button>
                                        <button className="w-8 flex-none" onClick={() => openDelete(education)}>
                                            <img src={DeleteIcon} alt="Delete"/>
                                        </button>
                                    </div>
                                </div>
                                <p className="text-Ironside font-medium">{education.degree}</p>
                                <p className="text-Ironside font-medium">{education.startYear} - {education.endYear}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}