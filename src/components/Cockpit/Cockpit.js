import React from 'react';
import './Cockpit.css'
import Button from '../StyledComponents/Button';
import Title from '../StyledComponents/Title';
import Header from '../StyledComponents/Header'; 
import { directive } from '@babel/types';

const Cockpit = (props) => {

    let classes = [];
    if(props.riders.length <= 2){
        classes.push('red');
    }
    if(props.riders.length <= 1){
        classes.push('bold');
    }
    if(props.riders.length === 0 ){
      classes = []; // when there is no riders
    }
    return (
        <div>
        <Header>
            <Title>{props.title}</Title>
        </Header>
        <h3>2019 Championship</h3>
        <Button onClick = {props.toggleRidersHandler}> Show Riders</Button>    
        </div>
    );
}

export default Cockpit;