import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const App = () => {



  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const boxRef = useRef(null)

  useGSAP(function(){
    gsap.to(boxRef.current,{
      x:x,
      y:y
    })
  },[x,y])



  return (
    <div>
      <div ref={boxRef} className="box"></div>
      <button onClick={()=>{
        setX(x+100)

      }}>MoveX</button>
      <button onClick={()=>{
        setY(y+100)

      }}>MoveY</button>
    </div>
  )
}

export default App
