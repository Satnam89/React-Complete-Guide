import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass'; 
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef=React.createRef();
    }

    static contextType=AuthContext;
    componentDidMount(){
        // this.inputElement.focus(); 
        console.log(this.context.autheticate);
        this.inputElementRef.current.focus();
    }
    render(){
        console.log('[Peron.js] rendering calls');    
        return (
            <Aux>
            {this.context.autheticate ? <p> Authenticated! </p> : <p>Please log in!</p>}
            
            <p key='i1' onClick={this.props.click}> 
            I am {this.props.name} , My age is: {this.props.age} 
            </p>
            <p key='i2'> {this.props.children}</p>
            <input 
                key='i3'
                    // ref={(inputE) => { this.inputElement=inputE } } 
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}/>
            </Aux>);
        } ;
}
Person.propTypes={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);