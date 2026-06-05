export interface DashboardStat {
    id: number;
    title: string;
    value: number;
    description: string;
}

export const dashboardStats: DashboardStat[] = [
    {
        id: 1,
        title: "Projects",
        value: 12,
        description: "Total projects created",
    },
    {
        id:2,
        title:"Notes",
        value: 48,
        description: "Saved notes",
    },
    {
        id:3,
        title: "Tasks",
        value: 23,
        description: "Pending tasks",
    },
];