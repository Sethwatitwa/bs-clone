import React from 'react';
import '../styles/Border.css'
import RightSection from './RightSide';
import LeftSection from './LeftSide'


const Boarder = () => {
  return (
    <div className='border-component'>
            <LeftSection/>
            <RightSection/>
     </div>
    
  )
}

export default Boarder