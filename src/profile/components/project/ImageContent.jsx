import ContentOptions from "./ContentOptions.jsx";
import SimpleInput from "../../../core/components/form/SimpleInput.jsx";

export default function ImageContent({ content, isEditable = false, setDescription, className }) {
    const handleDescriptionChange = (value) => {
        setDescription(value);
    }

    return (
        <div className={`relative flex gap-2 items-center flex-col lg:flex-row ${className}`}>
            {isEditable && <ContentOptions/>}
            <div className="w-full flex flex-col gap-2">
                <img src={content.url} alt="Image" className="max-w-full object-contain"/>
                {
                    isEditable ? (
                            <div>
                                <SimpleInput value={content.description} placeholder="Unesite opis slike..." className="text-center" onChange={handleDescriptionChange}/>
                            </div>
                        ) :
                        (
                            <p className="text-center text-Ironside w-full font-medium">
                                {content.description}
                            </p>
                        )
                }
            </div>
        </div>
    )
}