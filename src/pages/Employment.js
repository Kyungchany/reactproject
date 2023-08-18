import React from 'react'
import styles from './css/employment.module.css'
import { Link } from 'react-router-dom'

export default function Employment() {
  return (
    <div id={styles.employment_wrap}>

      <div id={styles.employment}>
        <p id={styles.title}>Improve competitive</p>
        <p id={styles.text}>신뢰와 나눔속에 사랑받는 기업으로 성장한 세컨드 베터리<br></br>
여러분의 꿈과 열정을 세컨드 베터리도 함께합니다.</p>
        <button className={styles.button}><Link to='/'>채용공고</Link><span><i class="fa-regular fa-circle-right"></i></span></button>
      </div>

     

    </div>
  )
}
