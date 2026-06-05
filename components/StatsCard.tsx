import styles from "@/styles/stats-card.module.css"

interface StatsCardProps {
    title: string;
    value: number;
    description: string;
}

export default function StatsCard({
    title,
    value,
    description,
}: StatsCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>

            <div className={styles.value}>
                {value}
            </div>

            <div className={styles.description}>
                {description}
            </div>
        </div>
    );
}