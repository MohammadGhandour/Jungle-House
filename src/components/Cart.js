import '../styles/Cart.css'
import { useEffect } from 'react'

function Cart({ cart, updateCart, isOpen, setIsOpen }) {

    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

    useEffect(() => {
        console.log(`This message will be displayed everytime the total changes.I have ${total}€ to pay 💸`);
    }, [total])

    useEffect(() => {
        console.log('This message will be displayed only at first rendering.');
    }, [])

    function closeCart() {
        setIsOpen(false);
        document.querySelector('.cart').classList.remove('active');
    }

    function openCart() {
        setIsOpen(true);
        document.querySelector('.cart').classList.add('active');
    }


    return isOpen ? (
        <div className='cart active'>
            <button onClick={() => closeCart()} className='toggleBtn'>Close Cart <i className="fa-solid fa-cart-shopping"></i></button>
            {cart.length > 0 ? (
                <div className='cartContent'>
                    <div className='cartItems'>
                        {cart.map(({ name, price, amount, cover }, index) => (
                            <div key={`${name}-${index}`} className="cartItem">
                                <div>{name} {price}$ x {amount}</div>
                                <img src={cover} alt='item-cover' className='cartItemCover' />
                            </div>
                        ))}
                    </div>
                    <h3>Total :{total}$</h3>
                    <button className='clearCartBtn' onClick={() => updateCart([])}>Empty the cart</button>
                </div>
            ) : (
                <div className='cartContent'>Your cart is empty</div>
            )}
        </div>
    )
        : (
            <div className='cart'>
                <button onClick={() => openCart()} className="toggleBtn">Open Cart <i className="fa-solid fa-cart-shopping"></i></button>
            </div>
        )
}
export default Cart
