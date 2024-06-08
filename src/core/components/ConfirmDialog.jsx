import DialogWrapper from "./DialogWrapper.jsx";

export default function ConfirmDialog({ isOpen, text, onConfirm, onCancel, confirmColor = 'red-500' }) {
    return (
        <DialogWrapper
            isOpen={isOpen}
            title="Jeste li sigurni?"
            onConfirm={onConfirm}
            onCancel={onCancel}
            confirmColor={confirmColor}
            confirmText="Obriši"
            isSimple={true}
        >
            <div className="flex flex-col gap-6">
                <p className="font-medium">{text}</p>
            </div>
        </DialogWrapper>
    )
}