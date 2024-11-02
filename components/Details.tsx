import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import classes from '../styles/Details.module.scss';

const Details = () => {
    const containerVariant = {
        hidden: {
            opacity: 0,
            y: -100,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 140,
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                delay: 1,
            },
        },
    }
    return (
        <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={classes.mainContainer}>
            <div>
                <div className={classes.name}>Deshmukh P</div>
                <div className={classes.description}>Full Stack Developer</div>
            </div>
            <div className={classes.socialLinks}>
                <ul>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/deshmukh-p-b3775418b/"
                        >
                            <LinkedInIcon />
                        </a></li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/deshmukhpurushothaman/"
                        ><GitHubIcon />
                        </a></li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:deshmukhpurushothaman@gmail.com"
                            aria-label="email"
                        >
                            <EmailIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </motion.div>
    );
};

export default Details;