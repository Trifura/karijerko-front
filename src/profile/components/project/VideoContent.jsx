import ContentOptions from "./ContentOptions.jsx";
import SimpleInput from "../../../core/components/form/SimpleInput.jsx";

export default function VideoContent({ content, isEditable = false, setDescription, className }) {
    const handleDescriptionChange = (value) => {
        setDescription(content, value);
    }

    return (
        <div className={`relative flex gap-2 items-center flex-col lg:flex-row ${className}`}>
            {isEditable && <ContentOptions/>}
            <div className="w-full flex flex-col gap-2">
                <div className="aspect-video">
                    <iframe
                        src={content.url}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                {
                    isEditable ? (
                            <div>
                                <SimpleInput value={content.description} placeholder="Unesite opis videozapisa..." className="text-center" onChange={handleDescriptionChange}/>
                            </div>
                        ) :
                        (
                            <p className="text-center text-Ironside font-medium">
                                {content.description}
                            </p>
                        )
                }
            </div>
        </div>
    )
}