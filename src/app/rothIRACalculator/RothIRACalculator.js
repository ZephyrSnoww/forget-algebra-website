import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

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
        this.setState({
            [event.target.name]: (isNaN(Number(event.target.value)) ? event.target.value : Number(event.target.value))
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