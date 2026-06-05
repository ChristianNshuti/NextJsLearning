import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects-data";

export default function ProjectsPage() {
    return (
        <div>
            <h1>Projects</h1>

            <div 
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "20px",
                    marginTop: "20px",
                    }}
            >
              {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />
              ))}  
            </div>
        </div>
    )
}