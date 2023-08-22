import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import styles from './css/header.module.css'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useAuthContext } from '../context/AuthContext'
import { login, logout } from '../api/firebase'

export default function Header() {

  const mainMenus = [
    {index:0, name:'회사소개', path:'/'},
    {index:1, name:'사업분야', path:'/'},
    {index:2, name:'이차전지', path:'/product'},
    {index:3, name:'R&D', path:'/'},
    {index:4, name:'고객문의', path:'/123'}
  ]
  const menuLi=useRef([])
  const headerWrap=useRef()
  
  
  let selectedMenu = useMemo(()=>(null))


  const offEffect=useCallback((index)=>{
    if(selectedMenu!==menuLi.current[index] && selectedMenu!==null){
      selectedMenu.classList.remove(`${styles.selected}`)
      gsap.to(selectedMenu, {top:0 , duration:0.3 , ease:'power1.out'})
    }


    
  })
  const onEffect=useCallback((index)=>{

    // alert("test")

    if(selectedMenu===null) {
      selectedMenu=menuLi.current[index]
      selectedMenu.classList.add(`${styles.selected}`)
      gsap.to(selectedMenu, {top:-10 , duration:0.3, ease:'power1.out'})
    }else if(selectedMenu!==null && selectedMenu!==menuLi.current[index]){
      selectedMenu.classList.remove(`${styles.selected}`)
      gsap.to(selectedMenu, {top:0 , duration:0.3 , ease:'power1.out'})
      
      selectedMenu=menuLi.current[index]
      selectedMenu.classList.add(`${styles.selected}`)
      gsap.to(selectedMenu, {top:-10 , duration:0.3, ease:'power1.out'})
    }else if(selectedMenu!==null && selectedMenu===menuLi.current[index]){
      selectedMenu.classList.add(`${styles.selected}`)
      gsap.to(selectedMenu, {top:-10 , duration:0.3, ease:'power1.out'})
      
    }
   
  })
  
  const {user} = useAuthContext()
  console.log(user)
  
  
  return (
    <>
    <header ref={headerWrap}  onMouseLeave={()=>{offEffect()}} >
   
      <h1 id={styles.logo}>
        <Link to='/'><img src='/images/logo.png' alt='로고'/></Link>
      </h1>

     <nav id={styles.info}>
      <ul id={styles.info_list}>
        <li>TEL(031)-123-4567</li>
        <li>Fax(031)-123-4567</li>
        <li>Email <span>secondbattery@secondbattery.com</span></li>

      </ul>

      {/* <p>
        <button className={styles.login}>로그인</button>
      </p>
      <p><button className={styles.login}>로그아웃</button>
      </p> */}
     </nav>

     <nav id={styles.mainmenu}>
      <ul id={styles.mainmenu_list}>
        {
          mainMenus.map((item)=>(
            <li><Link to={item.path}  ref={(el)=>(menuLi.current[item.index]=el)} onMouseEnter={()=>{onEffect(item.index)}}>{item.name}</Link></li>
            
          ))
        }
        {/* <li onMouseEnter={onEffect} onMouseLeave={offEffect}><Link to='/' ref={menuLi}>회사소개</Link></li>
        <li><Link to='/'>사업분야</Link></li>
        <li><Link to='/product'>제품소개</Link></li>
        <li><Link to='/'>R&D</Link></li>
        <li><Link to='/123'>고객문의</Link></li> */}
      </ul>
     </nav>

     <div id={styles.company_profile}>
      <p id={styles.profile_title}><Link to='/'>Company Profile</Link></p>
      <p id={styles.profile_img}><Link to='/'><i class="fa-solid fa-download"></i></Link></p>
      <button className={styles.button}>ENG</button>
      {
        user ?
        <p><button className={styles.login} onClick={logout}>로그아웃{user.displayName}</button></p>
        
        :
        <p>
        <button className={styles.login} onClick={login}>로그인</button>
        </p>
      }
     </div>


    </header>


    </>
    
  )
}



// const mainmenus=[
//   {index:0, path:'/', text:'Home'},
//   {index:1, path:'/brand', text:'Brand'},
//   {index:2, path:'/mall', text:'Mall'},
// ]

// return (
//   <header>
    
//     <nav id={styles.mainmenu}>
//       <ul id={styles.mainmenu_list}>
//         {/* <li><Link to='/home'>Home</Link></li> */}  

//         {/* <li><Link to='/'>Home</Link></li>
//         <li><Link to='/brand'>Brand</Link></li>
//         <li><Link to='/mall'>Mall</Link></li> */}

//         {
//           mainmenus.map((item)=>(
//             <li key={item.index}><Link to={item.path}>{item.text}</Link></li>
//           ))
//         }
//       </ul>

//     </nav>

//   </header>
// )