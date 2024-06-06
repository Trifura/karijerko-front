 import ContentOptions from "./ContentOptions.jsx";

import BookIllustration from "../../../assets/book_illustration.png";
import SimpleTextarea from "../../../core/components/form/SimpleTextarea.jsx";
export default function FileContent({ content, isEditable = false, setDescription, onRemove }) {
    const handleDescriptionChange = (value) => {
        setDescription(value);
    }

    return (
        <div className="relative flex gap-2 items-center flex-col lg:flex-row">
            {isEditable && <ContentOptions onRemove={onRemove} />}
            <div className="w-full flex gap-2 border border-Swan rounded-xl p-4">
                <a href={content.url} target="_blank">
                    <img src={BookIllustration} alt="Image" className="max-h-32 object-contain w-fit"/>
                </a>
                <div className="w-full">
                    <a href={content.url} target="_blank" className="font-semibold">
                        {content.title}
                    </a>
                    {
                        isEditable ? (
                            <SimpleTextarea value={content.description} placeholder="Unesite opis dokumenta..." onChange={handleDescriptionChange}/>
                            ) :
                            (
                                <p className="text-Ironside font-medium">
                                    {content.description}
                                </p>
                            )
                    }
                </div>

            </div>
        </div>
    )
}