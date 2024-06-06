import EditIcon from "../assets/icons/Edit.svg";
import Select from "react-select";

export default function ProfileSelect({ value, options, onSelect }) {
    return (
        <>
            <div className="hidden p-8 lg:flex flex-col gap-4">
                <div className="w-full flex justify-between">
                    <h2 className="text-xl font-semibold">Profili</h2>
                    <button>
                        <img src={EditIcon} alt="Edit"/>
                    </button>
                </div>
                <div className="flex flex-col">
                    {
                        options.map((option, index) => (
                            <div
                                key={index}
                                className={`px-4 py-2 font-bold text-base rounded-xl cursor-pointer ${option.value === value ? 'bg-Primary text-white' : '' }`}
                                onClick={() => onSelect(option.value)}
                            >
                                {option.label}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="lg:hidden flex flex-col gap-2">
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">Profili</h2>
                    <button>
                        <img src={EditIcon} alt="Edit"/>
                    </button>
                </div>
                <div>
                    <Select
                        value={value}
                        onChange={onSelect}
                        options={options}
                        isSearchable={false}
                    />
                </div>
            </div>
        </>
    )
}