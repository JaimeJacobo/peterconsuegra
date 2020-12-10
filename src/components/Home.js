import React from 'react'

import '../styles/Home.css'

//Components
import MainPhoto from './MainPhoto'
import MainContent from './MainContent'

const Home = ()=>{
  return(
    <div className="Home">
      <MainContent />
      <MainPhoto />
    </div>
  )
}


export default Home