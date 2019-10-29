import React from "react";

class Input extends React.Component{

    render(){

            function loading() {
  function handleClick(e) {
    e.preventDefault();
    alert('The link was clicked.');
  }
}

        return(
            <div className='Card'>
                {/* this input field will show on the browser */}
                <form onSubmit = {this.props.loadWeather}>
                    <label for="cityName">City:</label><br/>
                    <input className="cityName" type="text" name="city" placeholder="City of your choice..."/><br/>
                    <label for="countryName">Country:</label><br/>
                    <input className="countryName" type="text" name="country" placeholder="Country of your choice..."/><br/>
                    <button onClick={loading}>Click me</button>
                </form>
            </div>
        )
    }
}

export default Input;