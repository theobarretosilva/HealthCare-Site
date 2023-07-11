import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import React from 'react'

export function LayoutBase() {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}