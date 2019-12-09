import React, {Component} from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Buenos Aires, ar', 
  'Washington, us',
  'Bogota, col',
  'Ciudad de México, mx',
  'Madrid, es',
  'Lima, pe',
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`); 
  }

  render(){
    return (
        <div className="App">
            <LocationList 
                  cities={cities} 
                  onSelectedLocation={this.handleSelectedLocation}
            
            />
        </div>
    );
  }

}

export default App;
