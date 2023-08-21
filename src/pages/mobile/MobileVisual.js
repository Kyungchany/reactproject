import React, { useCallback, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './css/mobileVisual.module.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './css/mobileSwiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function MobileVisual() {
  const stockWrap = useRef()
  const closeStock = useCallback(()=>{

    stockWrap.current.style.display='none'
  })
  let now = new Date()
  let today = now.getDate()
  let month = now.getMonth()

  return (
      
    <div>
          <div className={styles.stock} ref={stockWrap}>
              <p className={styles.name}>SecondBattery<br></br>(10041004)<span onClick={closeStock}><i class="fa-solid fa-xmark"></i></span></p>
              <p className={styles.update}>{month+1}/{today} 1,293,000<span>23,000</span></p>
              <p className={styles.upimg}><i class="fa-solid fa-sort-up"></i></p>
          </div>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.visualWrap01}>
            <div className={styles.visual_text_box}>
              {/* <p className={styles.text01}>secondary battery representa tive</p> */}
              <p className={styles.text02}>The Global Leading<br></br><span>Company</span></p>
              <p className={styles.text03}>Earth Environment and Energy Material</p>
            </div>

            {/* <div className={styles.stock} ref={stockWrap}>
              <p className={styles.name} onClick={closeStock}>SecondBattery<br></br>(10041004)<span><i class="fa-solid fa-xmark"></i></span></p>
              <p className={styles.update}>8/09 1,293,000<span>23,000</span></p>
              <p className={styles.upimg}><i class="fa-solid fa-sort-up"></i></p>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.visualWrap02}>
            <div className={styles.visual_text_box}>
              <p className={styles.text02}>The Global Leading<br></br><span>Company</span></p>
              <p className={styles.text03}>Earth Environment and Energy Material</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.visualWrap03}>
            <div className={styles.visual_text_box}>
              <p className={styles.text02}>The Global Leading<br></br><span>Company</span></p>
              <p className={styles.text03}>Earth Environment and Energy Material</p>
            </div>

        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
