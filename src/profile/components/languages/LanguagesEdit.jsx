import DialogWrapper from "../../../core/components/DialogWrapper.jsx";
import {useEffect, useState} from "react";
import Select from "react-select";
import { proficiencyOptions } from "../../../core/constants/Language.js";

export default function LanguagesEdit({ value, isOpen, onCancel, onConfirm }) {
    const [userLanguages, setUserLanguages] = useState([]);

    useEffect(() => {
        if (isOpen) setUserLanguages(value);
    }, [isOpen]);

    const handleDelete = (index) => {
        const updatedLanguages = userLanguages.filter((_, i) => i !== index);
        setUserLanguages(updatedLanguages);
    };

    const handleProficiencyChange = (selectedOption, index) => {
        const updatedUserLanguages = userLanguages.map((userLanguage, i) =>
            i === index ? { ...userLanguage, proficiency: selectedOption.value } : userLanguage
        );
        setUserLanguages(updatedUserLanguages);
    };

    return (
        <DialogWrapper title="Uredi jezike" isOpen={isOpen} onConfirm={() => onConfirm(userLanguages)} onCancel={onCancel}>
            <div className="flex flex-col gap-2">
                {userLanguages.length === 0 && <p className="text-center font-semibold">Nemate unesenih jezika</p>}
                {userLanguages.map((userLanguage, index) => (
                    <div key={userLanguage.id} className="flex items-center space-x-4">
                        <span className="w-1/3 font-semibold bg-Swan border-Hare border-2 cursor-not-allowed rounded-lg py-1.5 px-4">
                            {userLanguage.language.name}
                        </span>
                        <Select
                            className="w-full"
                            value={proficiencyOptions.find(option => option.value === userLanguage.proficiency)}
                            onChange={(selectedOption) => handleProficiencyChange(selectedOption, index)}
                            options={proficiencyOptions}
                        />
                        <button
                            className="text-white px-2 py-1 rounded"
                            onClick={() => handleDelete(index)}
                        >
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="14.75" stroke="#FF4B4B" strokeWidth="2.5"/>
                                <path
                                    d="M11.6667 20.6667C11.6667 21.4 12.2667 22 13 22H18.3333C19.0667 22 19.6667 21.4 19.6667 20.6667V14C19.6667 13.2667 19.0667 12.6667 18.3333 12.6667H13C12.2667 12.6667 11.6667 13.2667 11.6667 14V20.6667ZM19.6667 10.6667H18L17.5267 10.1933C17.4067 10.0733 17.2333 10 17.06 10H14.2733C14.1 10 13.9267 10.0733 13.8067 10.1933L13.3333 10.6667H11.6667C11.3 10.6667 11 10.9667 11 11.3333C11 11.7 11.3 12 11.6667 12H19.6667C20.0333 12 20.3333 11.7 20.3333 11.3333C20.3333 10.9667 20.0333 10.6667 19.6667 10.6667Z"
                                    fill="#FF4B4B"/>
                            </svg>

                        </button>
                    </div>
                ))}
            </div>
        </DialogWrapper>
    )
}