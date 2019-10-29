import React from "react";
import Weather from "./Components/Weather";
import Input from "./Components/Input";
import Header from "./Components/Header";
import "./App.css";

//The code helps the user check the weather.
const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

class App extends React.Component {

  state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //Weather is where we'll call and use the api
  Weather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`);
    const response = await api_call.json(); 
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    }else{
      this.setState({
        error: "Please Complete the search values..."
      })
    }
  }

  render() {
  return (
  <div className="task12">
        <div>
          <Header />
        </div>
        <div>
          <Input loadWeather={this.Weather} />
          <div className="weather">
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            /> 
           {/*this is where the processed information will be shown*/}
            </div>
        </div>
    </div>


    )
  }
}
export default App;