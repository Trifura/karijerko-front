export function getSkillsFromProjects(projects) {
    // Create a set to store unique skills (sets don't allow duplicates)
    const uniqueSkills = new Set();

    // Loop through each project
    for (const project of projects) {
        // Check if the project has skills
        if (project.skills) {
            // Loop through skills in the project
            for (const skill of project.skills) {
                // Add the skill name to the set (ignoring duplicates)
                uniqueSkills.add(skill.name);
            }
        }
    }

    // Convert the set of unique skills back to an array (optional)
    return Array.from(uniqueSkills);
}