export interface Project {
    id: number;
    name: string;
    description: string;
    status: "Planning" | "In Progress" | "Completed";
}


export const projects: Project[] = [
    {
        id: 1,
        name: "DevFlow",
        description: "Developer productivity platform",
        status: "In Progress",
    },
    {
        id: 2,
        name: "Portfolio Generator",
        description: "Generate developer portfolios",
        status: "Completed",
    },
    {
        id: 3,
        name: "Task Manager",
        description: "Manage daily tasks",
        status: "Planning",
    },
];