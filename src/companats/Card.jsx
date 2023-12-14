import React from 'react'
import { useDispatch } from 'react-redux'
import { cartslice } from './redux/cartslice'

   
export  const Card = (props) => {
  
  
  const dispatch = useDispatch()

  return (
  <div>

    <div className='single-product'> 
    <img src={props.dataa.image} alt={props.dataa.title} /> 
    <h3>{props.dataa.title}</h3>
    <p>Price: {props.dataa.price} $</p>
     <div>
      <button onClick={()=>dispatch(cartslice.actions.addtocart(props.dataa))}> Add to Cart</button>
      <button> Show More </button>
     </div>
  </div>

  </div>
  )
}
