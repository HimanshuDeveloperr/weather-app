import React from 'react'
import { Card } from 'react-bootstrap'
import './Description.css'

const Description = () => {
  return (
    <div>

        <Card className='container'>
            <Card.Body>
            <Card.Title>
                <h3>Weather Details</h3>
            </Card.Title>
            <Card.Subtitle style={{textAlign:'center',marginTop:'15px',fontSize:'large'}}>Mumbai
            <span>icon</span></Card.Subtitle>
            <Card.Text className='span' >Cloudy <span className='span'>10%</span></Card.Text>
            <Card.Text className='span'>Humidity <span className='span'>62%</span></Card.Text>
            <Card.Text className='span'>Wind <span className='span'>8Km/h</span></Card.Text>

            </Card.Body>
        </Card>








    </div>
  )
}

export default Description