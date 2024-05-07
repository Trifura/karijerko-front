export default function CompanyCard({company}) {
    return (
        <div className="p-4 border border-neutral-200 rounded-xl flex gap-2 cursor-pointer">
            <div className="w-14 h-14 flex-none">
                <img src={company.profilePicture}
                     alt="Treblle logo"
                     className="w-full h-full rounded-lg border border-neutral-200"
                />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <span className="text-xl font-bold">{company.name}</span>
                    <span className="text-base font-medium">{company.industry.name_hr}</span>
                    <span className="text-sm font-medium">{company.specialties}</span>
                </div>
                <div className="text-xs text-neutral-500 flex gap-1">
                    <span>{company.companySize.name_hr}</span>
                    •
                    <span>{company.headquarters}</span>
                </div>
                <div>
                    <p className="text-xs">Treblle helps engineering and product teams build, ship and understand their REST APIs in one single place.</p>
                </div>
            </div>
        </div>
    )
}
