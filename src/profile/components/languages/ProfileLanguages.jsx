import EditIcon from "../../../assets/icons/Edit.svg";
import LanguagesEdit from "./LanguagesEdit.jsx";
import LanguagesCreate from "./LanguagesCreate.jsx";

export default function ProfileLanguages({ languages }) {
    return (
        <>
            <LanguagesEdit value={languages} isOpen={false} />
            <LanguagesCreate isOpen={false} />
            <div className="p-8 flex flex-col gap-2">
                <div className="w-full flex justify-between">
                    <h2 className="text-xl font-semibold">Jezici</h2>
                    <button>
                        <img src={EditIcon} alt="Edit"/>
                    </button>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-base rounded-xl">
                        Engleski
                    </div>
                    <div className="font-semibold text-base rounded-xl">
                        Njemački
                    </div>
                </div>
            </div>
        </>
    )
}