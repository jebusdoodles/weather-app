import React, {Component} from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { createStore } from 'redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar'; 
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'; 
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended'

const cities = [
  'Buenos Aires, ar', 
  'Washington, us',
  'Bogota, col',
  'Ciudad de México, mx',
  'Barcelona, es',
  'Lima, pe',
];

const store = createStore(()=>{},
                              window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                         );
const setCity = (value)=> ({ type: 'setCity', value});

class App extends Component {

  constructor(){
    super();

    this.state = { city: null };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);

    store.dispatch(setCity(city)); 
  }

  render(){
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
              <LocationList 
                      cities={cities} 
                      onSelectedLocation={this.handleSelectedLocation}
                
              />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="datails">
               {
                 city &&
                    <ForecastExtended city={city} /> 
               } 
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default App;
