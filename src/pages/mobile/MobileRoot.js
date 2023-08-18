import React from 'react'
import MobileHeader from './MobileHeader'
import MobileFooter from './MobileFooter'
import { Outlet } from 'react-router-dom'

export default function MobileRoot() {
  return (
    <>

      <MobileHeader/>
      <Outlet/>
      <MobileFooter/>

    </>
  )
}
