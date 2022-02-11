import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import './App.css';
import Home from './home/Home';

import RothIRACalculator from './rothIRACalculator/RothIRACalculator';
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
    
    // handleFormChange(event) {
    //     this.setState({
    //         [event.target.name]: (isNaN(Number(event.target.value)) ? event.target.value : Number(event.target.value))
    //     });
    // }
    
    // handleFormSubmit(event) {
    //     console.log(this.state);
    // }
    
    render() {
        return (
            <Router>
                <div className="app">
                    <TitleBar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/roth-ira-calculator" element={<RothIRACalculator />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;