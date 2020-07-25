import React from 'react';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { SideNav } from '../SideNav/SideNav';

import './portfolio.css';

export const Portfolio = ({ handleSectionClick, about, skills, projects, selectedHeading, selectedQuote, selectedSection }) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav 
                    handleSectionClick={handleSectionClick}/>
            </div>

            <div className="main-section-container">
                <SectionContainer 
                    about={about}
                    skills={skills}
                    projects={projects}
					selectedSection={selectedSection}
					selectedHeading={selectedHeading}
					selectedQuote={selectedQuote} />
            </div>
        </div>
    )
}