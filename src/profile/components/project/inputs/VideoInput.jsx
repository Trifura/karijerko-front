import VideocamIcon from "../../../../assets/icons/Videocam.svg";
import DialogWrapper from "../../../../core/components/DialogWrapper.jsx";
import SimpleInput from "../../../../core/components/form/SimpleInput.jsx";
import {useEffect, useState} from "react";

export default function VideoInput({ onInput }) {
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
                <img src={VideocamIcon} alt="Upload vide" className="w-5 h-5"/>
            </button>
            <DialogWrapper title="Dodaj Youtube video" isOpen={isOpen} disableScroll={false} onCancel={onCancel} onConfirm={onConfirm}>
                <div className="flex flex-col gap-4">
                    <p className="text-Ironside">
                        Samo trebate kopirati link od Youtube videozapisa te ga zalijepiti, mi rješavamo sve ostalo.
                    </p>
                    <SimpleInput value={url} label="YouTube link" placeholder="Unesite YouTube video link..." onChange={setUrl} />
                </div>
            </DialogWrapper>
        </>
    )
}