import AddIcon from "../../assets/icons/Add.svg";
import EditIcon from "../../assets/icons/Edit.svg";
import DeleteIcon from "../../assets/icons/Delete.svg";

export default function ProfilePortfolio() {
    return (
        <div className="p-8 flex flex-col gap-6 w-full">
            <div className="flex w-full justify-between">
                <h2 className="text-2xl font-semibold lg:font-medium">Portfolio</h2>
                <button>
                    <img src={AddIcon} alt="Add"/>
                </button>
            </div>
            <div className="flex flex-wrap lg:justify-between gap-1 lg:gap-6">
                <div className="w-[150px] lg:w-[170px] relative group">
                    <div className="border border-Swan rounded-2xl p-4 relative overflow-hidden ">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                            alt="Portfolio"/>
                        <div className="absolute inset-0 bg-black opacity-20 lg:opacity-0 lg:group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
                        <div
                            className="absolute inset-0 flex items-center justify-center space-x-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                            <button>
                                <img src={EditIcon} alt="Edit"/>
                            </button>
                            <button>
                                <img src={DeleteIcon} alt="Delete"/>
                            </button>
                        </div>
                    </div>
                    <p className="text-center font-semibold">Github profil</p>
                </div>
            </div>
        </div>
    )
}