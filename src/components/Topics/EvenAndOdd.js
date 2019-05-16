import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray : [],
            oddArray : [],
            userInput : '',
        }
    
    }
    handleChange(value){
        this.setState({userInput: value});
    }
    assignEAO = userInput =>{
        let s = userInput.split(',');
        let evens = []
        let odds = [];
        for(let i =0; i< s.length; i++){
            if((s[i]) % 2 === 0){
                evens.push(s[i])
            }else{
                odds.push(s[i])
            }
        }
        this.setState({evenArray : evens, oddArray : odds})
    }
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => {this.assignEAO(this.state.userInput)}} >Sort</button>
                <span className="resultsBox" >Even Array: [ {this.state.evenArray.join(', ')} ] </span>
                <span className="resultsBox" >Odd Array: [ {this.state.oddArray.join(', ')} ] </span>
            </div>
        )
    }
}

export default EvenAndOdd;