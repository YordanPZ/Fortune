import { motion } from "framer-motion"


function Cookie() {
  

  return (
    <div className="cookie__container">
      <motion.img 
      initial={{scale:0,x:200}}
      animate={{opacity:[0,1,1,0],scale:[0.2],x:[0,200,0]}}
      transition={{delay:2,repeat:Infinity,duration:8,ease:"anticipate"}}
      src="/1cookie.png" alt="cookie" />
        <motion.img 
      initial={{scale:0,x:200}}
      animate={{opacity:[0,1,1,0],scale:[0.2],x:[0,200,0]}}
      transition={{delay:2,repeat:Infinity,duration:8,ease:"anticipate"}}
      src="/2cookie.png" alt="cookie" />
        <motion.img 
      initial={{scale:0,x:200}}
      animate={{opacity:[0,1,1,0],scale:[0.2],x:[0,200,0]}}
      transition={{delay:1.3,repeat:Infinity,duration:8,ease:"linear"}}
      src="/3cookie.png" alt="cookie" />
        <motion.img 
      initial={{scale:0,x:200}}
      animate={{opacity:[0,1,1,0],scale:[0.2],x:[0,200,0]}}
      transition={{delay:0,repeat:Infinity,duration:8,ease:"circInOut"}}
      src="/4cookie.png" alt="cookie" />
        <motion.img 
      initial={{scale:0,y:200}}
      animate={{opacity:[0,1,1,0],scale:[0.2],x:[0,200,0]}}
      transition={{delay:2.3,repeat:Infinity,duration:8,ease:"easeOut"}}
      src="/5cookie.png" alt="cookie" />
    </div>
  )
}

export default Cookie