import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super()
        this.state ={
            userInput : '',
            palindrome: '',
        }

    }
    handleChange(value){
        this.setState({userInput: value})
    }
    checkPalindrome(userInput){
        let reversed= userInput.split('').reverse().join('');
        if(reversed === userInput){
           this.setState({palindrome: 'true'});
        }else {
            this.setState({palindrome: 'false'})
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome:</h4>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={()=> this.checkPalindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome