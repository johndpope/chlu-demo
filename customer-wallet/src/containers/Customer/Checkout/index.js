import React, { Component } from 'react'
import PropTypes from 'prop-types'
// redux
import { connect } from 'react-redux'
import { getCheckout } from 'store/modules/data/checkout'
// components
import RaisedButton from 'material-ui/RaisedButton'
import PaySection from './sections/PaySection'
import ProductSection from './sections/ProductSection'
import CircularProgress from 'material-ui/CircularProgress'
// styles
import './styles.css'
import styles from 'styles/inlineStyles/containers/Customer/checkout'

const { buttonStyle } = styles


class Checkout extends Component {
  componentDidMount() {
    this.props.getCheckout()
  }

  render() {
    const {
      checkout: {
        loading,
        data: { rating, avatar, price, product }
      }
    } = this.props

    return (
      <div className='page-container checkout color-main'>
        <div className='container'>
          {
            loading
              ? <CircularProgress />
              : <div className='checkout-vendor'>
                  <ProductSection product={product} price={price} avatar={avatar} rating={rating} />
                  <div className='payment-label'>Payment Method</div>
                  <PaySection />
                  <div className='checkout-vendor__button'>
                    <RaisedButton
                      {...buttonStyle}
                      label='Continue'
                      fullWidth={true}
                      onClick={() => null}
                    />
                  </div>
              </div>
          }
        </div>
      </div>
    )
  }
}

Checkout.propTypes = {
  checkout: PropTypes.object.isRequired,
  getCheckout: PropTypes.func.isRequired
}

const maoStateToProps = store => ({
  checkout: store.data.checkout
})

const mapDispatchToProps = {
  getCheckout
}

export default connect(maoStateToProps, mapDispatchToProps)(Checkout)
