import React from 'react';
import './OutputContainer.css';

function OutputContainer(props) {
    let finalValue = props.state.startingBalance;
    let yearsActive = props.state.retirementAge - props.state.currentAge;
    
    for (let i = 0; i < yearsActive; i++) {
        finalValue *= 1 + (props.state.rateOfReturn * 0.01);
        finalValue += props.state.annualContribution;
    }
    
    finalValue = Math.round(finalValue * 100) / 100;
    
    return (
        <div className="output-container container">
            <div className="container-label">Output</div>
            
            <div className="output-text-container">
                <div className="output-label">Total Contributions:</div>
                <div className="output-text">{props.state.annualContribution * yearsActive}</div>
            </div>
            
            <div className="output-text-container">
                <div className="output-label">Value at {props.state.retirementAge}:</div>
                <div className="output-text">{finalValue}</div>
            </div>
        </div>
    );
}

export default OutputContainer;