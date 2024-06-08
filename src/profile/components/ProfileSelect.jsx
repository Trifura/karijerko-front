import AddIcon from "../../assets/icons/Add.svg";
import Select from "react-select";
import ProfileCreate from "./ProfileCreate.jsx";
import {useProfileDialogs} from "../hooks/useProfileDialogs.js";

export default function ProfileSelect({ value, options, onSelect, createProfile }) {
    const { isCreateOpen, openCreate, closeCreate } = useProfileDialogs();

    const onConfirmCreate = async (profile) => {
        await createProfile(profile)
        closeCreate()
    }
    return (
        <>
        <ProfileCreate isOpen={isCreateOpen} onCancel={closeCreate} onConfirm={onConfirmCreate} />
            <div className="lg:p-8 flex flex-col gap-2 lg:gap-4">
                <div className="w-full flex justify-between">
                    <h2 className="text-xl font-semibold">Profili</h2>
                    <button onClick={openCreate}>
                        <img src={AddIcon} alt="Add"/>
                    </button>
                </div>
                <div className="lg:hidden">
                    <Select
                        value={value}
                        onChange={(option) => onSelect(option.id)}
                        options={options}
                        isSearchable={false}
                        getOptionValue={(option) => `${option['id']}`}
                        getOptionLabel={(option) => `${option['name']}`}
                    />
                </div>
                <div className="hidden lg:flex flex-col">
                    {
                        options.map((option, index) => (
                            <div
                                key={index}
                                className={`px-4 py-2 font-bold text-base rounded-xl cursor-pointer ${option.id === value.id ? 'bg-Primary text-white' : ''}`}
                                onClick={() => onSelect(option.id)}
                            >
                                {option.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}