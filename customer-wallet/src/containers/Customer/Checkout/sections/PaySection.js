import React from 'react'
// components
import RaisedButton from 'material-ui/RaisedButton'
// assets
import { buttonsData } from '../assets/data'

const Product = () => (
  <div className='checkout-vendor__pay'>
    <h3>Pay Using</h3>
    <div className='checkout-vendor__pay-buttons'>
      {buttonsData.map(({ label, disabled }, idx) => (
        <RaisedButton
          key={idx}
          label={label}
          primary
          disabled={disabled}
          className='checkout-vendor__pay-button'
          onClick={() => ''}
        />
      ))}
    </div>
  </div>
)

export default Product