import React from 'react';
import './App.css';
import InputForm from './inputForm/InputForm';
import OutputContainer from './outputContainer/OutputContainer';
import TitleBar from './TitleBar';

class App extends React.Component {
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
            <div className="app">
                <TitleBar />
                <InputForm handleChange={(event) => this.handleFormChange(event)} handleSubmit={(event) => this.handleFormSubmit(event)} state={this.state} />
                <OutputContainer state={this.state} />
            </div>
        );
    }
}

export default App;