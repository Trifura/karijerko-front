import DialogWrapper from "../../../core/components/DialogWrapper.jsx";
import {useEffect, useState} from "react";
import SimpleInput from "../../../core/components/form/SimpleInput.jsx";

export default function EducationEdit({ isOpen, onCancel, onConfirm, value }) {
    const [institution, setInstitution] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [degree, setDegree] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');

    useEffect(() => {
        if (isOpen) {
            setInstitution(value.institution);
            setStartYear(value.startYear);
            setEndYear(value.endYear);
            setDegree(value.degree);
            setFieldOfStudy(value.fieldOfStudy);
        }
    }, [isOpen]);

    const saveEducation = () => {
        onConfirm({
            ...value,
            institution,
            startYear,
            endYear,
            degree,
            fieldOfStudy
        });
    }

    return (
        <DialogWrapper title="Uredi obrazovanje" isOpen={isOpen} onConfirm={saveEducation} onCancel={onCancel}>
            <div className="flex flex-col gap-3">
                <SimpleInput label="Ime ustanove" placeholder="Npr. Tehničko veleučilište u Zagrebu" value={institution} onChange={setInstitution} />
                <div>
                    <span className="font-semibold">Godina pohađanja</span>
                    <div className="flex gap-2">
                        <SimpleInput value={startYear} placeholder="Od" type="number" onChange={setStartYear} className="w-1/2" />
                        <SimpleInput value={endYear} placeholder="Do (ili očekivana godina)" type="number" onChange={setEndYear} className="w-1/2" />
                    </div>
                </div>
                <SimpleInput label="Zvanje (Opcionalno)" placeholder="Npr. Prvostupnik informaticjskih tehnologija" value={degree} onChange={setDegree} />
                <SimpleInput label="Smjer (Opcionalno)" placeholder="Npr. Informatički dizajn" value={fieldOfStudy} onChange={setFieldOfStudy} />
            </div>
        </DialogWrapper>
    )
}