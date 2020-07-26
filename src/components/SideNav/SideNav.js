import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="Devansh3.jpg"
                className="avatar"
                alt="avatar" />

            <h2 className="main-name">Devansh Choudaha</h2>
            <p className="subtitle">"Engender as a software engineer"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick('about')} >About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick('skills')} >Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick('projects')} >Projects</p>
            </div>
            <div>
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="2" roundness="50%" url="https://www.linkedin.com/in/c-devansh/" size="41" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(10,10,10,1)" iconSize="8" roundness="50%" url="https://github.com/DevanshChoudaha" size="41" />
            </div>
        </div>
    )
}