import React from 'react'
import styles from './css/mobileProduct_top.module.css'

export default function MobilePrduct_top() {
  return (
    <div className={styles.productTop_wrap}>
      <p className={styles.title}>이차전지</p>
      <p className={styles.subtitle}>차별화된 우수한 기술력 & 선진기술의 선두주자 <br></br><span>Second Battery</span></p>
      <p className={styles.text}>이차전지란 한번 쓰고 버리는 일차전지와 달리 여러번 <br></br>충전하여 반 영구적으로 사용이 가능한 전지입니다.</p>
    </div>
  )
}