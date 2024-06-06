import DialogWrapper from "../../../core/components/DialogWrapper.jsx";
import Select from "react-select";
import {useState} from "react";

const proficiencyOptions = [
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' },
    { value: 'Native', label: 'Native' }
];

const languageOptions = [
    { value: 'English', label: 'Engleski' },
    { value: 'Spanish', label: 'Španjolski' },
    { value: 'French', label: 'Francuski' },
    { value: 'German', label: 'Njemački' },
    // Add more languages as needed
];

export default function LanguagesCreate({ isOpen, onCancel, onConfirm }) {
    const [newLanguage, setNewLanguage] = useState({ name: '', proficiency: 'Beginner' });

    const handleNewLanguageChange = (field, value) => {
        setNewLanguage({ ...newLanguage, [field]: value });
    };

    return (
        <DialogWrapper title="Dodaj jezik" isOpen={isOpen} onConfirm={onConfirm} onCancel={onCancel} confirmText="Dodaj">
            <div className="space-y-4">
                <Select
                    className="w-full font-semibold"
                    value={languageOptions.find(option => option.value === newLanguage.name)}
                    onChange={(selectedOption) => handleNewLanguageChange('name', selectedOption.value)}
                    options={languageOptions}
                    placeholder="Pretraži jezik"
                />
                <Select
                    className="w-full font-semibold"
                    value={proficiencyOptions.find(option => option.value === newLanguage.proficiency)}
                    onChange={(selectedOption) => handleNewLanguageChange('proficiency', selectedOption.value)}
                    options={proficiencyOptions}
                    isSearchable={false}
                />
            </div>
        </DialogWrapper>
    )
}