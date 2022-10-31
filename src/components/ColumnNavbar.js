import React from 'react'
import '../styles/ColumnNavbar.css'

const ColumnNavbar = () => {
  return (
   <nav>
    <div className='column-navbar'>
        <span className='column'>
            Drag a column header  here to group by that column
        </span>

    </div>
   </nav>
  )
}

export default ColumnNavbar