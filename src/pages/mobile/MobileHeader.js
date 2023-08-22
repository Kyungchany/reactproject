import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './css/mobileHeader.module.css'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useAuthContext } from '../../context/AuthContext'
import { login, logout } from '../../api/firebase'

export default function MobileHeader() {

  const menus = [
    {index:0, name:'회사소개', submenuList:[{index:0, name:'회사개요'}, {index:1, name:'CEO인사말'}, {index:2, name:'연혁'}, {index:3, name:'인증현황'}, {index:4, name:'찾아오시는 길'}]},
    {index:1, name:'사업소개', submenuList:[{index:0, name:'사업소개'}]},
    {index:2, name:'이차전지', submenuList:[{index:0, name:'이차전지 종류', path:'/product'}]},
    {index:3, name:'제품소개', submenuList:[{index:0, name:'PT'}, {index:1, name:'E/V'}, {index:2, name:'E-BIKE'}, {index:3, name:'DRONE'}, {index:4, name:'ESC'}]},
    {index:4, name:'고객문의', submenuList:[{index:0, name:'고객문의'}, {index:1, name:'FAQ'}, {index:2, name:'개인정보처리방침'}, {index:3, name:'이메일무단수집거부'}]},

  ]

  const closeBtn = useRef()
  const menuWrap = useRef()
  const menuBar = useRef()
  const layer = useRef()
  const submenu =useRef()

  const menuWrapClose = useCallback(()=>{
    layer.current.style.display='none'
    gsap.to(menuWrap.current, {right:'-62.5%', duration:0.5, ease:'power1.out', onComplete:()=>{
      menuWrap.current.style.display='none'
    }})
    setClickIndex('')
  })


  const menuOpen = useCallback(()=>{
    menuWrap.current.style.display='block'
    layer.current.style.display='block'
    gsap.to(menuWrap.current, {right:0, duration:0.5, ease:'power1.out'})
  })

  const menuClose = useCallback(()=>{
    layer.current.style.display='none'
    gsap.to(menuWrap.current, {right:'-62.5%', duration:0.5, ease:'power1.out', onComplete:()=>{
      menuWrap.current.style.display='none'
    }})
    setClickIndex('')
  })

  let selectedMenu = useMemo(()=>(null), [])
  let openHeight= useMemo(()=>(null))
  let closeHeight =useMemo(()=>(35))

  

  // const submenuOpen = useCallback((menu)=>{

  //   if(selectedMenu===null){
  //     selectedMenu=menu
  //     selectedMenu.classList.add(`${styles.selected}`)
  //     openHeight=closeHeight+(closeHeight*selectedMenu.children[1].children.length)
  //     gsap.to(selectedMenu, {height:openHeight, duration:0.3, ease:'power1.out'})
  //   }else if (selectedMenu!==null && selectedMenu!==menu){
  //     selectedMenu.classList.remove(`${styles.selected}`)
  //     openHeight=closeHeight
  //     gsap.to(selectedMenu, {height:openHeight, duration:0.3, ease:'power1.out'})

  //     selectedMenu=menu
  //     selectedMenu.classList.add(`${styles.selected}`)
  //     openHeight=closeHeight+(closeHeight*selectedMenu.children[1].children.length)
  //     gsap.to(selectedMenu, {height:openHeight, duration:0.3, ease:'power1.out'})
  //   }else if(selectedMenu!==null && selectedMenu===menu){
  //     selectedMenu.classList.remove(`${styles.selected}`)
  //     openHeight=closeHeight
  //     gsap.to(selectedMenu, {height:openHeight, duration:0.3, ease:'power1.out'})

  //     selectedMenu=null
  //   }   일일이 하나로 짠 구조인데 서브메뉴영역을 눌렀을때 에러남...why.........       

  // })
  const [clickIndex, setClickIndex] = useState(null)

  const {user} = useAuthContext()
  console.log('test',user)
  

 
 

  return (
    <div className={styles.mobileHeader}>
       
      <div className={styles.mobileLogo}>
        <Link to='/'><img src='/images/mobilelogo.png'/></Link>
      </div>

      <div className={styles.topmenuBar} ref={menuBar} onClick={menuOpen}>
        <img src='/images/mobiletopmenubar.png'/>
      </div>

      <div className={styles.menuWindow} ref={menuWrap}>

        <p className={styles.close} ref={closeBtn} onClick={menuClose}><span><i class="fa-solid fa-xmark"></i></span></p>

        <div className={styles.menulogo}><img src='/images/mobilelogo.png'/></div>

        <ul className={styles.menulist}>
          {
            menus.map((item)=>(
              <li key={item.index} onClick={(e)=>{


              
                if(item.index===clickIndex){
                  setClickIndex('')
                }else{
                  setClickIndex(item.index)
                }

                // setClickIndex(item.index)

              
              }} className={`${item.index===clickIndex && styles.selected}`}
              style={clickIndex===item.index ? {height:closeHeight+(closeHeight*item.submenuList.length)} : {height:closeHeight}}>
                {item.name}<span><i class="fa-solid fa-angle-down"></i></span>
                <ul className={styles.submenu}>
                  {
                    item.submenuList.map((subitem)=>(
                      <li ref={submenu} onClick={menuWrapClose}><Link to={subitem.path}>{subitem.name}</Link></li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
     
          {/* <li onClick={submenuOpen}>회사소개<span><i class="fa-solid fa-angle-down"></i></span>
            <ul className={styles.submenu}>
              <li>회사개요</li>
              <li>CEO인사말</li>
              <li>연혁</li>
              <li>인증현황</li>
              <li>찾아오시는 길</li>
            </ul>
          </li>
          <li>사업소개
            <ul className={styles.submenu}>
              <li>사업소개</li>
            </ul>
          </li>
          <li>제품소개
            <ul className={styles.submenu}>
              <li>PT</li>
              <li>E/V</li>
              <li>E-BIKE</li>
              <li>DRONE</li>
              <li>ESC</li>
            </ul>
          </li>
          <li>고객문의
            <ul className={styles.submenu}>
              <li>고객문의</li>
              <li>FAQ</li>
              <li>개인정보처리방침</li>
              <li>이메일무단수집거부</li>
            </ul>
          </li> */}
        </ul>

          {/* <button className={styles.login}>Login</button>
          <button className={styles.login}>Logout</button> */}

          {
            user ?
            <>
            <p>
            <button className={styles.login} onClick={logout}>Logout</button>
            </p>
            <p className={styles.loginid}><span>{user.displayName}</span>님 환영합니다</p>
            </>
            :
            <p>
            <button className={styles.login} onClick={login}>Login</button>
            </p>
          }
          

      </div>

     <div className={styles.darkLayer} ref={layer}></div>
    </div>
  )
}
