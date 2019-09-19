import React from 'react'
import Head from './head'
import Nav from './nav'

export default ({children }) => (
  <div>
    <Head />
    <Nav />
    {children}
    <footer></footer>
  </div>
)