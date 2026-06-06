"use client";

import { createContext, useContext, useState } from "react";

export interface Project {
    id:number;
    name: string;
    description: string;
    status: "Planning" | "In Progress" | "Completed";
}

interface ProjectContextType {
    projects: Project[];
    addProject: (project: Omit<Project, "id">) => void;
}

const ProjectContext = createContext<ProjectContextType | null>(null);

export function ProjectProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [projects, setProjects] = useState<Project[]>([
        {
            id: 1,
            name: "DevFlow",
            description:"Developer productivity platform",
            status: "In Progress",
        },
    ]);

    const addProject = (project: Omit<Project, "id">) => {
        const newProject: Project = {
            id: Date.now(),
            ...project,
        };

        setProjects((prev) => [newProject, ...prev]);
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject }}>
            {children}
        </ProjectContext.Provider>
    );
}


export function useProjects() {
    const context = useContext(ProjectContext);

    if(!context) {
        throw new Error("useProjects must be used inside ProjectProvider");
    }

    return context;
}