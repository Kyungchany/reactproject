import React from 'react'
import styles from './css/mobileContents.module.css'
import { Link } from 'react-router-dom'

export default function MobileContents() {

  const mainMenus = [
    {index:0, title:'제조공정', path:'/', images:'/images/mobileworkprocess.png',},
    {index:1, title:'이차전지', path:'/product', images:'/images/mobileproduct.png',},
    {index:2, title:'주가정보', path:'/', images:'/images/mobilestock.png',},
    {index:3, title:'주요실적', path:'/', images:'/images/mobilemajor.png',},
    {index:4, title:'사회공헌', path:'/', images:'/images/mobilesocial.png',},
    {index:5, title:'R&D', path:'/', images:'/images/mobiler&d.png',}
  ]

  return (
    <div className={styles.mainMenuWrap}>
      <ul className={styles.mainMenu}>
        {
          mainMenus.map((item)=>(
            <li key={item.index}><Link to={item.path}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.img}><img src={item.images}/></p>
              <p className={styles.readmore}>READ MORE</p>
              <p className={styles.arrow}><i class="fa-solid fa-arrow-right"></i></p>
              </Link></li>
          ))
        }
        {/* <li>
          <p className={styles.title}>제조공정</p>
          <p className={styles.img}><img src='/images/mobileworkprocess.png'/></p>
          <p className={styles.readmore}>READ MORE</p>
          <p className={styles.arrow}><i class="fa-solid fa-arrow-right"></i></p>
        </li> */}
        {/* <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li> */}
      </ul>
    </div>
  )
}
