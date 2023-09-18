import React, { useCallback, useRef } from 'react'
import styles from './css/detail.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import useProducts from '../hooks/useProducts'
import { getProductDetail } from '../api/firebase'


export default function () {


      const {productId} = useParams()

      const [productItem, setProductItem] = useState([])

      const [clickImg, setClickImg] = useState([]) //대기중인 클릭 서브 이미지

      const [clickIndex, setClickIndex] = useState(0) //대기중인 이미지 클릭 순번
     


        useEffect(()=>{
          getProductDetail(productId).then((res)=>{
            setProductItem(res)

            setClickImg(Object.values(res.subimg))

          //  setClickImg(Object.values(res.subimg))
          })

        }, [productId])



        



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
    
                <>
                <div className={styles.product}>
                  
                    
                   <>
                    <p className={styles.product_title}>{productItem.title}</p>
                    <p className={styles.product_img}><img src={productItem.img} alt=''/></p>
                   </>
                  
                   {/* {
                    changeImg.map((item)=>{
                      <p className={styles.product_img}><img src={item.img} alt=''/></p>
                    })
                   } */}
                   <p className={styles.product_text}>{productItem.text}</p>
                   
                   <ul className={styles.changeimg}>
                    {
                      clickImg.map((item)=>(
                        <li key={item.index}
                        onClick={()=>{setProductItem({...productItem, img:item.img})
                        setClickIndex(item.index)}}>
                        <img src={item.img} style={item.index===clickIndex ? {border:'solid 2px red'} : {border:'none'}}/></li>
                      ))
                    }

                      {/* {
                        clickImg.map((item)=>(
                          <li key={item.index} 
                          onClick={()=>{
                            setProductItem({...productItem, img:item.img})
                            setClickIndex(item.index)
                          }
                          }><img src={item.img}
                          
                          style={item.index===clickIndex ? {border:'solid 3px red'} : {border:'none'}}
                          />
                          </li>
                        ))
                      } */}
                   </ul>
                </div>
                      {
                        productItem.detail && productItem.detail.map((item)=>(
                          <div className={styles.detail}>
                            <p className={styles.detail_title}>{item.title}</p>
                            <p className={styles.detail_text}>{item.text}</p>
                          </div>
                        ))
                      }
                      {
                        productItem.detail && productItem.detail.map((item)=>(
                        <ul className={styles.detail02}>
                          
                            <>
                            <li>
                              <p className={styles.detail02_title}>{item.title01}</p>
                              <p className={styles.detail02_img}><img src={item.img01}/></p>
                              <p className={styles.detail02_text}>{item.text01}</p>
                            </li>
                            <li>
                              <p className={styles.detail02_title02}>{item.title02}</p>
                              <p className={styles.detail02_img02}><img src={item.img02}/></p>
                              <p className={styles.detail02_text02}>{item.text02}</p>
                            </li>
                            <li>
                              <p className={styles.detail02_title03}>{item.title03}</p>
                              <p className={styles.detail02_img03}><img src={item.img03}/></p>
                              <p className={styles.detail02_text03}>{item.text03}</p>
                            </li>
                            </>
                            
                        </ul>
                        ))
                      }
                      
                {/* {
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
                } */}
                {/* {
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
                } */}
                
                </>
              
            
    
              
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
