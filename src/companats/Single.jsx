import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Single = () => {
    const params = useParams() 
    const id = params.id 
      const[prod, setprod ] = useState()
      useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(resp=>console.log(resp))
        .catch(err=>console.log(err))
      },[])
        return (
    <div>

    </div>
 )
}
