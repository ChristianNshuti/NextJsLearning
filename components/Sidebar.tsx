import styles from "@/styles/sidebar.module.css";

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <h1 className={styles.logo}>DevFlow</h1>

            <nav className={styles.nav}>
                <a href="/dashboard">Dashboard</a>
                <a href="/projects">Projects</a>
                <a href="/projects/create">Create Project</a>
                <a href="/dashboard/notes">Notes</a>
                <a href="/dashboard/tasks">Tasks</a>
                <a href="/dashboard/profile">Profile</a>
            </nav>
        </aside>
    )
}