import { motion } from "framer-motion"

const Historial = ({data}) => {
    let styleDiv

    if (data){
        const stylesD = {
            backgroundColor:"rgba(245, 197, 22, 0.847)",
            width:"90%",
            borderRadius:"10px",
            border: "1px solid",
            boxShadow: "2px 2px 10px",
            color:"red",
            textAlign: "center"
        }
        styleDiv = stylesD
    }
    
    return(
        <div className="historial__tarjet" style={styleDiv}>
            <motion.p>{data}</motion.p>
        </div>
    )
}

export default Historial