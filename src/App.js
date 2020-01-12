import React, {Component} from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar'; 
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'; 
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer'; 

const cities = [
  'Buenos Aires, ar', 
  'Washington, us',
  'Bogota, col',
  'Ciudad de México, mx',
  'Barcelona, es',
  'Lima, pe',
];

class App extends Component {

  render(){
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
              <LocationListContainer 
                      cities={cities} 
              />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="datails">
                  <ForecastExtendedContainer  /> 
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default App; 
