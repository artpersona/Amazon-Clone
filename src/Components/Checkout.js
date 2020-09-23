import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__ad" src="https://anitrendz.net/news/wp-content/uploads/2019/05/kaguya-sample-ad-banner-2.png" alt=""/>
                <div>
                    <h2 className="checkout__title"> Your Shopping Basket</h2>
                    {/* <BasketItem/> */}
                    {/* <BasketItem/> */}
                </div>
            </div>


            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
