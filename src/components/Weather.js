import React from 'react';
import PropTypes from "prop-types";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { faPooStorm, faCloud, faCloudSun, faCloudRain, faSnowman, faSmog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const weatherOptions = {
  Thunderstorm: faPooStorm,
  Drizzle:faCloudRain,
  Rain:faCloudRain,
  Snow:faSnowman,
  Atmosphere:faCloud,
  Clear:faCloudSun,
  Clouds:faCloud,
  Haze:faSmog,
  Mist:faSmog,
  Dust:faSmog
}

const Weather = ({temp, condition}) => {

  const today = new Date();

  const year = today.getFullYear()

  const month = today.getMonth()
  const MonthArr = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Octr", "Nov", "Dec")

  const date = today.getDate()

  const dayLabel = today.getDay() - 1
  const DayArr = new Array('Mon.','Tue.','Wen.','Thu.','Fri.','Sat.','Sun.')

  const weatherIcon = weatherOptions[condition]


  return (
    <Container>
    <Row style={{justifyContent: 'center', alignItems: 'center'}}>

      <div className="card shadow-lg p-3 mb-5 bg-white rounded border-0 rounded"
        style={{ width: '22rem', height: '41rem', textAlign:'center'}}
      >

        <Card.Body>

          <Card.Text>
            <h4 style={{fontSize:24}}>{DayArr[dayLabel]}&nbsp;{year}&nbsp;{MonthArr[month]}&nbsp;{date}</h4>
          </Card.Text>

          <Card.Text style={{marginTop: 50}}>
            <h1 style={{fontSize:80}}>서울</h1>
          </Card.Text>

          <Card.Title style={{marginTop: 60}}>
            <FontAwesomeIcon
              icon={weatherIcon}
              size="5x"
            />
          </Card.Title>

          <Card.Text style={{marginTop: 60}}>
            <h1 style={{fontSize:100}}>{temp}°</h1>
          </Card.Text>

        </Card.Body>
      </div>
    </Row>
    </Container>
  )
}

export default Weather;

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
}
