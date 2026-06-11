import React from "react";

const skillGroups: { category: string; items: string[] }[] = [
    { category: "Frameworks", items: ["Laravel", "Angular", "Ionic", "Flask", "Next.js", "Spring Boot", "React"] },
    { category: "Languages", items: ["PHP", "TypeScript", "JavaScript", "Java", "Python", "C#", "Ruby"] },
    { category: "Cloud & DevOps", items: ["GCP", "AWS Lambda", "Docker", "GitHub Actions", "CI/CD", "Linux/UNIX"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "NoSQL"] },
    { category: "Testing", items: ["Selenium", "JUnit", "PHPUnit", "JMeter"] },
    { category: "AI & ML", items: ["BERT", "CNN", "Vision Transformer", "MobileNet", "LLM"] },
];

export default function CardPage() {
    return (
        <section className="py-14 px-4 mx-auto max-w-screen-xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Skills & Technologies</h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-10">Technologies I've worked with across full-stack, cloud, and AI projects</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skillGroups.map(({ category, items }) => (
                    <div key={category} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white uppercase tracking-wide">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map(skill => (
                                <span key={skill} className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full dark:text-blue-300 dark:bg-blue-900/40">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
