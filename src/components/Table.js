import React from 'react'
import '../styles/Table.css'

const Table = () => {
  return (
    <div className='app-container'>
        <table>
            <thead>
                <tr>
                    <th>Item Code</th>
                    <th>Bar Code</th>
                    <th>Item Description</th>
                    <th>Unit cost Price</th>
                    <th>Unit Selling Price</th>
                    <th>Stocking Type</th>
                    <th>Line Type</th>
                    <th>Item Category</th>
                    <th>WS Selling Price</th>
                    <th>WS Buying Price</th>

                </tr>

            </thead>
            <tbody>
                <tr>
                    <td>ITM-434</td>
                    <td>ITM-434</td>
                    <td>KONYAGI</td>
                    <td>200.0000</td>
                    <td>250.0000</td>
                    <td>S</td>
                    <td>P</td>
                    <td>FMC</td>
                    <td>240.00</td>
                    <td>220.00</td>
                </tr>
                <tr>
                    <td>ITM-433</td>
                    <td>ITM-433</td>
                    <td>get item</td>
                    <td>0.0000</td>
                    <td>0.0000</td>
                    <td>S</td>
                    <td>P</td>
                    <td>FMC</td>
                    <td>0.0000</td>
                    <td>0.0000</td>
                </tr>
                <tr>
                    <td>ITM-432</td>
                    <td>ITM-432</td>
                    <td>Blue Ice</td>
                    <td>0.0000</td>
                    <td>1500.0000</td>
                    <td>S</td>
                    <td>P</td>
                    <td>FMC</td>
                    <td>0.0000</td>
                    <td>0.0000</td>
                </tr>
                <tr>
                <td>ITM-431</td>
                    <td>ITM-431</td>
                    <td>Blue Ice 250</td>
                    <td>137.0000</td>
                    <td>150.0000</td>
                    <td>S</td>
                    <td>P</td>
                    <td>FMC</td>
                    <td>150.00</td>
                    <td>0.0000</td>
                </tr>
                <tr>
                    <td>ITM-430</td>
                    <td>ITM-430</td>
                    <td>Accounting Software</td>
                    <td>1000.0000</td>
                    <td>0.0000</td>
                    <td>N</td>
                    <td>P</td>
                    <td>FMC</td>
                    <td>0.0000</td>
                    <td>0.0000</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table