import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import WeatherData from '/src/WeatherData/data.json';

class SimpleCard extends React.Component {
  render() {
    return (
      
      <Card raised={true}>
        <CardContent>
               
            {WeatherData.map((weatherDetail, index) => {
             return <div>
              <Typography variant="h4" gutterBottom>    
              Temperature : {weatherDetail.temp} 
              </Typography> 
              <Divider light="true" />
              <Typography variant="h5"  color="textSecondary" gutterBottom>  
              Date : {weatherDetail.date} 
              <Divider light="true" />
              Location: { weatherDetail.location }              
              <Divider light="true" />
              Humidity : {weatherDetail.humidity}            
              <Divider light="true"  />
              Wind : {weatherDetail.wind}             
              <Divider light="true" />
              Description : {weatherDetail.gdesc}
              <Divider light="true" />
              Predicted : {weatherDetail.predicted} 
              </Typography> 
              <Divider />
              <Typography variant="h4"  gutterBottom>
              Recommendation : {weatherDetail.recommendation}
              </Typography> 
              <Divider />
              <br/>
              <br/>
              <br />
            </div>
        })}
         
       
        </CardContent>
      </Card>
    );
  }
}
export default SimpleCard;
