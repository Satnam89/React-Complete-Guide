import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor calls');
  }

  state ={
  persons: [
      { id: 1,name: 'Satnam Singh', age: 25 },
      { id:2,name:'Maninder Singh',age :26},
      { id:3,name:'Manjeet Singh',age :26}
     ],
     showPersons: false,
     showCockpit: true,
     changeCounter: 0,
     autheticate:false
}


static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps calls');
    return state;
}

componentDidMount(){
    console.log('[App.js] componentDidMount calls')
}

shouldComponentUpdate(nextProps, nextState){
  console.log('[Apps.js] shouldComponentUpdate calls');
  return true;
}

componentDidUpdate(){
  console.log('[Apps.js] componentDidUpdate calls');
  //console.log(snapshot);
}

loginHandler= () =>{
    this.setState({autheticate:true});
};

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
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

togglePersonsHandler= ()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
}

render() {
    console.log('[App.js] render calls');
    let persons=null;
    if(this.state.showPersons){
      persons=
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.autheticate}/>
    }

  return (
            <Aux>
              <button onClick={()=> this.setState({showCockpit:false})}>
              Remove Cockpit! </button>
                <AuthContext.Provider value={{
                  autheticate:this.state.autheticate,
                  login: this.loginHandler}
                  }>
                  {this.state.showCockpit ? 
                  (<Cockpit
                    title= {this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonsHandler}/>
                  ): null 
                  }
                  {persons}
                </AuthContext.Provider>
            </Aux>  
        );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi i am a react App'));
  }
}

export default withClass(App, classes.App);

