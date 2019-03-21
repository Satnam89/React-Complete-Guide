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
    const style1={
      backgrounColor:'Red',
      font:'inherit',
      border:'1px solid blue',
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
    }

  return (
          <div className="App">
            <h1>Hi, i am a React App</h1>
            <p>This is working fine</p>
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
//const app= props =>{
  //   const [personState, setPersonState]=useState({
  //     persons: [
  //       { name: 'Satnam Singh', age: 25 },
  //       { name:'Jatinder',age :23},
  //       { name:'Maninder Singh',age :26}
  //      ]
  //     //  otherState:'someValue'
  //     });
  
  // const [otherState,setOtherState]=useState('someOtherState');
  // //console.log(personState,otherState);
  
  //     const switchNameHandler =(newName) =>{
  //     setPersonState(
  //       {
  //         persons: [
  //             { name: newName, age: 25 },
  //             { name:'Maninder Singh',age : 30},
  //             { name:'Mani Singh',age : 30}
  //            ]
  //            //otherState:pesonsState.otherState 
  //       }
  //     )
  // }
  
  // const nameChangedHandler =(event)=> {
  //   setPersonState(
  //     {
  //       persons: [
  //           { name: 'Satnam', age: 25 },
  //           { name:event.target.value,age : 30},
  //           { name:'Mani Singh',age : 30}
  //          ]
  //     }
  //   )
  
  // }
  
  //   return (
  //           <div className="App">
  //             <h1>Hi, i am a React App</h1>
  //             <p>This is working fine</p>
  //             <button onClick={()=>switchNameHandler.bind(this,'Satnam')}>Click!</button>
  //             <Persons 
  //               name={personState.persons[0].name} 
  //               age={personState.persons[0].age}/>
  //             <Persons 
  //               name={personState.persons[1].name} 
  //               age={personState.persons[1].age}
  //               clicks ={switchNameHandler.bind(this,'SatnamBrar')}
  //               changed={nameChangedHandler}>
  //               My Hobbies: Rugby
  //               </Persons>
  //             <Persons 
  //               name={personState.persons[2].name} 
  //               age={personState.persons[2].age}/>
  //           </div>
           
  //         );
  // }
