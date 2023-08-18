import React from 'react'
import styles from './css/mobileEmployment.module.css'

export default function MobileEmployment() {
  return (
    <div className={styles.employment_wrap}>
      <p className={styles.title}>Improve competitive</p>
      <p className={styles.text}>신뢰와 나눔속에 사랑받는 기업으로 성장한 세컨드 베터리<br></br>여러분의 꿈과 열정을 세컨드 베터리도 함께합니다.</p>
      <button className={styles.button}><span><i class="fa-solid fa-plus"></i></span>채용공고</button>
    </div>
  )
}
