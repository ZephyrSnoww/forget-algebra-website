import React from 'react';
import './TitleBar.css';

function TitleBar(props) {
    return (
        <div className="title-bar">
            <div className="title-bar-title">Roth IRA Calculator</div>
            <div className="title-bar-buttons">
                <div className="title-bar-button">Home</div>
                <div className="title-bar-button">Roth IRA Calculator</div>
            </div>
        </div>
    );
}

export default TitleBar;