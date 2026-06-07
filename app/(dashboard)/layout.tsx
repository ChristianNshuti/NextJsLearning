import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { ProjectProvider } from "@/context/ProjectContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProjectProvider>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1 }}>
          <Navbar />

          <main style={{ padding: "20px", background: "#f8fafc", minHeight: "100vh" }}>
            {children}
          </main>
        </div>
      </div>
    </ProjectProvider>
  );
}