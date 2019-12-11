import React, {Component} from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
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
      <Grid>
        <Row>
          Titulo
        </Row>
        <Row>
          <Col xs={12} md={6}>
              <LocationList 
                      cities={cities} 
                      onSelectedLocation={this.handleSelectedLocation}
                
              />
          </Col>
          <Col xs={12} md={6}>
            <div className="datails">

            </div>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default App;
