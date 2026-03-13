import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CardDefault } from './page/Product'
import Loyault from './page/Loyault'
import { HorizontalCard } from './page/Diskiripshin'
import { Create } from './page/create'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Loyault />}> 
          <Route path='/' element={<CardDefault />} />
          <Route path='/malumot/:id' element={<HorizontalCard />} />
          <Route path='/cerat' element={<Create />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App