import React from 'react'
import styles from './css/detail.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import useProducts from '../hooks/useProducts'

export default function () {

      const [allProducts] = useProducts()

      const {productId} = useParams()

      const [productItem, setProductItem] = useState([])

        useEffect(()=>{
          setProductItem(allProducts.filter((item)=>(item.id===productId)))
        }, [allProducts])

  return (
    <div>

        
        <div className={styles.introduce_wrap}>
          <section className={styles.product_introduce}>
    
            <p className={styles.title}>제품 소개</p>
            <p className={styles.sub_title}>Second Battery의 제품을 소개합니다.</p>
    
            <div className={styles.secondbattery}>
              <p className={styles.sb_title}>차별화된 우수한 기술력 & 선진기술의 선두주자, <span>Second Battery</span></p>
              <p className={styles.sb_sub_title}>이차전지란 한번 쓰고 버리는 일차전지와 달리<br></br> 여러 번 충전하여 반 영구적으로 사용이 가능한 전지입니다. </p>
            </div>
            
            <p className={styles.kind_title}><span><i class="fa-solid fa-bolt-lightning"></i></span>이차전지 종류</p>
    
            {
              productItem.map((item)=>(
                <>
                <div className={styles.product}>
                   <p className={styles.product_title}>{item.product_title}</p>
                   <p className={styles.product_img}><img src={item.product_img} alt=''/></p>
                   <p className={styles.product_text}>{item.product_text}</p>
                </div>
                 <div className={styles.detail}><img src={item.detail} alt=''/></div>
                </>
              ))
            }
    
              
                {/* <div className={styles.dedatil}><img src='/images/Detail.png' alt=''/></div> */}
            
    
                <p className={styles.active_title}><span><i class="fa-solid fa-bolt-lightning"></i></span>다양한 활동 영역</p>
    
                <ul className={styles.active_list}>
                  <li>
                    <p className={styles.active_img}><img src='/images/pt.png'/></p>
                    <p className={styles.active_sub_title}>P/T</p>
                  </li>
                  <li>
                    <p className={styles.active_img}><img src='/images/ev.png'/></p>
                    <p className={styles.active_sub_title}>EV</p>
                  </li>
                  <li>
                    <p className={styles.active_img}><img src='/images/bike.png'/></p>
                    <p className={styles.active_sub_title}>E-BIKE</p>
                  </li>
                  <li>
                    <p className={styles.active_img}><img src='/images/vc.png'/></p>
                    <p className={styles.active_sub_title}>V/C</p>
                  </li>
                  <li>
                    <p className={styles.active_img}><img src='/images/drone.png'/></p>
                    <p className={styles.active_sub_title}>DRONE</p>
                  </li>
                  <li>
                    <p className={styles.active_img}><img src='/images/ess.png'/></p>
                    <p className={styles.active_sub_title}>ESS</p>
                  </li>
                </ul>
    
    
          </section>
        </div>
    </div>
  )
}
