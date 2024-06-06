import AddIcon from "../../assets/icons/Add.svg";
import EditIcon from "../../assets/icons/Edit.svg";
import DeleteIcon from "../../assets/icons/Delete.svg";

export default function ProfileEducation() {
    return (
        <div className="p-8 flex flex-col gap-8">
            <div className="w-full flex justify-between">
                <h2 className="text-xl font-semibold">Obrazovanje</h2>
                <button>
                    <img src={AddIcon} alt="Add"/>
                </button>
            </div>
            <div className="flex flex-col gap-5">
                <div>
                    <div className="flex gap-5 items-start">
                        <h3 className="text-xl font-semibold">Elektrotehnička i prometna škola
                            Osijek</h3>
                        <div className="flex gap-2">
                            <button className="w-8 flex-none">
                                <img src={EditIcon} alt="Edit"/>
                            </button>
                            <button className="w-8 flex-none">
                                <img src={DeleteIcon} alt="Delete"/>
                            </button>
                        </div>
                    </div>
                    <p className="text-Ironside font-medium">Tehničar za računalstvo</p>
                    <p className="text-Ironside font-medium">2018 - 2022</p>
                </div>
                <div>
                    <div className="flex gap-5 items-start">
                        <h3 className="text-xl font-semibold">Tehničko veleučilište u Zagrebu</h3>
                        <div className="flex gap-2">
                            <button className="w-8 flex-none">
                                <img src={EditIcon} alt="Edit"/>
                            </button>
                            <button className="w-8 flex-none">
                                <img src={DeleteIcon} alt="Delete"/>
                            </button>
                        </div>
                    </div>
                    <p className="text-Ironside font-medium">Informatika</p>
                    <p className="text-Ironside font-medium">2022 - 2025</p>
                </div>
            </div>
        </div>
    )
}