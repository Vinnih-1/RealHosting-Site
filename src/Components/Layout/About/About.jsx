import { useEffect, useState, useRef} from 'react'
import {motion} from 'framer-motion'
import suport from './../../../Img/about/suporte.png'
import protection from './../../../Img/about/protecao.png'
import host from './../../../Img/about/hospedagem.png'
import quality from './../../../Img/about/qualidade.png'
import system from './../../../Img/about/sistemas.png'
import './About.css'
export const About = () => {

    const carousel = useRef();
    const [width, setWidth] = useState();

    useEffect(()=>{  
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
}, [])
    
    return (
        <motion.section className='section_about' ref={carousel} whileTap={{cursor: "grabbing"}} >
           <motion.div className='container_cards' 
           drag="x" 
           dragConstraints={{right:0, left:-width}}
           initial={{x: 100}}
           animate={{x: 0}}
           >
           <motion.div className='container_about'>
                <img src={suport} alt="Suporte especializado" />
                <p className='text_about'>Suporte <br></br> Especializado</p>
            </motion.div>
            <motion.div className='container_about'>
                <img src={protection} alt="Proteção de Dados" />
                <p className='text_about'>Proteção de<br></br> Dados</p>
            </motion.div>
            <motion.div className='container_about'>
                <img src={host} alt="Hospedagem Licenciada" />
                <p className='text_about'>Hospedagem<br></br> Licenciada</p>
            </motion.div>
            <motion.div className='container_about'>
                <img src={quality} alt="Qualidade e Perfomance" />
                <p className='text_about'>Qualidade &<br></br> Perfomance</p>
            </motion.div>
            <motion.div className='container_about'>
                <img src={system} alt="Sistemas Inteligentes" />
                <p className='text_about'>Sistemas<br></br> Inteligentes</p>
            </motion.div>
           </motion.div>
        </motion.section>
    )
}
export default About