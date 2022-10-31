import React from 'react'
import '../styles/MiddleButtons.css'

const MiddleButtons = () => {
  return (
  <nav>
    <div className='middle-buttons'>
        <button style={{height:'30px', width: '150px'}}>Basic Information</button>  <button style={{height:'30px', width: '150px'}}>Other Information</button>  <button style={{height:'30px', width: '150px'}}>Unit of Measure</button>

    </div>
  </nav>
  )
}

export default MiddleButtons