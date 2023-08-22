import React, { useEffect, useState } from 'react'
import styles from './css/introduce.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import useProducts from '../hooks/useProducts'


export default function Introduce() {

  //const [allProducts, setAllProducts] = useState([]) //2차전지 종류 전체

  

  const [allProducts] = useProducts()



  const categorys = [
    {index:0, text:'전체'},
    {index:1, text:'핵심 소재'},
    {index:2, text:'신소재'},
    {index:3, text:'그 외'}
  ]
  
  const [selectCategory, setSelectCategory] = useState(categorys[0].text) //내가 고른 카테코리 메뉴
  
  const [categoryItems, setCategoryItems] = useState([]) //해당 카테고리의 아이템을 저장한곳
  
  useEffect(()=>{
    if(selectCategory==='전체'){
      setCategoryItems(allProducts)
    }else {
      setCategoryItems(allProducts.filter((item)=>(item.category)===selectCategory))
    }
  }, [allProducts, selectCategory])

  const navigate = useNavigate()


  return (
    <div className={styles.introduce_wrap}>
      <section className={styles.product_introduce}>

        <p className={styles.title}>이차전지</p>
        <p className={styles.sub_title}>Second Battery의 이차전지를 소개합니다.</p>

        <div className={styles.secondbattery}>
          <p className={styles.sb_title}>차별화된 우수한 기술력 & 선진기술의 선두주자, <span>Second Battery</span></p>
          <p className={styles.sb_sub_title}>이차전지란 한번 쓰고 버리는 일차전지와 달리<br></br> 여러 번 충전하여 반 영구적으로 사용이 가능한 전지입니다. </p>
        </div>
        
        <p className={styles.kind_title}><span><i class="fa-solid fa-bolt-lightning"></i></span>이차전지 종류</p>
        
        <ul className={styles.category_list}>
          {
            categorys.map((item)=>(
              <li key={item.index} onClick={()=>{setSelectCategory(item.text)}}>
                <button style={item.text===selectCategory ? {backgroundColor:'pink', color:'black'} : {backgroundColor:'#034EA1'}}>{item.text}</button>
              </li>
            ))
          }
          {/* <li><button>전체</button></li>
          <li><button>핵심 소재</button></li>
          <li><button>신소재</button></li>
          <li><button>그 외</button></li> */}
        </ul>


        <ul className={styles.product_list}>
          {
            categoryItems.map((item)=>(
              <li key={item.id}>
                <p className={styles.product_title}>{item.title}</p>
                <p className={styles.product_img}><img src={item.img} alt=''/></p>
                <p className={styles.product_text}>{item.text}</p>
                <button onClick={()=>{
                  navigate(`/product/${item.id}`)
                }} className={styles.product_button}>자세히보기</button>
              </li>
            ))
          }
          

        </ul>

        <p className={styles.active_title}><span><i class="fa-solid fa-bolt-lightning"></i></span>제품적용군</p>

         <ul className={styles.active_list}>
          <li>
            <p className={styles.active_img}><img src='./images/pt.png'/></p>
            <p className={styles.active_sub_title}>P/T</p>
          </li>
          <li>
            <p className={styles.active_img}><img src='./images/ev.png'/></p>
            <p className={styles.active_sub_title}>EV</p>
          </li>
          <li>
            <p className={styles.active_img}><img src='./images/bike.png'/></p>
            <p className={styles.active_sub_title}>E-BIKE</p>
          </li>
          <li>
            <p className={styles.active_img}><img src='./images/vc.png'/></p>
            <p className={styles.active_sub_title}>V/C</p>
          </li>
          <li>
            <p className={styles.active_img}><img src='./images/drone.png'/></p>
            <p className={styles.active_sub_title}>DRONE</p>
          </li>
          <li>
            <p className={styles.active_img}><img src='./images/ess.png'/></p>
            <p className={styles.active_sub_title}>ESS</p>
          </li>
         </ul> 
      </section>
    </div>
  )
}
