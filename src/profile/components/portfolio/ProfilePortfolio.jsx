import AddIcon from "../../../assets/icons/Add.svg";
import ProjectCard from "../project/ProjectCard.jsx";
import projectService from "../../services/project.js";
import ProjectEdit from "../project/ProjectEdit.jsx";
import {useState} from "react";


export default function ProfilePortfolio({ profile, projects, setProjects }) {
    const [isCreating, setIsCreating] = useState(false);

    const saveProject = async (project) => {
        const contents = await Promise.all(project.contents.map((content) => projectService.formatContent(content)));

        const data = await projectService.edit({ ...project, contents, profileId: profile.id });

        const newProjects = projects.map((p) => p.id === data.id ? data : p);

        setProjects(newProjects);
    }

    const deleteProject = async (project) => {
        const data = await projectService.remove(project.id)

        const newProjects = projects.filter((p) => p.id !== data.id);

        setProjects(newProjects);
    }

    const createProject = async (project) => {
        const contents = await Promise.all(project.contents.map((content) => projectService.formatContent(content)));

        const data = await projectService.create({ ...project, contents, profileId: profile.id });

        setProjects([...projects, data]);

        setIsCreating(false)
    }

    return (
        <>
            <ProjectEdit isOpen={isCreating} onCancel={() => setIsCreating(false)} onConfirm={createProject}  />
            <div className="p-8 flex flex-col gap-6 w-full">
                <div className="flex w-full justify-between">
                    <h2 className="text-2xl font-semibold lg:font-medium">Portfolio</h2>
                    <button onClick={() => setIsCreating(true)}>
                        <img src={AddIcon} alt="Add"/>
                    </button>
                </div>
                <div className="flex flex-wrap justify-between lg:justify-start gap-2 lg:gap-6">
                    {
                        projects.map((project) => (<ProjectCard key={project.id} project={project} onSave={saveProject} onDelete={deleteProject} />))
                    }
                    {
                        !projects.length && (
                            <p className="text-center w-full text-Ironside font-medium">
                                Trenutno nemate projekte u portfoliu
                            </p>
                        )
                    }
                </div>
            </div>
        </>
    )
}