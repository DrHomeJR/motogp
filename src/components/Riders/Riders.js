import React from 'react';
import Rider from './Rider/Rider';

class Riders extends React.Component{
  static getDerivedStateFromProps(props, state){
    console.log('[Riders.js] getDerivedStateFromProps');
    return state;
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[Riders.js] shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Riders.js] getSnapshotBeforeUpdate');
  }
  render(){
    console.log('[Riders.js] rendering');
    return this.props.riders.map( (rider, i) => {
      return (  
        <Rider 
          img = {rider.img}
          number = {rider.number}
          click = { () => this.props.clicked(i)}
          name={rider.name}
          age={rider.age}
          key={rider.id}
          changeName = { (event) => this.props.changeName(rider.id,event)}
          changeNumber = { (event) => this.props.changeNumber(rider.id,event)}
        />
      );
    })}};

export default Riders;