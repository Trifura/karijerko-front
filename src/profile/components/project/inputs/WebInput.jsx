import LinkIcon from "../../../../assets/icons/Link.svg";
import DialogWrapper from "../../../../core/components/DialogWrapper.jsx";
import SimpleInput from "../../../../core/components/form/SimpleInput.jsx";
import {useState} from "react";

export default function WebInput({ onInput }) {
    const [url, setUrl] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const onConfirm = () => {
        onInput(url)
        setIsOpen(false)
        setUrl('')
    }

    const onCancel = () => {
        setIsOpen(false)
        setUrl('')
    }

    return (
        <>
            <button
                className="border-2 border-Hare hover:border-Primary rounded-full w-10 h-10 flex justify-center items-center"
                onClick={() => setIsOpen(true)}
            >
                <img src={LinkIcon} alt="Attach web link" className="w-5 h-5"/>
            </button>
            <DialogWrapper title="Dodaj web link" isOpen={isOpen} disableScroll={false} onCancel={onCancel} onConfirm={onConfirm}>
                <div className="flex flex-col gap-4">
                    <SimpleInput value={url} label="Web link" placeholder="Unesite web link..." onChange={setUrl}/>
                </div>
            </DialogWrapper>
        </>
    )
}