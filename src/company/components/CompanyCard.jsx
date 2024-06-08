export default function CompanyCard({ company }) {
    return (
      <div className="p-4 border border-Swan rounded-xl flex gap-2 cursor-pointer w-full">
        <div className="w-14 h-14 flex-none">
          <img
            src={company?.profilePicture}
            alt="Company logo"
            className="w-full h-full rounded-lg border border-Swan"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold">{company?.name}</span>
            <span className="text-base font-medium">{company.industry?.nameHr}</span>
            <span className="text-sm font-medium">{company?.specialties}</span>
          </div>
          <div className="text-xs text-neutral-500 flex gap-1">
            <span>{company.companySize?.nameHr}</span>
            •
            <span>{company?.headquarters}</span>
          </div>
          <div>
            <p className="text-xs">
              {company?.tagline}
            </p>
          </div>
        </div>
      </div>
    );
  }
  