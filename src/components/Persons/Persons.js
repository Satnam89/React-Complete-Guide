import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps calls');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate calls');
    //     if(nextProps.persons !== this.props.persons ||
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.changed !== this.props.changed) {
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate calls');
        return { message : 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevState , snapshot){
        console.log('[Persons.js] componentDidUpdate calls');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount calls');
    }
    render()
        {
        console.log('[Persons.js] child render calls');
        return this.props.persons.map( (person,index) =>{
        return (<Person 
            click= {() => this.props.clicked(index)}
            name= {person.name} 
            age= {person.age}
            key= {person.id}
            changed= {(event)=> this.props.changed(event, person.id)}/>
        );
    });
};
}

export default Persons;