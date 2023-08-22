import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../api/firebase'


export default function useProducts() {

  const [allProducts, setAllProducts] = useState([]) //2차전지 종류 전체


  useEffect(()=>{

    // axios.get('/data/products.json').then((res)=>(
    //   setAllProducts(res.data)
    // ))
    getProducts().then((res)=>(
      setAllProducts(res)
    ))
  }, [])


  return (
    [allProducts]
  )
}
