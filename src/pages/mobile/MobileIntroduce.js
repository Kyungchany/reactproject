import React, { useEffect, useState } from 'react'
import styles from './css/mobileIntroduce.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useProducts from '../../hooks/useProducts'


export default function MobileIntroduce() {

  const menus = [
    {index:0, name:'전체'},
    {index:1, name:'핵심소재'},
    {index:2, name:'신소재'},
    {index:3, name:'그 외'},
  ]

  // const [allProducts, setAllProducts] = useState([])

  // useEffect(()=>{
  //   axios.get('/data/mobileProducts.json').then((res)=>(
  //     setAllProducts(res.data)
  //   ))
  // }, [])
  const [allProducts] = useProducts()
  
  


  const [selectedCategory, setSelectedCategory] = useState(menus[0].name)
  const [categoryItem, setCategoryItem] = useState([])

  useEffect(()=>{
    if(selectedCategory==='전체'){
      setCategoryItem(allProducts)
    }else{
      setCategoryItem(allProducts.filter((item)=>(item.category)===selectedCategory))
    }
  }, [allProducts, selectedCategory])

  const navigate = useNavigate()

  return (
    <div className={styles.introduce_Wrap}>
      <p className={styles.title_img}><img src='/images/bolt.png'/></p>
      <p className={styles.title}>이차전지 종류</p>

      <ul className={styles.menulist}>
        {
          menus.map((item)=>(
            <li key={item.index}><button
             style={item.name===selectedCategory ? {background:'pink', color:'black'} : {background:'#034EA1'}}
             onClick={()=>{setSelectedCategory(item.name)}}>{item.name}</button></li>
          ))
        }
      </ul>

      <ul className={styles.products_list}>
        {
          categoryItem.map((item)=>(
          <li key={item.id}>
            <p className={styles.products_title}>{item.title}</p>
            <p className={styles.products_img}><img src={item.img}/></p>
            <p className={styles.products_text}>{item.text}</p>
            <button className={styles.details} onClick={()=>
              {navigate(`/product/${item.id}`)}}>자세히보기</button>
         </li>
          ))
        }
      </ul>
    </div>
  )
}
