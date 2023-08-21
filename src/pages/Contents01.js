import React, { useEffect, useRef, useState } from 'react'
import styles from './css/contents01.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Contents01() {

  // const [contents01, setContents01] = useState([])

  // useEffect(()=>{
  //   axios.get('/data/contents01.json').then((res)=>(
  //     setContents01(res.data)
  //   ))
  // }, [])

  // const contents = useRef([])
  // useEffect(()=>{
    
  // }, )

  return (
 
    <div id={styles.contents01_wrap}>

     
      <section id={styles.contents}>

        <p id={styles.title01}>The new leader in the global technology to create the future.</p>
        <p id={styles.title02}>Customer satisfaction with</p>
        <p id={styles.title03}>technology</p>

        
        <ul id={styles.contents_list}>
          {/* {
            contents01.map((item)=>(
          <li key={item.id} ref={(el)=>(contents.current[item.id]=el)} >
            <Link to={item.link}>
            <p className={styles.contents_title01}>{item.title01}</p>
            <p className={styles.contents_title02}>{item.title02}</p>
            <p className={styles.contents_img01}><img src={item.img01} alt=''/></p>
            <p className={styles.contents_text}>{item.text}</p>
            <p className={styles.contents_readmore}>{item.readmore}<span><i class="fa-regular fa-circle-right"></i></span></p>
            </Link>
          </li>
            ))
          } */}
          <li>
            <Link to='/'>
              <p className={styles.contents_title01}>Work Process</p>
              <p className={styles.contents_title02}>제조공정</p>
              <p className={styles.contents_img01}><img src='/images/workprocess.png'/></p>
              <p className={styles.contents_text}>이차전지 제품의 제조공정을 체험해보세요</p>
              <p className={styles.contents_readmore}>READ MORE<span><i class="fa-regular fa-circle-right"></i></span></p>
            </Link>
            </li>
          <li>
            <Link to='/product'>
            <p className={styles.contents_title01}>Product Introduce</p>
            <p className={styles.contents_title02}>이차전지</p>
            <p className={styles.contents_img01}><img src='/images/product.png'/></p>
            <p className={styles.contents_text}> 이차전지의 다양한 제품을 확인해보세요</p>
            <p className={styles.contents_readmore}>READ MORE<span><i class="fa-regular fa-circle-right"></i></span></p>
            </Link>
          </li>
          <li>
            <Link to='/stock'>
            <p className={styles.contents_title01}>Stock Price Information</p>
            <p className={styles.contents_title02}>주가정보</p>
            <p className={styles.contents_img01}><img src='/images/stock.png'/></p>
            <p className={styles.contents_text}>주요제무재표<br></br>공시정보<br></br>주주친화적 주주환원</p>
            <p className={styles.contents_readmore}>READ MORE<span><i class="fa-regular fa-circle-right"></i></span></p>
            </Link>
          </li>
          <li>
            <Link to='/'>
            <p className={styles.contents_title01}>Major Achievements</p>
            <p className={styles.contents_title02}>주요실적</p>
            <p className={styles.contents_img01}><img src='/images/major.png'/></p>
            <p className={styles.contents_text}> 이차전지의 살아숨쉬는 발자취를 엿보실 수 있습니다</p>
            <p className={styles.contents_readmore}>READ MORE<span><i class="fa-regular fa-circle-right"></i></span></p>
            </Link>
          </li>
          <li>
            <Link to='/'>
            <p className={styles.contents_title01}>Social Responsibility</p>
            <p className={styles.contents_title02}>사회공헌</p>
            <p className={styles.contents_img01}><img src='/images/social.png'/></p>
            <p className={styles.contents_text}>이차전지에서 진행하는 다양한 사회공헌<br></br>활동을 만나보실 수 있습니다</p>
            <p className={styles.contents_readmore}>READ MORE<span><i class="fa-regular fa-circle-right"></i></span></p>
            </Link>
          </li>
          <li>
            <Link to='/'>
            <p className={styles.contents_title01}>About R & D</p>
            <p className={styles.contents_title02}>R&D 소개</p>
            <p className={styles.contents_img01}><img src='/images/r&d.png'/></p>
            <p className={styles.contents_text}>특화된 신제품을 개발함으로써<br></br>고객의 만족과 더불어  이차전지의 경쟁력<br></br>확보에 이바지 하는 연구소</p>
            <p className={styles.contents_readmore}>READ MORE<span><i class="fa-regular fa-circle-right"></i></span></p>
            </Link>
          </li>
        </ul>

        
      </section>

    </div> 
  )
}
