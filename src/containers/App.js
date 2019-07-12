import React, { Component } from 'react';
import './App.css';
import Riders from '../components/Riders/Riders';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component{

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      riders: [
        { id: 1, name: 'Rossi', number: '46', img: 'https://www.oasport.it/wp-content/uploads/bfi_thumb/Valentino-Rossi-2-o6efqv694jeeygf5ihikez7dr7zu4uxukwzbxo1v5s.jpg'},
        { id: 2, name: 'Marquez', number: '93', img: 'https://immagini.insella.it/sites/default/files/styles/contenuto-news-big-anteprima/public/news_anteprima/2019/03/marqeuz.jpg?itok=t3ChXHtB'},
        { id: 3, name: 'Lorenzo', number: '99', img: 'http://cdn-motosprint.corrieredellosport.it/images/2019/03/07/173154603-b7b1db2c-1a76-44af-ba8f-72037e95a2cf.jpg'},
        { id: 4, name: 'Maverick', number: '12', img: 'https://www.oasport.it/wp-content/uploads/bfi_thumb/Maverick-Vinales-2-o41ppwvxva69tgfhyf5c8v62jqwwe4rqcnrhgn0nwg.jpg'},
        { id: 5, name: 'Rossi', number: '46', img: 'https://www.oasport.it/wp-content/uploads/bfi_thumb/Valentino-Rossi-2-o6efqv694jeeygf5ihikez7dr7zu4uxukwzbxo1v5s.jpg'},
        { id: 6, name: 'Marquez', number: '93', img: 'https://immagini.insella.it/sites/default/files/styles/contenuto-news-big-anteprima/public/news_anteprima/2019/03/marqeuz.jpg?itok=t3ChXHtB'},
        { id: 7, name: 'Lorenzo', number: '99', img: 'http://cdn-motosprint.corrieredellosport.it/images/2019/03/07/173154603-b7b1db2c-1a76-44af-ba8f-72037e95a2cf.jpg'},
        { id: 8, name: 'Maverick', number: '12', img: 'https://www.oasport.it/wp-content/uploads/bfi_thumb/Maverick-Vinales-2-o41ppwvxva69tgfhyf5c8v62jqwwe4rqcnrhgn0nwg.jpg'}
      ],
      showRiders: true
    }
  }
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps');
    return state
  }
  render(){
    console.log('[App.js] render');
    let riders = null;
    if (this.state.showRiders)
      riders = <Riders 
        riders = {this.state.riders}
        clicked = {this.deleteRiderHandler}
        changeName={this.nameChangeHandler}
        changeNumber={this.numberChangedHandler} />
    return(
      <div className = "App">
        <Cockpit 
          title = {this.props.appTitle}
          riders = {this.state.riders}
          toggleRidersHandler = {this.toggleRidersHandler} />
          <div className="Rider-container">
          {riders}
          </div>
      </div>
    );
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  // Controllers

  toggleRidersHandler = () => {
    this.setState({
      showRiders: !this.state.showRiders
    })
  }
  nameChangeHandler = (id, event) => {
    const riderIndex = this.state.riders.findIndex( r => {return r.id === id });
    const rider = { ...this.state.riders[riderIndex] };
    rider.name = event.target.value;

    const riders = [...this.state.riders];
    riders[riderIndex] = rider;
    this.setState( { riders: riders } );
  }
  numberChangedHandler = (id, event) => {
    const riderIndex = this.state.riders.findIndex( r => {return r.id === id });
    const rider = { ...this.state.riders[riderIndex] };
    
    rider.number = event.target.value;
    const riders = [...this.state.riders];
    
    riders[riderIndex] = rider;

    this.setState( { riders: riders } );
    
  }
  deleteRiderHandler = (riderIndex) => {
    //const riders = this.state.riders.slice; // copy before modify 
    const riders = [...this.state.riders]; // copy before modify 
    riders.splice(riderIndex, 1);
    this.setState({riders: riders})
  }
}

export default App;

