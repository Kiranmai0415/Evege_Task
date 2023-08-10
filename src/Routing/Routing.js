import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Components/Header'
import Main from '../Components/Main'
import Icons from '../Components/Icons'
import TablePage from '../Components/TablePage'

const Routing = () => {
  return (
    <div><BrowserRouter>
    <Routes>
        <Route path = '/header' element={<Header/>}/>
        <Route path = '/main' element={<Main/>}/>
        <Route path = '/icons' element={<Icons/>}/>
        <Route path = '/table' element={<TablePage/>}/>
    </Routes>
    </BrowserRouter></div>
  )
}

export default Routing