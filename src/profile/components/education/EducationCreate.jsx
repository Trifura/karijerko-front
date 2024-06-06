import DialogWrapper from "../../../core/components/DialogWrapper.jsx";
import {useState} from "react";
import SimpleInput from "../../../core/components/form/SimpleInput.jsx";

export default function EducationCreate({ isOpen, onCancel, onConfirm }) {
    const [instituon, setInstitution] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [degree, setDegree] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');

    return (
        <DialogWrapper title="Dodaj obrazovanje" isOpen={isOpen} onConfirm={onConfirm} onCancel={onCancel} confirmText="Dodaj">
            <div className="flex flex-col gap-3">
                <SimpleInput label="Ime ustanove" placeholder="Npr. Tehničko veleučilište u Zagrebu" value={instituon} onChange={setInstitution} />
                <div>
                    <span className="font-semibold">Godina pohađanja</span>
                    <div className="flex gap-2">
                        <SimpleInput value={dateFrom} placeholder="Od" type="number" onChange={setDateFrom} className="w-1/2" />
                        <SimpleInput value={dateTo} placeholder="Do (ili očekivana godina)" type="number" onChange={setDateTo} className="w-1/2" />
                    </div>
                </div>
                <SimpleInput label="Zvanje (Opcionalno)" placeholder="Npr. Prvostupnik informaticjskih tehnologija" value={degree} onChange={setDegree} />
                <SimpleInput label="Smjer (Opcionalno)" placeholder="Npr. Informatički dizajn" value={fieldOfStudy} onChange={setFieldOfStudy} />
            </div>
        </DialogWrapper>
    )
}