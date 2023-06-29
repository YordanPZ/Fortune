import { useState } from "react"
import Author from "./Author"
import Historial from "./Historial"
import { motion } from "framer-motion"
import Cookie from "./Cookie"

const ButtonCard = ({data}) => {

    const [number,setNumber] = useState(0)
    const [historial,setHistorial] = useState([])
    const [phrase,setPhrase] = useState("Quieres probar tu fortuna?" )
    const [imgNumber,setImgNumber] = useState(1)

    const change = ()=>{

        setNumber(Math.ceil(Math.random() * data.length-1))

        if (imgNumber>2) {
            setImgNumber(1)
        }else{ 
            setImgNumber(imgNumber +1)
        }

        if (historial.length<3){
            setHistorial(historial.concat([data[number].phrase]))
        }else{
            setHistorial([data[number].phrase])
        }
        setPhrase(data[number].phrase)
        setAuthor(dates)   
    }

    let dates = [...data,number]

    let datesCopy = structuredClone(dates)
    datesCopy[0].Author = ""

    const [author,setAuthor] = useState([datesCopy])

    document.body.style = `
    background-image: url(/Asian${imgNumber}Blur.jpg)`

    let icon
    phrase === "Quieres probar tu fortuna?"
    ?icon = <i className="fa-solid fa-arrow-down"></i>
    :icon = ""

    let fortunePhrase
    phrase === "Quieres probar tu fortuna?"
    ?fortunePhrase = ""
    :fortunePhrase = "Mensajes de tus Galletas de la Fortuna!"

    let stylesM

    if (fortunePhrase === "Mensajes de tus Galletas de la Fortuna!") {
        stylesM = {
            border: "2.5px solid red"
        }  
    }else{
        stylesM = {}
    }

    const variants = {
        hover:{
            scale:[1,1.1,1],
            boxShadow: "0px 0px 8px #fff",
            textShadow:"0px 0px 8px #fff",
            transition:{
                repeat:Infinity,duration:1
            }
        }
    }

    return (
    <>
    <section className="section__fortune">
        <motion.div
            initial={{ scale: 0 }}
            animate={{ opacity:1, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration:2}}
            className="div__fortune">
            
            <motion.h2
                transition={{repeat:Infinity,duration:2}}
                className="Subtitle"> 
                
                {phrase}
            </motion.h2>
            
            <p className="icono">{icon}</p>
            <Author data={author} />
        </motion.div>

        <motion.button
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{
                duration:1,
                ease:"easeInOut",
                delay:0.2,
                type:"spring"
            }}
            variants={variants}
            whileHover="hover"
            className="btn__card"
            onClick={change}>
            <p>Prueba tu suerte!</p>
        </motion.button>
        <div className="p__div">
        <motion.p
        className="icono"
        style={stylesM}
        
        >{fortunePhrase}</motion.p> 
        </div>
        <div className="div__historial">
            <Historial data={historial[0]} />
            <Historial data={historial[1]} />
            <Historial data={historial[2]} />
        </div>
    </section>
    <Cookie/>
    
    </>
    );
}
export default ButtonCard