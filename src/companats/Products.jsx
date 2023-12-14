import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import './css/products.css'
import { Card } from './Card'

export const Products = () => {
    const [products,setproducts]= useState() 
    useEffect(()=>{ 
        axios.get('https://fakestoreapi.com/products').then((resp)=>setproducts(resp.data
        )).catch((err)=>console.log(err))


    },[])  
     console.log(products);
    return (
    <div className='products-main'>
        <h1> Our Products  </h1>
        <div className='products-container'>
        {
        products?.map((pord)=><Card key={pord.id} dataa={pord}/>)
        
      }
        </div>
    </div>
  )
}
