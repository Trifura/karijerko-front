import DialogWrapper from "../../core/components/DialogWrapper.jsx";
import SimpleInput from "../../core/components/form/SimpleInput.jsx";
import {useEffect, useState} from "react";
import SimpleTextarea from "../../core/components/form/SimpleTextarea.jsx";
import {useDispatch} from "react-redux";
import {edit} from "../store/actions.js";

export default function ProfileEdit({ value, isOpen, onCancel, onConfirm }) {
    const dispatch = useDispatch()

    const [name, setName] = useState(value.name);
    const [description, setDescription] = useState(value.description);

    const [isLoading, setIsLoading] = useState(false);

    const saveProfile = async () => {
        setIsLoading(true);

        const { payload } = await dispatch(edit({...value, name, description}))

        setIsLoading(false)

        onConfirm(payload);
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