//rafce - react arrow functional component export
//rafc
//rfc
//rfce
//rcc
//rce
//imr
//imrd
//imbr


import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import GetUsers from './Pages/GetUsers'
import AddUsers from './Pages/AddUsers'
import UpdateUsers from './Pages/UpdateUsers'
import "./style.css"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<GetUsers/>}></Route>
        <Route path='/add' element={<AddUsers/>}></Route>
        <Route path='/edit/:id' element={<UpdateUsers/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App