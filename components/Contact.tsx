import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Divider from '@mui/material/Divider';
import classes from '../styles/Contact.module.scss';

export default function Contact() {
    return (
        <>
            <h2>Contact</h2>
            <p className="max-w-3xl w-full">
                You can reach out to me over:{" "}
                {/* <a
                    href="mailto:abhinavrobinson@gmail.com"
                    className="font-bold dark:text-white cursor-pointer"
                >
                    abhinavrobinson@gmail.com
                </a> */}
            </p>
            <ul className={classes.listContainer}>
                <li className="hover:text-sky-500 cursor-pointer">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/deshmukh-p-b3775418b/"
                        aria-label="linkedin"
                    >
                        <LinkedInIcon />
                    </a>
                </li>
                <li className={classes.list}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/deshmukhpurushothaman"
                        aria-label="github"
                    >
                        <GitHubIcon />
                    </a>
                </li>
                <li className="hover:text-rose-500 cursor-pointer">
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
        </>
    );
}