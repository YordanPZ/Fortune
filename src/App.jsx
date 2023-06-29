import './App.css'
import Card from './components/Card'
import { motion } from 'framer-motion'


//! Esto no puedo importarlo a otro componente?
import phrases from "./data/phrases.json"

function App() {

  return (
    <>
    <motion.div
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{
          duration:1,
          ease:"easeInOut",
          delay:0.2,
          type:"spring"
        }}
    className='Title'>
    <motion.h1>
      GALLETAS DE LA FORTUNA</motion.h1>
    </motion.div>
    <Card data = {phrases}/>
    </>
  )
}

export default App
