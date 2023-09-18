import React, { useCallback, useEffect, useState } from 'react'
import styles from './css/contents02.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Contents02() {

  const [allContents, setAllContents] = useState([])
  
  useEffect(()=>{
    axios.get('/data/contents.json').then((res)=>(
      setAllContents(res.data)
    ))
  }, [])
  console.log(allContents)

  // const menulist = [
  //   {index:0, img:"/images/contents02_img01.png", name:"SB RECYCLING",  title:"[ 연구소 로재시공 및 정비 ]", text:"제품의 재질, 수량,용도, 품질, 납기, 예산 등을 고려 최적의 제작공법을 선정 최단 시일 내 고객이 요구하는 시제품을 도면 SPEC에 맞추어 성형"},
  //   {index:1, img:"/images/contents02_img02.png", name:"SAND CORE",  title:"[ 22222222222 ]", text:"2222222222222222222"},
  //   {index:2, img:"/images/contents02_img03.png", name:"Automotive Parts",  title:"[ 33333333333 ]", text:"333333333333333"},
  //   {index:3, img:"/images/contents02_img04.png", name:"SPECIALTY SB",  title:"[ 444444444444 ]", text:"4444444444444444444"},
  //   {index:4, img:"/images/contents02_img01.png", name:"COLD ROLLED STEEL SHEETS", title:"[ 555555555555 ]", text:"55555555555555555"},
  // ]  
  const menulist = [
    {index:0, name:"SB RECYCLING", detail:[{img:"/images/contents02_img01.png", title:"[ 연구소 로재시공 및 정비 ]", text:"제품의 재질, 수량,용도, 품질, 납기, 예산 등을 고려 최적의 제작공법을 선정 최단 시일 내 고객이 요구하는 시제품을 도면 SPEC에 맞추어 성형"}]},
    {index:1, name:"SAND CORE", },
    {index:2, name:"Automotive Parts"},
    {index:3, name:"SPECIALTY SB"},
    {index:4, name:"COLD ROLLED STEEL SHEETS"},
  ]


  const [selectContents, setSelectContents] = useState(menulist[0].name) //내가 고른 컨텐츠메뉴

  const [categoryContents, setCategoryContents] = useState([])  //내가 고른 컨텐츠메뉴의 컨텐츠정보
  console.log(categoryContents)
  useEffect(()=>{
    if(selectContents===menulist[0].name){
      setCategoryContents(allContents.filter((item)=>(item.category)===selectContents))
    }else if(selectContents==="SAND CORE"){
      setCategoryContents(allContents.filter((item)=>(item.category)===selectContents))
    }else if(selectContents===menulist[2].name){
      setCategoryContents(allContents.filter((item)=>(item.category)===selectContents))
    }else if(selectContents===menulist[3].name){
      setCategoryContents(allContents.filter((item)=>(item.category)===selectContents))
    }else if(selectContents===menulist[4].name){
      setCategoryContents(allContents.filter((item)=>(item.category)===selectContents))
    }

    // if(selectContents===menulist.name){
    //   setCategoryContents(allContents.filter((item)=>(item.category)===selectContents))
    // }
  }, [allContents, selectContents])



  return (
    <div id={styles.contents02_wrap}>

        <div id={styles.contents02_img}>
          {/* <img src='/images/contents02_img01.png'/> */}
          {
            categoryContents.map((item)=>(
              <img src={item.img}></img>
            ))
          }
        </div>

        <div id={styles.contents02_detail}>

          <div id={styles.detail}>
            {
              categoryContents.map((item)=>(
                <>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.sub_title}>{item.subtitle}</p>
                <p className={styles.text}>{item.text}
                </p>
                </>
              ))
            }
            {/* <p className={styles.title} >SECOND BATTERY BUSINESS</p>

            <p className={styles.sub_title}>&#91; 연구소 로재시공 및 정비 &#93;</p>
            <p className={styles.text}>제품의 재질, 수량,용도, 품질, 납기, 예산 등을
                                      고려 최적의 제작공법을 선정
                                      최단 시일 내 고객이 요구하는 시제품을
                                      도면 SPEC에 맞추어 성형
            </p> */}
            <p className={styles.product}><Link to='/'>자세히 보기</Link><span><img src='./images/contents02_arrow.png'></img></span></p>
          </div>

        </div>

        <ul id={styles.menulist}>
          {
            menulist.map((item)=>(
              <li key={item.index}
              onClick={()=>{setSelectContents(item.name)}}>{item.name}</li>
            ))
          }

        </ul>
    </div>
  )
}

