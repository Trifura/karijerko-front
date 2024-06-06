export default function FileUpload({ onUpload, children, accept }) {
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        onUpload(file);
    }

    const id = Math. random(). toString(36)

    return (
        <>
            <label htmlFor={id} className="cursor-pointer">
                {children}
            </label>
            <input id={id} type="file" className="hidden" accept={accept} onChange={handleFileChange} />
        </>

    )
}