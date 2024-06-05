import ReactDOM from "react-dom";
import CloseRound from "../../assets/icons/Close_round.svg";
import { useEffect } from "react";

const DialogWrapper = ({
                           isOpen,
                           onCancel,
                           onConfirm,
                           title,
                           children,
                           confirmText = 'Spremi',
                           cancelText = 'Odustani',
                           fullscreen = false
                       }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${fullscreen ? 'fullscreen' : ''}`}>
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div
                className={`bg-white ${fullscreen ? 'w-screen h-screen' : 'rounded-lg shadow-lg max-w-xl w-full'} z-10`}>
                <div className="p-5 border-b flex justify-between">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <img src={CloseRound} alt="close" className="cursor-pointer" onClick={onCancel}/>
                </div>
                <div className="overflow-auto">
                    <div className="p-8">
                        {children}
                    </div>
                </div>
                <div className="p-8 flex justify-end space-x-2">
                    <button
                        onClick={onCancel}
                        className="text-base px-6 py-2 font-semibold rounded-md border-2 border-Swan"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        className="text-white text-base lg:text-md px-6 py-2 font-semibold bg-Primary rounded-md "
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default DialogWrapper;
