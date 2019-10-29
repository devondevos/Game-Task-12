import React from "react";

class Weather extends React.Component{

    render(){

        return(
//this allows you to see any cities weather that you entered
            <div className="weather">
                {
                    this.props.country && this.props.city && <p className="weatherCity">Location: 
                        <span className="cityName">  {this.props.city}, {this.props.country}</span>                    
                    </p> /*this is the City's name*/
                }
                
                {
                    this.props.temperature && <p className="weatherTemp">Temperature: 
                        <span className="temp">  {this.props.temperature}°C</span>
                    </p> /*this is the tempreture of the city entered*/
                }

                {
                    this.props.humidity && <p className="weatherHumidity">Humidity: 
                        <span className="humidity">  {this.props.humidity}</span>
                    </p> /*this is the humidity of the city entered*/
                }

                {
                    this.props.description && <p className="weatherDescription">Conditions:  
                        <span className="description">  {this.props.description}</span>
                    </p> /*this describes the weather*/
                }

                {
                    this.props.error && <p className="error">{this.props.error}</p>
                    /*if there is an error, this will show*/
                }
        
            </div>
        )
    }
}

export default Weather;