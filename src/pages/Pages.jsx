import React from 'react'
import Home from './Home'
import Cusine from './Cusine'
import Searched from './Searched'
import { Route,Routes, BrowserRouter } from 'react-router-dom'
import Recipe from './Recipe'

function Pages() {
  return (
  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cusine/:type' element={<Cusine/>} />
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/recipe/:name' element={<Recipe/>}/>
      </Routes>
    )
}

export default Pages