import styles from '../styles/Projects.module.scss'
import Divider from '@mui/material/Divider';
import { ProjectsData } from '../constants';
const Projects = () => {
    return (
        <div className={styles.container}>
            <h2>Projects</h2>
            <div className={styles.grid}>
                {ProjectsData.map((n) => (
                    <a href="https://nextjs.org/docs" target="_blank" className={styles.card}>
                        <h2>{n.name} &rarr;</h2>
                        <p>{n.techs}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Projects;