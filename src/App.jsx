import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function App() {
  //   const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=36.19&lon=-115.18&exclude=minutely,alerts&appid=d961abc9511e150cf4edc4ace5e9b94d&units=imperial'
  //   const [product, setProduct] = useState(null)

  // useEffect(() => {
  //   axios.get(url)
  //     .then(response => {
  //       setProduct(response.data)
  //     })
  // }, [url])
  
  // this line of code creates a variable named s.
  // s takes in the Unix timestamp (1677794400), and converts it to normal time.
  // toLocaleTimeString gives us the actual time (i.e: 2:30AM).
  // if we used toLocaleDateString, it would give us the date instead (01/01/2000).

  // 

///// This snippet of code below takes the unix timestamp, and displays it in
///// xx:xx AM format. It is also already converted to PST. Just change the variables around
///// for our sunrise, and sunset time. dt = the time that the data was fetched from the API.
////////////////////////////////////////////////////
  // let x = product.current.dt;

  // let date = new Date(x * 1000);
  // let s = date.toLocaleTimeString("en-US");
  // now we can just use {s} inside of the html stuff to call the variable.
////////////////////////////////////////////////////

{/* <h2 className='cityname'>Las Vegas, NV</h2>
<div className="description">
  <h3>Sunny</h3>
  <img src="/icons/01d.png" alt="" />
</div>
<div className="temperature">72°F</div> */}


  // if(product){
  return (
    <div className="weather-wrapper">
      <div className="top">
        <div className="cityname">Las Vegas, NV</div>

        <div className="description">
          <img src="/icons/alt.png" alt="" />
          <div className="text">
            <p>Sunny</p>
          </div>
        </div>

        <div className="temperature">72°F</div>

      </div>

      <div className="middle">
        <div className="feelslike">
          <p className="middleparagraph">Feels Like: </p>
          <p className="middleparagraph">70°F</p>
        </div>
        <div className="humidity">
          <p className="middleparagraph">Humidity: </p>
          <p className="middleparagraph">20%</p>
        </div>
      </div>

      <div className="bottom">
        <div className="sunrisetime">
          <p className="bottomparagraph">Sunrise Time: </p>
          <p className="bottomparagraph">5:00AM</p>
        </div>
        <div className="sunsettime">
          <p className="bottomparagraph">Sunset Time: </p>
          <p className="bottomparagraph">5:00PM</p>
        </div>
      </div>

      <div className="footer">
        <p>Data was fetched at: 2:00AM</p>
      </div>

    </div>
  );
  // }
}

export default App;
