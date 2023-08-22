import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function useProducts() {

  const [allProducts, setAllProducts] = useState([]) //2차전지 종류 전체


  useEffect(()=>{

    axios.get('/data/products.json').then((res)=>(
      setAllProducts(res.data)
    ))
  }, [])


  return (
    [allProducts]
  )
}
