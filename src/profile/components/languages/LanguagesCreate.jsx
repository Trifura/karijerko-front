import DialogWrapper from "../../../core/components/DialogWrapper.jsx";
import Select from "react-select";
import {useEffect, useState} from "react";

import { proficiencyOptions } from "../../../core/constants/Language.js";
import AsyncSelect from "react-select/async";
import debounce from "debounce";
import languageService from "../../../core/services/language.js";

export default function LanguagesCreate({ isOpen, onCancel, onConfirm }) {
    const [language, setLanguage] = useState();
    const [proficiency, setProficiency] = useState('beginner');

    useEffect(() => {
        if (isOpen) {
            setLanguage(null);
            setProficiency('beginner');
        }
    }, [isOpen]);

    const debouncedFetchLanguages = debounce((search, callback) => {
        languageService.fetch(search).then((result) => callback(result))
    }, 500);

    const createLanguage = () => {
        if (!language) return;

        onConfirm({
            language: language,
            proficiency
        });
    }

    return (
        <DialogWrapper title="Dodaj jezik" isOpen={isOpen} onConfirm={createLanguage} onCancel={onCancel} confirmText="Dodaj">
            <div className="space-y-4">
                <AsyncSelect
                    className="w-full font-semibold"
                    placeholder="Pretraži jezike"
                    value={language}
                    loadOptions={debouncedFetchLanguages}
                    getOptionValue={(option) => `${option['id']}`}
                    getOptionLabel={(option) => `${option['name']}`}
                    onChange={setLanguage}
                    defaultOptions={true}
                    menuPortalTarget={document.body}
                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                />
                <Select
                    className="w-full font-semibold"
                    value={proficiencyOptions.find(option => option.value === proficiency)}
                    onChange={(selectedOption) => setProficiency(selectedOption.value)}
                    options={proficiencyOptions}
                    isClearable={false}
                    isSearchable={false}
                    menuPortalTarget={document.body}
                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                />
            </div>
        </DialogWrapper>
    )
}