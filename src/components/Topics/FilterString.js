import React, {Component} from "react";

class FilterString extends Component {
    constructor(){
        super()
        this.state ={
            names: ["James","Eric","Jorge","Timmy","Amanda","Christina","Tammy"],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(value){
        this.setState({userInput : value})
    }
    handleFilter(){
        let names =this.state.names
        let filter= []
        for(let i =0; i <names.length; i++){
            if (names[i].includes(this.state.userInput)){
                filter.push(names[i])
            }
        }
        this.setState({filteredArray: filter})
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names:  [{this.state.names.join(', ')}]</span>
                <input className="inputLine" onChange= {(e) => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.handleFilter(this.state.userInput)} >Filter</button>
                <span className="resultsBox filterStringRB">Filtered Name: {this.state.filteredArray.join(', ')}</span>
            </div>
        )
    }
}

export default FilterString;