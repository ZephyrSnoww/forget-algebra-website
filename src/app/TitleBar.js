import React from 'react';
import { Link } from 'react-router-dom';
import './TitleBar.css';

function TitleBar(props) {
    return (
        <div className="title-bar">
            <div className="title-bar-title">Roth IRA Calculator</div>
            <div className="title-bar-buttons">
                <Link to="/" className="title-bar-button">Home</Link>
                <Link to="/roth-ira-calculator" className="title-bar-button">Roth IRA Calculator</Link>
            </div>
        </div>
    );
}

export default TitleBar;