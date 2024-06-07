import DialogWrapper from "../../core/components/DialogWrapper.jsx";
import SimpleInput from "../../core/components/form/SimpleInput.jsx";
import {useEffect, useState} from "react";
import SimpleTextarea from "../../core/components/form/SimpleTextarea.jsx";

export default function ProfileEdit({ value, isOpen, onCancel, onConfirm }) {
    const [name, setName] = useState(value.name);
    const [description, setDescription] = useState(value.description);

    const [isLoading, setIsLoading] = useState(false);

    const saveProfile = async () => {
        setIsLoading(true);

        await new Promise(resolve => {
            setTimeout(() => resolve('value'), 1000);
        });

        setIsLoading(false)

        onConfirm({...value, name, description});
    }

    useEffect(() => {
        setName(value.name);
        setDescription(value.description);
    }, [isOpen, value.description, value.name]);

    return (
        <DialogWrapper title="Uredi profil" isOpen={isOpen} isLoading={isLoading} onConfirm={saveProfile} onCancel={onCancel}>
            <div>
                <SimpleInput label="Ime profila" placeholder="Unesite ime profila..." value={name} onChange={setName} />
                <SimpleTextarea label="Opis profila" placeholder="Unesite opis profila..." value={description} onChange={setDescription} />
            </div>
        </DialogWrapper>
    )
}