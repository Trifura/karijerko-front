import AddIcon from "../../../assets/icons/Add.svg";
import ProjectCard from "../project/ProjectCard.jsx";
import projectService from "../../services/project.js";


export default function ProfilePortfolio({ projects, setProjects }) {

    const saveProject = async (project) => {
        const contents = await Promise.all(project.contents.map((content) => projectService.formatContent(content)));

        const data = await projectService.edit({ ...project, contents });

        const newProjects = projects.map((p) => p.id === data.id ? data: p);

        setProjects(newProjects);
    }

    const deleteProject = async (project) => {
        const data = await projectService.remove(project.id)

        const newProjects = projects.filter((p) => p.id !== data.id);

        setProjects(newProjects);
    }

    return (
        <div className="p-8 flex flex-col gap-6 w-full">
            <div className="flex w-full justify-between">
                <h2 className="text-2xl font-semibold lg:font-medium">Portfolio</h2>
                <button>
                    <img src={AddIcon} alt="Add"/>
                </button>
            </div>
            <div className="flex flex-wrap lg:justify-between gap-1 lg:gap-6">
                {
                    projects.map((project) => (<ProjectCard key={project.id} project={project} onSave={saveProject} onDelete={deleteProject} />))
                }
            </div>
        </div>
    )
}