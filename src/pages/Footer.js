import React from 'react'
import styles from './css/footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div id={styles.footer_wrap}>
      
      <nav id={styles.companyinfo}>

        <ul id={styles.companyinfo_list}>
          
          {/* <li>회사개요</li>
          <li>CEO인사말</li>
          <li>연혁</li>
          <li>인증현황</li>
          <li>찾아오시는길</li> */}
          <li>
            <p className={styles.mainmenu}>회사소개<span><i class="fa-regular fa-circle-down"></i></span></p>
            <ul className={styles.submenu}>
              <li><Link to='./'>회사개요</Link></li>
              <li><Link to='./'>CEO인사말</Link></li>
              <li><Link to='./'>연혁</Link></li>
              <li><Link to='./'>인증현황</Link></li>
              <li><Link to='./'>찾아오시는길</Link></li>
            </ul>
          </li>
          <li>
            <p className={styles.mainmenu}>사업소개<span><i class="fa-regular fa-circle-down"></i></span></p>
            <ul className={styles.submenu}>
              <li><Link to='./'>사업영역</Link></li>
              <li><Link to='./'>제조공정</Link></li>
              <li><Link to='./'>제품소개</Link></li>
              <li><Link to='./'>공정현황</Link></li>
            </ul>
          </li> <li>
            <p className={styles.mainmenu}>제품소개<span><i class="fa-regular fa-circle-down"></i></span></p>
            <ul className={styles.submenu}>
              <li><Link to='./'>PT</Link></li>
              <li><Link to='./'>E/V</Link></li>
              <li><Link to='./'>E-BIKE</Link></li>
              <li><Link to='./'>DRONE</Link></li>
              <li><Link to='./'>ESC</Link></li>
            </ul>
          </li> <li>
            <p className={styles.mainmenu}>R&D<span><i class="fa-regular fa-circle-down"></i></span></p>
            <ul className={styles.submenu}>
              <li><Link to='./'>R&D</Link></li>
              <li><Link to='./'>연구실적</Link></li>
            </ul>
          </li> <li>
            <p className={styles.mainmenu}>채용공고<span><i class="fa-regular fa-circle-down"></i></span></p>
            <ul className={styles.submenu}>
              <li><Link to='./'>인재상</Link></li>
              <li><Link to='./'>인사제도</Link></li>
              <li><Link to='./'>직무소개</Link></li>
              <li><Link to='./'>채용안내</Link></li>
              <li><Link to='./'>채용공고</Link></li>
            </ul>
          </li> <li>
            <p className={styles.mainmenu}>고객문의<span><i class="fa-regular fa-circle-down"></i></span></p>
            <ul className={styles.submenu}>
              <li><Link to='./'>고객문의</Link></li>
              <li><Link to='./'>FAQ</Link></li>
              <li><Link to='./'>개인정보처리방침</Link></li>
              <li><Link to='./'>이메일무단수집거부</Link></li>
            </ul>
          </li>
        
        </ul>

        <div id={styles.address}>
          <p id={styles.logoimg}>
            <span><i class="fa-solid fa-bolt-lightning"></i></span>
          </p>
          <p id={styles.addresstext}>경기도 성남시 분당구 2<br></br>Copyright(c) SECOND BATTERY Co., Ltd. All Rights Reserved.</p>
        </div>

          <p id={styles.privacy}><Link to='./'>개인정보처리방침<span><i class="fa-regular fa-circle-right"></i></span></Link></p>
      </nav>

    </div>
  )
}
