import ContentOptions from "./ContentOptions.jsx";
import SimpleInput from "../../../core/components/form/SimpleInput.jsx";

export default function ImageContent({ content, isEditable = false, setDescription }) {
    const handleDescriptionChange = (value) => {
        setDescription(content, value);
    }

    return (
        <div className="relative flex gap-2 items-center flex-col lg:flex-row">
            {isEditable && <ContentOptions/>}
            <div className="w-full flex flex-col gap-2 p-4">
                <img src={content.url} alt="Image" className="max-w-full max-h-64 object-contain"/>
                {
                    isEditable ? (
                            <div>
                                <SimpleInput placeholder="Unesite opis slike..." className="text-center" onChange={handleDescriptionChange}/>
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