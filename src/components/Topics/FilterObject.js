import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            heroes: [
                {
                    name: 'Tony Stark',
                    age: 48,
                    food: 'Cheese Burger'
                },
                {
                    name: 'Peter Parker',
                    age: 16,
                    food:'Cherry pie'
                },
                {
                    name: 'Thor',
                    age: 1050,
                    title: 'Thunder God'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(value){
        this.setState({userInput: value})
    }

    filterHeroes(){
        let heroes= this.state.heroes;
        let filter= [];
        for(let i=0; i < heroes.length; i++){
            if (heroes[i].hasOwnProperty(this.state.userInput)){
                filter.push(heroes[i])
            }
        }
        this.setState({filteredArray: filter})
    }
   



    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original:{JSON.stringify(this.state.heroes,null,10)}</span>
                <input className="inputLine" onChange= {(e) =>this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick ={() => this.filterHeroes(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}

export default FilterObject;