import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { ExperienceData } from "../constants";
import Divider from '@mui/material/Divider';

const Experience = () => {
    return (
        <div>
            <h2>Experience</h2>
            <section>
                <VerticalTimeline>
                    {ExperienceData &&
                        ExperienceData.map((n: any) => (
                            <VerticalTimelineElement
                                key={n.id}
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "rgb(21, 24, 31)",
                                    color: "#888",
                                }}
                                contentArrowStyle={{
                                    borderRight: "7px solid  rgb(21, 24, 31)",
                                }}
                                date={n.date}
                                iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                                icon={<WorkHistoryIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {n.title}
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    {n.company}
                                </h4>
                            </VerticalTimelineElement>
                        ))}
                </VerticalTimeline>
            </section>
        </div>
    )
}

export default Experience;