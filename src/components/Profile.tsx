import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/61896274?s=460&u=5d533ec19c12fb7d9b87aec46d24b3dbcb60b244&v=4" alt="Fernanda Kipper"/>
            <div>
                <strong>Fernanda Kipper</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"className={styles.levelImg}/>
                    Level 2
                </p>
            </div>
        </div>
    )
}