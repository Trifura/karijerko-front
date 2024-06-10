export default function ProfileSkills({ skills, isPublic }) {
    return (
        <div className="p-8 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold lg:font-medium">Vještine</h2>
            <div className="flex flex-wrap gap-2">
                {
                    skills.map((skill, index) => (
                        <div key={index} className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                            {skill}
                        </div>
                    ))
                }

                {
                    !skills.length && (
                        <p className="text-Ironside font-medium text-center w-full">
                            {
                                isPublic
                                    ? "Trenutno nema vještina u portfoliu"
                                    : "Vještine će vam se prikazati nakon što ih dodate u projektu"
                            }
                        </p>
                    )
                }
            </div>
        </div>
    )
}