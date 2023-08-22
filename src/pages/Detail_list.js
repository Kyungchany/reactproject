import React from 'react'
import styles from './css/detail.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import useProducts from '../hooks/useProducts'
import { getProductDetail } from '../api/firebase'


export default function () {

      const [allProducts] = useProducts()

      const {productId} = useParams()

      const [productItem, setProductItem] = useState([])

        useEffect(()=>{
          setProductItem(allProducts.filter((item)=>(item.id===productId)))
          // getProductDetail(productId).then((res)=>(
          //   setProductItem(res)
          // ))
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
                   <p className={styles.product_title}>{item.title}</p>
                   <p className={styles.product_img}><img src={item.img} alt=''/></p>
                   <p className={styles.product_text}>{item.text}</p>
                </div>
                {
                  productItem.map((item)=>(
                    <div className={styles.detail}>
                      {
                        item.detail.map((subitem)=>(
                          <>
                          <p className={styles.detail_title}>{subitem.title}</p>
                          <p className={styles.detail_text}>{subitem.text}</p>


                          </>
                        ))
                      }
                    </div>
                  ))
                }
                {
                  productItem.map((item)=>(
                    <ul className={styles.detail02}>
                      {
                        item.detail.map((subitem)=>(
                        <>
                        <li>
                          <p className={styles.detail02_title}>{subitem.title01}</p>
                          <p className={styles.detail02_img}><img src={subitem.img01}/></p>
                          <p className={styles.detail02_text}>{subitem.text01}</p>
                        </li>
                        <li>
                          <p className={styles.detail02_title02}>{subitem.title02}</p>
                          <p className={styles.detail02_img02}><img src={subitem.img02}/></p>
                          <p className={styles.detail02_text02}>{subitem.text02}</p>
                        </li>
                        <li>
                          <p className={styles.detail02_title03}>{subitem.title03}</p>
                          <p className={styles.detail02_img03}><img src={subitem.img03}/></p>
                          <p className={styles.detail02_text03}>{subitem.text03}</p>
                        </li>
                        </>
                        ))
                      }
                    </ul>
                  ))
                }
                
                 {/* <div className={styles.detail}>
                    <p className={styles.detail_title}>양극재란?</p>
                    <p className={styles.detail_text}>리튬이온베터리 제조 원가의 35% 이상을 차지하는 핵심 소제리튬의 공급원으로 배터리의 용량과 평균 전 압을 결정전지 내 전기에너지를 저장/방출 가능하게 하는 원료 배터리가 저장할 수 있는 에너지 양은 배터리의 용량에 전압을 곱한 것인데, 양극재가 바로 배터리의 성능을 좌우할 ‘용량’과 ‘전압’을 결정하는 핵심 소재리튬이온배터리를 구성하는 네 가지 요소 중 양극재에 더욱 주목해볼 만한 이유 특히나 양극재 시장은 전기차 및 에너지저장시스템 등의 수요가 급성장함에 따라 연평균 33% 증가해 2025년에는 275만 톤 규모로 성장할 전망</p>
                 </div>

                 <ul className={styles.detail02}>
                  <li>
                    <p className={styles.detail02_title}>NCM니켈-코발트-망간</p>
                    <p className={styles.detail02_img}><img src='/images/nickel.png'/></p>
                    <p className={styles.detail02_text}>에너지밀도가 높아 주행거리가 길고 배터리 성능이 안정적</p>
                  </li>
                  <li>
                    <p className={styles.detail02_title02}>NCM니켈-코발트-망간</p>
                    <p className={styles.detail02_img02}><img src='/images/nickel.png'/></p>
                    <p className={styles.detail02_text02}>에너지밀도가 높아 주행거리가 길고 배터리 성능이 안정적</p>
                  </li>
                  <li>
                    <p className={styles.detail02_title03}>NCM니켈-코발트-망간</p>
                    <p className={styles.detail02_img03}><img src='/images/nickel.png'/></p>
                    <p className={styles.detail02_text03}>에너지밀도가 높아 주행거리가 길고 배터리 성능이 안정적</p>
                  </li>
                 </ul> */}
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
