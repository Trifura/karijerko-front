import DialogWrapper from "../../core/components/DialogWrapper.jsx";
import SimpleInput from "../../core/components/form/SimpleInput.jsx";
import { useState } from "react";
import SimpleTextarea from "../../core/components/form/SimpleTextarea.jsx";

export default function ProfileEdit({ value, isOpen, onCancel, onConfirm }) {

    const [name, setName] = useState(value.name);
    const [description, setDescription] = useState(value.description);

    return (
        <DialogWrapper title="Uredi profil" isOpen={isOpen} onConfirm={onConfirm} onCancel={onCancel}>
            <div>
                <SimpleInput label="Ime profila" placeholder="Unesite ime profila..." value={name} onChange={setName} />
                <SimpleTextarea label="Opis profila" placeholder="Unesite opis profila..." value={description} onChange={setDescription} />
            </div>
        </DialogWrapper>
    )
}