import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Persons from './Person/Person';

class App extends Component {

  state ={
  persons: [
      { id: 1,name: 'Satnam Singh', age: 25 },
      { id:2,name:'Maninder Singh',age :26},
      { id:3,name:'Manjeet Singh',age :267}
     ],
     showPersons:false
}

deletePersonHandler = (personIndex) =>{
  const persons=[...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons: persons})
}


nameChangedHandler =(event, id)=> {
    const personIndex=this.state.persons.findIndex((p)=>{
    return p.id==id;
    });
    
    const person={
      ...this.state.persons[personIndex]
    };
    person.name=event.target.value;

    const persons=[...this.state.persons] 
    persons[personIndex]=person;
    this.setState({persons:persons})
  }
togglePersonsHandler= ()=>{
  const doesShow=this.state.showPersons;
  this.setState({showPersons:!doesShow});
}


  render() {

    let classes=[];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    const style1={
      backgroundColor:'green',
      font:'inherit',
      border:'1px solid green',
      padding:'8px',
      cursor:'pointer'
    }

    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map(
            (person,index) =>{
              return <Persons 
                click={() => this.deletePersonHandler(index) }
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event)=> this.nameChangedHandler(event, person.id)}/>
            })}
        </div> )
        style1.backgroundColor='red';
    }

  return (
          <div className="App">
            <h1>Hi, i am a React App</h1>
            <p className={classes.join(' ')}>This is working fine</p>
            <button 
              style={style1}
              onClick={this.togglePersonsHandler}> Toggle Persons </button>
            {persons}
          </div>
         
        );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi i am a react App'));
  }
}

export default App;

