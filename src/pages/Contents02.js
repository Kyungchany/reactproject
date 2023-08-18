import React from 'react'
import styles from './css/contents02.module.css'
import { Link } from 'react-router-dom'
export default function Contents02() {
  return (
    <div id={styles.contents02_wrap}>

        <div id={styles.contents02_img}>
          
        </div>

        <div id={styles.contents02_detail}>

          <div id={styles.detail}>
            <p className={styles.title}>SECOND BATTERY BUSINESS</p>
            <p className={styles.sub_title}>&#91; 연구소 로재시공 및 정비 &#93;</p>
            <p className={styles.text}>제품의 재질, 수량,용도, 품질, 납기, 예산 등을<br></br>
                                      고려 최적의 제작공법을 선정<br></br>
                                      최단 시일 내 고객이 요구하는 시제품을<br></br>
                                      도면 SPEC에 맞추어 성형
            </p>
            <p className={styles.product}><Link to='/'>자세히 보기</Link><span><img src='./images/contents02_arrow.png'></img></span></p>
          </div>

        </div>

        <ul id={styles.menulist}>
          <li>SB RECYCLING</li>
          <li>SAND CORE</li>
          <li>Automotive Parts</li>
          <li>SPECIALTY SB</li>
          <li>COLD ROLLED STEEL SHEETS</li>
        </ul>
    </div>
  )
}
