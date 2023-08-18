import React, { useCallback, useEffect, useRef } from 'react'
import styles from './css/product_top.module.css'

export default function Product_top() {

  // const menulist = [
  //   {index:0, name:'제품소개'},
  //   {index:1, name:'제조공정'},
  //   {index:2, name:'주가정보'},
  //   {index:3, name:'주요실적'},
  //   {index:4, name:'사회공헌'},
  //   {index:5, name:'R&D'}
  // ]
  // const menuUl=useRef()
  // useEffect(()=>{
  //   menuUl.current.style.overflow='hidden'
  // })

  // const menulistOpen=useCallback(()=>{
  //   menuUl.current.style.overflow='hidden'
  // })


  return (
    <div>
      <div id={styles.product_wrap}>
      
      </div>

      <div className={styles.top_menu}>
        <section className={styles.menu}>
          <p className={styles.homeimg}><i class="fa-solid fa-house"></i></p>
          <p className={styles.menu_title}>이차전지</p>

          <ul className={styles.menulist}>
          {/* ref={menuUl} */}
            <li>이차전지<span><i class="fa-solid fa-angle-down"></i></span></li>
            {/* onClick={menulistOpen} */}
            <li>제조공정</li>
            <li>주가정보</li>
            <li>주요실적</li>
            <li>사회공헌</li>
            <li>R&D</li>
          </ul>
        </section>
      </div>


    </div>
  )
}
