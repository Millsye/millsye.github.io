import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Summer 2025"
            iconStyle={{ background: '#87CEFA', color: '#rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Zurich Insurance - Anoka, MN</h4>
            <p>
              Full-stack Web Development, Azure DevOps, API Development, User Experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2026"
            iconStyle={{ background: '#800000', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Science Major</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Minnesota - Twin Cities</h4>
            <p>
              Dean's List, Data Structures and Algorithms, Machine Architecture, Program Design and Development, Operating Systems
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2025"
            iconStyle={{ background: '#8A9A5B', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Camp Counselor</h3>
            <h4 className="vertical-timeline-element-subtitle">Coon Rapids, MN</h4>
            <p>
              Leadership and Supervision, Responsible for K-5th Graders, Planned and Organized Activites and Field Trips
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2023"
            iconStyle={{ background: '#4169E1', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">High School Graduate</h3>
            <h4 className="vertical-timeline-element-subtitle">Spring Lake Park, MN</h4>
            <p>
              4.1 GPA, Commencement Speaker, Swim Team Captain, Current Affairs Leader, Panther Mentor House Leader
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;