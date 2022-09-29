import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/slices/cartSlice';
// import { addTocart } from '../actions/cartAction'

export default function Item({ product }) {

  const dispatch = useDispatch();
  // const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();

  // function handleAddToCart() {
  //   if (!user) {
  //     navigate('/signin')
  //   } else {
  //     dispatch(addTocart({...product, quantity: 1}))
  //   }
  // }
  
  return (
    <div className='product' >
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        <button onClick={()=> dispatch(addToCart({...product, quantity: 1}))}> Add To Cart</button>
      </div>
  )
}
