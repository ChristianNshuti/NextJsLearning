import StatsCard from "@/components/StatsCard";
import { dashboardStats } from "@/lib/dashboard-data";

export default function DashboardPage() {
    return (
        <>
            <h1>Dashboard</h1>

            <div
                style={{
                display: "grid",
                gridTemplateColumns:
                    "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
                marginTop: "20px",
                }}
            >
              {dashboardStats.map((stat) => (
                <StatsCard
                    key={stat.id}
                    title={stat.title}
                    value={stat.value}
                    description={stat.description}
                />
              ))}  
            </div>

        </>
    );
}