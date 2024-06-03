export default function SimpleInput({ label, value, onChange, type = 'text', placeholder = '', className }) {
    return (
        <div className={`${className} flex flex-col gap-1`}>
            <label htmlFor={label} className="font-semibold">{label}</label>
            <input
                id={label}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`py-2 px-3 border-2 border-Swan mb-4 rounded-md outline-none w-full`}
            />
        </div>

    )
}