import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleButtonRef=useRef(null);
    const authContext=useContext(AuthContext);

    useEffect(() => {
      console.log('[Cockpit.js] useEffect Hooks');
      // setTimeout(() => {
      //   alert('save data to cloud');
      // }, 1000);
      toggleButtonRef.current.click();
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    },[]);

    useEffect(() => {
      console.log('[Cockpit.js] useEffect 2 Hooks');
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect 2');
      };
    });

    let assignedClasses=[];
    let btnClass= '';
    if(props.showPersons){
        btnClass= classes.Red;
    }
    
    if(props.personsLength <=2){
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <=1){
      assignedClasses.push(classes.bold);
    }
    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working fine</p>
            <button ref={toggleButtonRef} className={btnClass}
            onClick={props.clicked}> Toggle Persons </button>
            
            <button onClick={authContext.login}> Login </button>
           
        </div>
    );
}
export default React.memo(cockpit);