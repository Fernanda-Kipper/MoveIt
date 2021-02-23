import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar(){
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '68%' }}></div>
                <span className={styles.currentExperience} style={{ left: '68%' }}>
                    { 68 * 800 / 100} xp
                </span>
            </div>
            <span>800 xp</span>
        </header>
    )
}