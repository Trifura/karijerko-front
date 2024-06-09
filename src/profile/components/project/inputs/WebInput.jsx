import LinkIcon from "../../../../assets/icons/Link.svg";
import DialogWrapper from "../../../../core/components/DialogWrapper.jsx";
import SimpleInput from "../../../../core/components/form/SimpleInput.jsx";
import {useEffect, useState} from "react";
import WebContent from "../content/WebContent.jsx";
import projectService from "../../../services/project.js";

export default function WebInput({ onInput }) {
    const [url, setUrl] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        if (isOpen) {
            setUrl('')
            setContent({})
            setError('')
        }
    }, [isOpen]);

    const onConfirm = () => {
        if (error) return

        onInput(content)
        setIsOpen(false)
        setUrl('')
        setContent({})
    }

    const onCancel = () => {
        setIsOpen(false)
        setUrl('')
    }

    const onUrlInput = async (url) => {
        setUrl(url)

        try {
            const data = await projectService.fetchWebMetadata(url)
            setError('')
            setContent({ ...data, url })
        } catch (e) {
            setContent({ title: '', description: '', url })
            setError('Nažalost nismo uspjeli učitati vaš web link. Pokušajte ponovno.')
        }
    }

    return (
        <>
            <button
                className="border-2 border-Hare hover:border-Primary rounded-full w-10 h-10 flex justify-center items-center"
                onClick={() => setIsOpen(true)}
            >
                <img src={LinkIcon} alt="Attach web link" className="w-5 h-5"/>
            </button>
            <DialogWrapper title="Dodaj web link" isOpen={isOpen} onCancel={onCancel} onConfirm={onConfirm}>
                <div className="flex flex-col gap-2">
                    <SimpleInput value={url} label="Web link" placeholder="Unesite web link..." onChange={onUrlInput}/>
                    {error && <p className="text-Coral font-semibold">{error}</p>}
                    {content.title && <WebContent content={content} />}
                </div>
            </DialogWrapper>
        </>
    )
}