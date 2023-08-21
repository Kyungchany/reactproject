import React, { useCallback, useRef } from 'react'
import styles from './css/visual.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './css/swiper.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Visual() {

  const stockWrap = useRef()
  const closeStock = useCallback(()=>{
    stockWrap.current.style.display="none";
  }, [])
  let now= new Date()
  let month=now.getMonth()
  let today=now.getDate()


  // console.log(today)
  return (
   
    <div id={styles.visual_wrap}>
      
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay:5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
        
            <SwiperSlide>
            <div className={styles.visual01}>
                <div className={styles.title_text_box}>
                  <p className={styles.visual_text01}>secondary battery representa tive</p>
                  <p className={styles.visual_title}>The Global Leading<br></br><span>Company</span></p>
                  <p className={styles.visual_text02}>Earth Environment and Energy Material</p>
                </div>
            </div>
            
            </SwiperSlide>
          
          
            <SwiperSlide>
              
            <div className={styles.visual02}>
              <div className={styles.title_text_box}>
                <p className={styles.visual_text01}>secondary battery representa tive</p>
                <p className={styles.visual_title}>The Global Leading <br></br><span>Company</span></p>
                <p className={styles.visual_text02}>Earth Environment and Energy Material</p>
              </div>
            </div>
            </SwiperSlide>
          
          
            <SwiperSlide>
            <div className={styles.visual03}>
                <div className={styles.title_text_box}>
                  <p className={styles.visual_text01}>secondary battery representa tive</p>
                  <p className={styles.visual_title}>The Global Leading <br></br><span>Company</span></p>
                  <p className={styles.visual_text02}>Earth Environment and Energy Material</p>
                </div>
            </div>
            
            </SwiperSlide>

            </Swiper>

            <div className={styles.stock} ref={stockWrap}>
              <p className={styles.name}>SecondBattery<br></br>(10041004)<span onClick={closeStock}><i class="fa-solid fa-xmark"></i></span></p>
              <p className={styles.update}>{month+1}/{today} 1,293,000<span>23,000</span></p>
              <p className={styles.upimg}><i class="fa-solid fa-sort-up"></i></p>
               
            </div>
        
    
    
    </div>
        
    
  )
}
