import React, { useState, useEffect } from 'react';
import Weather from './components/Weather';
import Loading from './components/Loading';
import axios from 'axios';
import { Jumbotron ,Container, Row, Col, Button } from "react-bootstrap";

const API_KEY = "251ae0d7d1833735b5d882f4210aaf32"

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(null);
  const [condition, setCondition] = useState(null);


  const getWeather = async () => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(`
      https://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=251ae0d7d1833735b5d882f4210aaf32&units=metric
    `)
    setIsLoading(false);
    setTemp(temp);
    setCondition(weather[0].main);
  }

  useEffect(() => {
    getWeather();
  })

  return (
    <Jumbotron style={{ height: 600, backgroundColor: 'white' }}>
      {
        isLoading
          ? <Loading/>
          : <Weather
            temp={Math.round(temp)}
            condition={condition}
          />
      }
    </Jumbotron>
  )
}

export default App;
