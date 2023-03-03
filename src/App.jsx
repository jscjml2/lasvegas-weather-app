import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function App() {
  // const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=36.19&lon=-115.18&exclude=minutely,alerts&appid=d961abc9511e150cf4edc4ace5e9b94d&units=imperial'
  // const url = 'https://api.openweathermap.org/data/2.5/weather?lat=36.19&lon=-115.18&appid=d961abc9511e150cf4edc4ace5e9b94d&units=imperial'

  // make a variable called url, set to the actual API call with its key.
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=lasvegas&appid=d961abc9511e150cf4edc4ace5e9b94d&units=imperial'

  // make a repo(?) this is used in our getData function, in conjunction with axios.
  const [repo, setRepo] = useState([]);

  // define a function getData. This uses axios to get data from an API at url.
  // it then uses the repo declared above to set everything into?
  const getData = () => {
    axios.get(url)
      .then((response) => {
        // console.log(response);
        // const myRepo = response.data;
        setRepo(response.data);
      });
  };

  // afterwards, make a useEffect function to call the getData function, and set [url]
  // as the second parameter.
  // NOTE: If we did not do this, and instead just called getData() by itself... it would
  // continuously run the function over and over. This would strain the API server,
  // and make them stop allowing requests. So this whole useEffect thing makes it that
  // it only calls the API once.
  useEffect(() => getData(), [url]);

//// These snippets of code take a unix timestamp (fetched from an API), and converts them
//// into PST, in xx:xx AM format.
////////////////////////////////////////////////////
 // NOTE: We had to use a question mark after the sys... otherwise we were getting an undefined error.
 // so instead of "repo.sys.sunrise", we have to use "repo.sys?.sunrise"...
 let timefetched = new Date(repo.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
 let sunrisetime = new Date(repo.sys?.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
 let sunsettime = new Date(repo.sys?.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
 ////////////////////////////////////////////////////

 return (
    <div className="weather-wrapper">

      <div className="top">
        <div className="cityname">Las Vegas, NV</div>
        <div className="description">
          {repo.weather ? <img src={`/icons/${repo.weather[0].icon}.png`} alt="weather" /> : null}
          <div className="text">
            {repo.weather ? <p>{repo.weather[0].main}</p> : null}
          </div>
        </div>
        {repo.main ? <div className="temperature">{repo.main.temp.toFixed()}°F</div> : null}
      </div>

      <div className="middle">
        <div className="feelslike">
          <p className="middleparagraph1">Wind Speed: </p>
          {repo.main ? <p className="middleparagraph">{repo.wind?.speed} mp/h</p> : null}
        </div>
        <div className="humidity">
          <p className="middleparagraph1">Humidity: </p>
          {repo.main ? <p className="middleparagraph">{repo.main.humidity}%</p> : null}
        </div>
      </div>

      <div className="bottom">
        <div className="sunrisetime">
          <p className="bottomparagraph1">Sunrise Time: </p>
          {repo.sys ? <p className="bottomparagraph">{sunrisetime}</p> : null}
        </div>
        <div className="sunsettime">
          <p className="bottomparagraph1">Sunset Time: </p>
          {repo.sys ? <p className="bottomparagraph">{sunsettime}</p> : null}
        </div>
      </div>

      <div className="footer">
        {repo.main ? <p>Data was fetched at: {timefetched}</p> : null}
      </div>

    </div>
  );
}

export default App;
