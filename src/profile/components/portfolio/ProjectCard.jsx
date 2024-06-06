import EditIcon from "../../../assets/icons/Edit.svg";
import DeleteIcon from "../../../assets/icons/Delete.svg";
import ProjectEdit from "./ProjectEdit.jsx";
import {useState} from "react";

export default function ProjectCard({ project, onSave, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);

    const onProjectSave = (project) => {
        onSave(project);
        setIsEditing(false);
    }

    return (
        <>
            <ProjectEdit value={project} isOpen={isEditing} onCancel={() => setIsEditing(false)} onConfirm={onProjectSave} />
            <div className="w-[150px] lg:w-[170px] relative group">
                <div className="border border-Swan rounded-2xl p-4 relative overflow-hidden ">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                        alt="Portfolio"/>
                    <div
                        className="absolute inset-0 bg-black opacity-20 lg:opacity-0 lg:group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
                    <div
                        className="absolute inset-0 flex items-center justify-center space-x-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                        <button onClick={() => setIsEditing(true)}>
                            <img src={EditIcon} alt="Edit"/>
                        </button>
                        <button onClick={onDelete}>
                            <img src={DeleteIcon} alt="Delete"/>
                        </button>
                    </div>
                </div>
                <p className="text-center font-semibold">Github profil</p>
            </div>
        </>
    )
}