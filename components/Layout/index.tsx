import React from 'react'
import Header from './Header'

function Layout({ children }: any) {
  return (
    <>
        <Header />
        <main>{children}</main>
    </>
  )
}

export default Layout