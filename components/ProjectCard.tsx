import { Project } from "@/lib/projects-data";

interface Props {
    project: Project;
}

export default function ProjectCard({
    project,
}: Props) {
    return (
        <div 
            style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow:
                "0 2px 8px rgba(0,0,0,0.08)",
            }}
        >
            <h2>{project.name}</h2>

            <p>{project.description}</p>

            <strong>
                Status: {project.status}
            </strong>
        </div>
    )
}