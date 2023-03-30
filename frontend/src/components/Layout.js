import React from 'react'
import Banner from './Banner'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Banner/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout
