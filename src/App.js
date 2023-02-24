import React from 'react'
import Header from './component/Header'
import Meme from './component/Meme';

import style from './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  )

}