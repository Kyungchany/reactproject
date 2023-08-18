import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product_top from './Product_top'
import Introduce from './Introduce'




export default function Product() {

 

  return (
    <div>
      <Product_top/>
      <Introduce/>
    </div>
     
   
  )
}
