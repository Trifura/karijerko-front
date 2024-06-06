export default function ProfileSkills({ skills }) {
    return (
        <div className="p-8 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Vještine</h2>
            <div className="flex flex-wrap gap-2">
                {
                    skills.map((skill) => (
                        <div key={skill.id} className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                            {skill.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}