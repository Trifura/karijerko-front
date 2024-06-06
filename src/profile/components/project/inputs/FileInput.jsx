import FileUpload from "../../../../core/components/form/FileUpload.jsx";
import FileIcon from "../../../../assets/icons/File.svg";

export default function FileInput({ onInput }) {
    return (
        <FileUpload accept=".pdf" onUpload={onInput}>
            <div className="border-2 border-Hare hover:border-Primary rounded-full w-10 h-10 flex justify-center items-center">
                <img src={FileIcon} alt="Upload document" className="w-5 h-5"/>
            </div>
        </FileUpload>
    )
}