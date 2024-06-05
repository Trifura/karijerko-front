import DeleteIcon from '../../../assets/icons/Delete.svg'

export default function ContentOptions({ onDelete }) {
    return (
        <div className="lg:absolute lg:top-1/2 lg:-right-14 lg:transform lg:-translate-y-1/2 flex flex-col w-fit">
            <button onClick={onDelete}>
                <img src={DeleteIcon} alt="" className="w-11 h-11"/>
            </button>
        </div>
    )
}