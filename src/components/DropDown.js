import React from 'react';
import '../styles/dropdown.css'

const DropDown = ({label, options}) => {
  return (
    <div className='dropdown-group'>
        <label className='label'>{label}</label>

        <select className='select-field'>
            {options.map((op) => <option value={op}>{op}</option>)}
        </select>
    </div>
  )
}

export default DropDown