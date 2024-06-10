import EditIcon from "../../../assets/icons/Edit.svg";
import DeleteIcon from "../../../assets/icons/Delete.svg";
import VisibilityIcon from "../../../assets/icons/Visibility.svg";

import ProjectEdit from "./ProjectEdit.jsx";
import {useState} from "react";
import ConfirmDialog from "../../../core/components/ConfirmDialog.jsx";
import ProjectView from "./ProjectView.jsx";

export default function ProjectCard({ project, onSave, onDelete, isPublic }) {
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
                <div className="border border-Swan rounded-2xl p-4 relative overflow-hidden ">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                        alt="Portfolio"/>
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