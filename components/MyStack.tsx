import { MyStackData } from "../constants";
import Divider from '@mui/material/Divider';
import classes from '../styles/MyStack.module.scss';
const MyStack = () => {
    return (
        <div className={classes.firstContainer}>
            <h2>Complete Stack</h2>
            <ul className={classes.container}>
                {MyStackData.map((title) => (
                    <li
                        key={title}
                        className={`
                        ${classes.list} 
                        ${title == 'React JS' ? classes.reactJS : ''}
                        ${title == 'MongoDB' ? classes.mongoDB : ''}
                        ${title == 'Express' ? classes.expressJS : ''}
                        ${title == 'Node JS' ? classes.nodeJS : ''}
                        ${title == 'Typescript' ? classes.typescript : ''}
                        ${title == 'RPA' ? classes.rpa : ''}
                        ${title == 'Flutter' ? classes.flutter : ''}
                        ${title == 'HTML5' ? classes.html5 : ''}
                        ${title == 'CSS' ? classes.css : ''}
                        ${title == 'NextJS' ? classes.nextjs : ''}
                        ${title == 'Nest JS' ? classes.nestjs : ''}
                        ${title == 'Git' ? classes.git : ''}
                        ${title == 'Mocha' ? classes.mocha : ''}    
                        ${title == 'Redux' ? classes.redux : ''}
                        ${title == 'Tailwind CSS' ? classes.tailwindcss : ''}
                        ${title == 'GraphQL' ? classes.graphql : ''}                    
                        `}
                    >
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>)
}

export default MyStack;