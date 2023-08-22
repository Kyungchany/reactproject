import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './css/mobileDetial_list.module.css'
import useProducts from '../../hooks/useProducts'


export default function MobileDetail_list() {
  const [allProducts] = useProducts()

  const {productId} = useParams()

  const [battery, setBattery] = useState([])

  useEffect(()=>{
    setBattery(allProducts.filter((item)=>(item.id===productId)))
  }, [allProducts])


  return (
    <div className={styles.detail_wrap}>

      {
        battery.map((item)=>(
          <>
          <div className={styles.product}>
            <p className={styles.products_title}>{item.title}</p>
            <p className={styles.products_img}><img src={item.img}/></p>
            <p className={styles.products_text}>{item.text}</p>
          </div>
          </>
        ))
      }
      {
        battery.map((item)=>(
          <div className={styles.detail_text}>
            {
              item.detail.map((subitem)=>(
                <>
                <p className={styles.title}>{subitem.title}</p>
                <p className={styles.text}>{subitem.text}</p>
                
              <ul className={styles.detail_list}>
                 <li>
                   <p className={styles.title01}>{subitem.title01}</p>
                   <p className={styles.img}><img src={subitem.img01}/></p>
                   <p className={styles.text01}>{subitem.text01}</p>
                 </li>
                 <li>
                   <p className={styles.title02}>{subitem.title02}</p>
                   <p className={styles.img}><img src={subitem.img02}/></p>
                   <p className={styles.text02}>{subitem.text02}</p>
                 </li>
                 <li>
                   <p className={styles.title03}>{subitem.title03}</p>
                   <p className={styles.img}><img src={subitem.img03}/></p>
                   <p className={styles.text03}>{subitem.text03}</p>
                 </li>
              </ul>
             </>
              ))
            }
          </div>
        ))
      }
      

     

    </div>
  )
}
