import React, { useState } from 'react'
import {motion} from 'framer-motion';

const App = () => {

  const moveVariant = {
    start:{
      x:0,
      rotate:0,
      scale:1
    },
    end:{
      x:600,
      rotate:360,
      scale:1.2
    }
    
  }
  
  return (
    <div>
      <motion.div 
      variants={moveVariant}
      initial='start'
      animate='end'
      transition={{
        duration:2,
        delay:1,
        ease:'anticipate'
      }}

      className="box"></motion.div>
      <motion.div 
      variants={moveVariant}
      initial='start'
      animate='end'
      transition={{
        duration:2,
        delay:1,
        ease:'anticipate'
      }}
      className="circle"></motion.div>
    </div>
  )
}

export default App