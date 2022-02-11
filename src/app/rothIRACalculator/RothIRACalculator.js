import React from 'react';

import './RothIRACalculator.css';

import InputForm from './inputForm/InputForm';
import OutputContainer from './outputContainer/OutputContainer';

class RothIRACalculator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            startingBalance: 0,
            annualContribution: 5500,
            currentAge: 18,
            retirementAge: 65,
            rateOfReturn: 7
        };
    }
    
    handleFormChange(event) {
        let value = event.target.value;
        
        if (!isNaN(Number(value)) && value !== "") {
            value = Number(value);
            
            if (value < 0) {
                value = Math.abs(value);
            }
        }
        
        this.setState({
            [event.target.name]: value
        });
    }
    
    handleFormSubmit(event) {
        console.log(this.state);
    }
    
    render() {
        return (
            <div className="roth-ira-calculator">
                <InputForm handleChange={(event) => this.handleFormChange(event)} handleSubmit={(event) => this.handleFormSubmit(event)} state={this.state} />
                <OutputContainer state={this.state} />
            </div>
        );
    }
}

export default RothIRACalculator;