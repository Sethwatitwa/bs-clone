import React from 'react';
import '../styles/input.css'

const Input = ({label, type}) => {
  return (
    <div className='input-group'>
        <label className='label'>{label}</label>
        <input className='input-field' type={type}></input>
    </div>
  )
}

export default Input