import React from 'react';
import './InputForm.css';

function InputForm(props) {
    return (
        <form onSubmit={props.handleSubmit} className="input-form container">
            <div className="container-label">Input</div>
            
            {/* Starting balance */}
            <div className="input-container">
                <div className="input-label">Starting Balance: </div>
                <input name="startingBalance" onChange={props.handleChange} value={(props.state.startingBalance).toLocaleString()} type="number" placeholder="0" min="0" step="250" />
                <div className="input-unit">$</div>
            </div>
            
            {/* Annual contribution */}
            <div className="input-container">
                <div className="input-label">Annual Contribution: </div>
                <input name="annualContribution" onChange={props.handleChange} value={(props.state.annualContribution).toLocaleString()} type="number" placeholder="5500" min="0" step="250" />
                <div className="input-unit">$</div>
            </div>
            
            {/* Current age */}
            <div className="input-container">
                <div className="input-label">Current Age: </div>
                <input name="currentAge" onChange={props.handleChange} value={props.state.currentAge} type="number" placeholder="18" min="0" step="1" max={props.state.retirementAge - 1} />
            </div>
            
            {/* Retirement age */}
            <div className="input-container">
                <div className="input-label">Retirement Age: </div>
                <input name="retirementAge" onChange={props.handleChange} value={props.state.retirementAge} type="number" placeholder="65" min={props.state.currentAge + 1} step="1" />
            </div>
            
            {/* Rate of return */}
            <div className="input-container">
                <div className="input-label">Rate of Return: </div>
                <input name="rateOfReturn" onChange={props.handleChange} value={props.state.rateOfReturn} type="number" placeholder="7" min="0" step="1" max="100" />
                <div className="input-unit">%</div>
            </div>
        </form>
    );
}

export default InputForm;