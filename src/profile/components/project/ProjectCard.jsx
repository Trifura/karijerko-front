import EditIcon from "../../../assets/icons/Edit.svg";
import DeleteIcon from "../../../assets/icons/Delete.svg";

import ProjectEdit from "./ProjectEdit.jsx";
import {useState} from "react";
import ConfirmDialog from "../../../core/components/ConfirmDialog.jsx";
import ProjectView from "./ProjectView.jsx";

export default function ProjectCard({ project, onSave, onDelete, isPublic, color}) {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isViewing, setIsViewing] = useState(false);

    const onProjectSave = async (editedProject) => {
        await onSave(editedProject);
        setIsEditing(false);
    }

    const removeProject = async () => {
        await onDelete(project);
        setIsDeleteOpen(false);
    }

    const viewProject = () => {
        if (isPublic) setIsViewing(true);
    }

    const getInitials = (name) => {
        if (!name) return '';

        // Split the name by spaces
        const nameParts = name.trim().split(/\s+/);

        // Extract initials, maximum 3 letters
        let initials = '';
        for (let i = 0; i < nameParts.length; i++) {
            initials += nameParts[i].charAt(0).toUpperCase();
            if (initials.length >= 3) break;
        }

        return initials;
    }

    return (
        <>
            <ProjectEdit value={project} isOpen={isEditing} onCancel={() => setIsEditing(false)} onConfirm={onProjectSave} />
            <ProjectView value={project} isOpen={isViewing} onCancel={() => setIsViewing(false)} />
            <ConfirmDialog
                isOpen={isDeleteOpen}
                text="Jeste li sigurni da želite obrisati ovaj projekt?"
                onConfirm={removeProject} onCancel={() => setIsDeleteOpen(false)}
            />
            <div className={`w-[150px] lg:w-[170px] relative group ${isPublic && 'cursor-pointer'}`} onClick={viewProject}>
                <div className={`border border-Swan rounded-2xl p-4 relative overflow-hidden text-white font-bold text-7xl flex items-center justify-center h-40 ${color}`}>
                    { getInitials(project.title) }
                    <div
                        className="absolute inset-0 bg-black opacity-20 lg:opacity-0 lg:group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
                    <div
                        className="absolute inset-0 flex items-center justify-center space-x-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
                    >
                        {
                            !isPublic && (
                                <>
                                    <button onClick={() => setIsEditing(true)}>
                                        <img src={EditIcon} alt="Edit"/>
                                    </button>
                                    <button onClick={() => setIsDeleteOpen(true)}>
                                        <img src={DeleteIcon} alt="Delete"/>
                                    </button>
                                </>
                            )
                        }
                    </div>
                </div>
                <p className="text-center font-semibold overflow-hidden text-ellipsis">{project.title}</p>
            </div>
        </>
    )
}