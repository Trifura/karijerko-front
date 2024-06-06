import ImageIcon from "../../../../assets/icons/Image.svg";
import FileUpload from "../../../../core/components/form/FileUpload.jsx";

export default function ImageInput({  onInput }) {
    return (
        <FileUpload accept="image/*" onUpload={onInput}>
            <div
                className="border-2 border-Hare hover:border-Primary rounded-full w-10 h-10 flex justify-center items-center">
                <img src={ImageIcon} alt="Upload image" className="w-5 h-5"/>
            </div>
        </FileUpload>
    )
}