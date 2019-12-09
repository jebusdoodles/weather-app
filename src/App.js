import React from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Buenos Aires, ar', 
  'Washington, us',
  'Bogota, col',
  'Ciudad de México, mx',
  'Madrid, es',
  'Lima, pe',
]

function App() {
  return (
    <div className="App">
      <LocationList cities={cities} />
    </div>
  );
}

export default App;
