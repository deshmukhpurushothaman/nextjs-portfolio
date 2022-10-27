import Image from "next/image";
import { useTheme } from "next-themes";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import classes from '../styles/Details.module.scss';

const Details = () => {
    return (
        <div className={classes.mainContainer}>
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
                </ul>
            </div>
        </div>
    );
};

export default Details;