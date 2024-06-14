export default function SimpleCompanyCard({company}) {
    return (
        <div className="w-full flex gap-3 border border-Swan hover:bg-Swan transition rounded-xl max-w-120 h-full p-3.5">
            <img src={company.profilePicture} alt={`${company.name} Logo`} className="w-14 h-14 border-2 rounded-lg"/>
            <div>
                <h4 className="text-lg font-semibold">{company.name}</h4>
                <h5 className="text-base font-medium">{company.industry?.nameHr}</h5>
            </div>
        </div>
    )
}
