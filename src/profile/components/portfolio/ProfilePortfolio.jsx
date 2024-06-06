import AddIcon from "../../../assets/icons/Add.svg";
import ProjectCard from "./ProjectCard.jsx";

export default function ProfilePortfolio({ projects }) {
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
                    projects.map((project) => (<ProjectCard key={project.id} project={project} />))
                }
            </div>
        </div>
    )
}