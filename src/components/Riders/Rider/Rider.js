import React, { Component } from 'react';
import './Rider.css'
import Button from '../../StyledComponents/Button';
import Input from '../../StyledComponents/Input';

class Rider extends Component {
    render(){
        console.log('[Rider.js] rendering...');
        const style = {
            '@media (min-width: 500px)':{
                width: '600px'
            }
        }
        return (
            <div className = "Rider" style = {style}>
                <img src = {this.props.img}/>
                <h2 style={{color:"#03A9F4"}}>{this.props.name} - <b>{this.props.number}</b></h2>
                <label>Nome</label><br/>
                <Input type="text" onChange = {this.props.changeName} value = {this.props.name}/><br/>
                <label>Numero</label><br/>
                <Input type="text" onChange = {this.props.changeNumber} value = {this.props.number}/><br/>
                <Button onClick = {this.props.click} >Elimina</Button>
            </div>
        );
    }
}

export default Rider;