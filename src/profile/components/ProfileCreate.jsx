import DialogWrapper from "../../core/components/DialogWrapper.jsx";
import SimpleInput from "../../core/components/form/SimpleInput.jsx";
import { useState } from "react";
import SimpleTextarea from "../../core/components/form/SimpleTextarea.jsx";

export default function ProfileCreate({ isOpen, onCancel, onConfirm }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const clear = () => {
        setName('');
        setDescription('');
    }

    const confirmCreate = () => {
        onConfirm({name, description});
        clear();
    }

    const close = () => {
        clear();
        onCancel();
    }

    return (
        <DialogWrapper title="Kreiraj specijalizirani profil" confirmText="Dodaj" isOpen={isOpen} onConfirm={confirmCreate} onCancel={close}>
            <div>
                <SimpleInput label="Ime profila" placeholder="Unesite ime profila..." value={name} onChange={setName} />
                <SimpleTextarea label="Opis profila" placeholder="Unesite opis profila..." value={description} onChange={setDescription} />
            </div>
        </DialogWrapper>
    )
}