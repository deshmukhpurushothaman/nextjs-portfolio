import styles from '../styles/Projects.module.scss'
import Divider from '@mui/material/Divider';
import { AnimatePresence, motion } from "framer-motion";
import { ProjectsData } from '../constants';
import { useState } from 'react';

const Projects = () => {
    const container = {
        hidden: {
            opacity: 0,
            scale: 0,
            x: 100,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 140,
            },
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                // delayChildren: 0.3,
                // staggerChildren: 0.2
                type: 'spring',
                // stiffness: 10,
                // dampness: 8,
                duration: 1
            }
        },
        hover: {
            scale: 1.1,
        }
    };
    const item = {
        // hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    // States
    const [selectedId, setSelectedId] = useState(null)
    const [selectedProject, setSelectedProject] = useState<any>('')

    return (
        <div className={styles.container}>
            <h2>Projects</h2>
            <motion.div
                className={styles.grid}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {ProjectsData.map((n: any) => (
                    <motion.div
                        key={n}
                        className={styles.card}
                        layoutId={n.id}
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.25 }}
                        whileHover="hover"
                    // onClick={() => { setSelectedId(n.id); setSelectedProject(n) }} 
                    >
                        <motion.a key={n.id}>
                            <motion.h2>{n.name} &rarr;</motion.h2>
                            <motion.p>{n.techs}</motion.p>
                        </motion.a>
                    </motion.div>
                ))}
            </motion.div>
            {/* <AnimatePresence>
                {selectedId && selectedProject != '' && (
                    <motion.div layoutId={selectedId} initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <motion.h5>{selectedProject?.name}</motion.h5>
                        <motion.h2>{selectedProject?.techs}</motion.h2>
                        <motion.button onClick={() => { setSelectedId(null); setSelectedProject(null); }} />
                    </motion.div>
                )}
            </AnimatePresence> */}
        </div >
    )
}

export default Projects;