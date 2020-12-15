import React from 'react'

import '../styles/Presentacion.css'

//Components
import PresentacionPhoto from './PresentacionPhoto'

const Presentacion = ()=>{
  return(
    <div className="Presentacion">
      <h2>PRESENTACIÓN</h2>
      <PresentacionPhoto />
    </div>
  )
}


export default Presentacion