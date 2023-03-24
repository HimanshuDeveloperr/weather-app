// import React from 'react'
// import { Button } from 'react-bootstrap'
// import './City.css' // import the CSS file

// const City = (props) => {

//   const HandleUnitsClicks=(e)=>{
//      const button=e.currentTarget;
//      const currentUnit=button.innerText.slice(1)

//     const isCelcius=currentUnit==='c'
//     button.innerText=isCelcius? "°C":"°F"
//     let unit;
//     if(isCelcius){
//        unit='metric'
//     }else{
//       unit='imperial'
//     }
//     props.onClick(unit)
//   }
//   return (
//     <div className='city-container'>
//       <input type='text' name='City' placeholder='Enter city name' className='city-input' />
      
//       <Button onClick={() => props.onClick('metric')} variant='outline-light' className='c-button'>°C</Button>
// <Button onClick={() => props.onClick('imperial')} variant='outline-light' className='f-button'>°F</Button>
//     </div>
//   )
// }

// export default City
import React from 'react'
import { Button } from 'react-bootstrap'
import './City.css'

const City = ({ onClick, units,onEnter }) => {

  const enterKeyPressed=(e)=>{
    if(e.keyCode===13){
      onEnter(e.currentTarget.value)
    }
  }

  return (
    <div className='city-container'>
      <input onKeyDown={enterKeyPressed} type='text' name='City' placeholder='Enter city name' className='city-input'/>
      {units === 'metric' ? (
        <Button onClick={() => onClick('imperial')} className='f-button' variant='outline-light'>°F</Button>
      ) : (
        <Button onClick={() => onClick('metric')} className='c-button' variant='outline-light'>°C</Button>
      )}
    </div>
  )
}

export default City
