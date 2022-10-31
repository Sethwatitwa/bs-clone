import React from 'react'
import '../styles/Navigation.css'

const Navigation = () => {
  return (
    <nav>
        <div className='navigation-buttons'>
        <button style={{height:'30px', width: '160px'}}>Item Code</button><button style={{height:'30px', width: '150px'}}>Bar Code</button>
        <button style={{height:'30px', width: '160px'}}>Basic Information</button>
        <button style={{height:'30px', width: '160px'}}>Item Description</button>
        <button style={{height:'30px', width: '160px'}}>Unit Cost Price</button>
        <button style={{height:'30px', width: '160px'}}>Unit Selling Price</button>
        <button style={{height:'30px', width: '160px'}}>Stocking Type</button>
        <button style={{height:'30px', width: '160px'}}>Line Type</button>
        <button style={{height:'30px', width: '160px'}}>Basic Information</button>
        <button style={{height:'30px', width: '160px'}}>Item Category</button>
        <button style={{height:'30px', width: '160px'}}>WS Selling Price</button>
        <button style={{height:'30px', width: '170px'}}>WS Buying Price</button>
        </div>
    </nav>
  )
}

export default Navigation