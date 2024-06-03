export default function SimpleTextarea({ label, value, onChange, placeholder = '', className }) {
    return (
        <div className={`${className} flex flex-col gap-1`}>
            <label htmlFor={label} className="font-semibold">{label}</label>
            <textarea
                id={label}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`p-2 border-2 border-Swan mb-4 rounded-md bg-[#FBFBFB] outline-none w-full h-60`}
            />
        </div>

    )
}