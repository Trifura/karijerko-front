import AddIcon from "../../../assets/icons/Add.svg";
import EditIcon from "../../../assets/icons/Edit.svg";
import DeleteIcon from "../../../assets/icons/Delete.svg";
import EducationEdit from "./EducatonEdit.jsx";
import EducationCreate from "./EducationCreate.jsx";

export default function ProfileEducation({ educations }) {
    const selectedEducation = {
        name: 'Elektrotehnička i prometna škola Osijek',
        degree: 'Tehničar za računalstvo',
        dateFrom: '2018',
        dateTo: '2022',
        description: ''
    }

    return (
        <>
            <EducationEdit value={selectedEducation} isOpen={false}/>
            <EducationCreate isOpen={false}/>

            <div className="p-8 flex flex-col gap-8">
                <div className="w-full flex justify-between">
                    <h2 className="text-xl font-semibold">Obrazovanje</h2>
                    <button>
                        <img src={AddIcon} alt="Add"/>
                    </button>
                </div>
                <div className="flex flex-col gap-5">
                    {
                        educations.map((education) => (
                            <div key={education.id}>
                                <div className="flex gap-5 items-start">
                                    <h3 className="text-xl font-semibold">{education.name}</h3>
                                    <div className="flex gap-2">
                                        <button className="w-8 flex-none">
                                            <img src={EditIcon} alt="Edit"/>
                                        </button>
                                        <button className="w-8 flex-none">
                                            <img src={DeleteIcon} alt="Delete"/>
                                        </button>
                                    </div>
                                </div>
                                <p className="text-Ironside font-medium">{education.degree}</p>
                                <p className="text-Ironside font-medium">{education.dateFrom} - {education.dateTo}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}