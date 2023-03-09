import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
import "./Layout.css"

const Layout = () => {
    return (
        <div className=''>
            <Header />
            <div className="outlet" >
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout