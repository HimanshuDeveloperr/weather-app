import React from 'react'
import { Card } from 'react-bootstrap'
import './Description.css'

const Description = (props) => {
  return (
    <div>

        <Card className='container'>
            <Card.Body>
            <Card.Title> 
                <h3>Weather Details</h3>
            </Card.Title>
            <Card.Subtitle style={{textAlign:'center',marginTop:'15px',fontSize:'large'}}>{props.weatherData.name}
            <span><img src={props.weatherData.iconURL} alt='cloudes'/></span></Card.Subtitle>
            <Card.Text className='span' >{props.weatherData.description}</Card.Text>
            <Card.Text className='span'>Humidity <span className='span'>{props.weatherData.humidity}%</span></Card.Text>
            <Card.Text className='span'>Wind <span className='span'>{props.weatherData.speed.toFixed()}Km/h</span></Card.Text>

            </Card.Body>
        </Card>








    </div>
  )
}

export default Description