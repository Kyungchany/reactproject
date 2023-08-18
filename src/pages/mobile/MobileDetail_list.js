import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './css/mobileDetial_list.module.css'

export default function MobileDetail_list() {
  const [allProducts, setAllProducts] = useState([])

  useEffect(()=>{
    axios.get('/data/mobileProducts.json').then((res)=>(
      setAllProducts(res.data)
    ))
  }, [])

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
            <p className={styles.title}>{item.detailTitle}</p>
            <p className={styles.text}><span>{item.num01}</span>{item.text01}
            <br></br><span>{item.num02}</span>{item.text02}
            <br></br><span>{item.num03}</span>{item.text03}
            <br></br><span>{item.num04}</span>{item.text04}
            <br></br><span>{item.num05}</span>{item.text05}
            <br></br><span>{item.num06}</span>{item.text06}
            </p>
          </div>
        ))
      }
      {/* <div className={styles.detail_text}>
        <p className={styles.title}>양극재란?</p>
        <p className={styles.text}><span></span>1.리튬이온베터리 제조 원가의 35% 이상을 차지하는 핵심 소제
        <br></br>2.리튬의 공급원으로 배터리의 용량과 평균 전 압을 결정
        <br></br>3.전지 내 전기에너지를 저장/방출 가능하게 하는 원료
        <br></br>4.배터리가 저장할 수 있는 에너지 양은 배터리의 용량에 전압을 곱한 것인데, 양극재가 바로 배터리의 성능을 좌우할 ‘용량’과 ‘전압’을 결정하는 핵심 소재
        <br></br>5.리튬이온배터리를 구성하는 네 가지 요소 중 양극재에 더욱 주목해볼 만한 이유
        <br></br>6.특히나 양극재 시장은 전기차 및 에너지저장시스템 등의 수요가 급성장함에 따라 연평균 33% 증가해 2025년에는 275만 톤 규모로 성장할 전망
        </p>

      </div> */}

        <ul className={styles.subdetail_list}>
          <li>
            <p className={styles.subtitle}>
              <span>NCM</span>&#40;니켈-코발트-망간&#41;
            </p>
            <p className={styles.subtitle_img}>
              <img src='/images/니켈.png'/>
            </p>
            <p className={styles.subtitle_text}>에너지밀도가 높아 주행거리가 길고 배터리 성능이 안정적</p>
          </li>
          <li>
            <p className={styles.subtitle}>
              <span>NCM</span>&#40;니켈-코발트-망간&#41;
            </p>
            <p className={styles.subtitle_img}>
              <img src='/images/니켈.png'/>
            </p>
            <p className={styles.subtitle_text}>에너지밀도가 높아 주행거리가 길고 배터리 성능이 안정적</p>
          </li>
          <li>
            <p className={styles.subtitle}>
              <span>NCM</span>&#40;니켈-코발트-망간&#41;
            </p>
            <p className={styles.subtitle_img}>
              <img src='/images/니켈.png'/>
            </p>
            <p className={styles.subtitle_text}>에너지밀도가 높아 주행거리가 길고 배터리 성능이 안정적</p>
          </li>
        </ul>
  

    </div>
  )
}
