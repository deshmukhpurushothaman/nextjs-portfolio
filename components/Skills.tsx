import Image from "next/image";
import { motion } from "framer-motion";
import Typography from '@mui/material/Typography';
import classes from '../styles/Skills.module.scss';
import ReactJS from '../assets/react.png'
import NodeJS from '../assets/nodejs.png'
import Flutter from '../assets/flutter.png'
import Automation from '../assets/automation.png'
import MongoDB from '../assets/mongodb.png'
import NextJS from '../assets/nextjs.png'

export default function Skills() {
    const containerVariant = (direction: any, type: any, delay: any, duration: any) => ({
        hidden: {
            x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
            y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
            opacity: 0,
            transition: {
                type: 'tween',
                delay: 1,
                duration: 1,
            },
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: 'easeOut',
            },
        },
    });
    return (
        <motion.div
            variants={containerVariant('right', 'tween', 2, 1.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={classes.homeSkills}>
            <Typography variant="h3">Major Tech Stack</Typography>

            <div className={classes.homeCubeSkills}>
                <div className={classes.homeCubeSkillsFace1}>
                    <Image src={ReactJS} alt="Face1" />
                </div>

                <div className={classes.homeCubeSkillsFace2}>
                    <Image src={NodeJS} alt="Face2" />
                </div>

                <div className={classes.homeCubeSkillsFace3}>
                    <Image src={Flutter} alt="Face3" />
                </div>

                <div className={classes.homeCubeSkillsFace4}>
                    <Image src={Automation} alt="Face4" />
                </div>

                <div className={classes.homeCubeSkillsFace5}>
                    <Image src={MongoDB} alt="Face5" />
                </div>

                <div className={classes.homeCubeSkillsFace6}>
                    <Image src={NextJS} alt="Face6" />
                </div>
            </div>

            <div className={classes.cubeShadow}></div>

            {/* <div className={classes.homeskillsBox} id="homeskillsBox">
                <SiCplusplus />
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
                <SiMongodb />
                <SiExpress />
                <SiReact />
                <SiNodedotjs />
                <SiThreedotjs />
            </div> */}
        </motion.div>
    )
}