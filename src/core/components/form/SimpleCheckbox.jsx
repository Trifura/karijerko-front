import { useState } from 'react';

const SimpleCheckbox = ({ label }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <label className="flex items-center space-x-2 cursor-pointer">
            <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <div className={`w-5 h-5 border-2 rounded-full ${checked ? 'bg-Primary border-Primary' : 'bg-white border-gray-300'}`}>
                {checked && (
                    <svg
                        className="w-full h-full text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                )}
            </div>
            <span className="font-semibold">{label}</span>
        </label>
    );
};

export default SimpleCheckbox;
