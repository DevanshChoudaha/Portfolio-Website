import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="Devansh3.jpeg"
                className="avatar"
                alt="avatar" />

            <h2 className="main-name">Devansh Choudaha</h2>
            <p className="subtitle">"Engender as a software engineer"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick('about')} >About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick('skills')} >Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick('projects')} >Projects</p>
            </div>
        </div>
    )
}