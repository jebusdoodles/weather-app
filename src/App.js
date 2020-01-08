import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar'; 
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'; 
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended'; 
import { setCity } from './actions';

const cities = [
  'Buenos Aires, ar', 
  'Washington, us',
  'Bogota, col',
  'Ciudad de México, mx',
  'Barcelona, es',
  'Lima, pe',
];

class App extends Component {

  constructor(){
    super();

    this.state = { city: null };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);

    this.props.setCity(city); 
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

const mapDispatchToProps = dispatch => (
  {
    setCity: value => dispatch(setCity(value))
  }
);

const AppConnected = connect(null, mapDispatchToProps)(App);

export default AppConnected; 
