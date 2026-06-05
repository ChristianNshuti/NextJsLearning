import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />

            <div style={{flex:1}}>
                <Navbar />
                <main style={{padding: "20px" , background: "#f8fafc" , minHeight: "100vh" }}>
                    {children}
                </main>
            </div>
        </div>
    );
}