import {useEffect, useState, useRef} from 'react'
import {motion} from 'framer-motion'
import {Card} from '../../../Card/Card'
import './Plans.css'
export const Plans = () => {
    const carousel = useRef();
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <motion.section className="section_plans" ref={carousel} whileTap={{cursor: 'grabbing'}}>
            <motion.div className='container_plans'>
                <h1 className='title_plans'>Confira os nossos principais plano totalmente ideal para o seu projeto</h1>
                <p className='text_plans'>Promova hoje seu servidor com uma
                    hospedagem com umaalta qualidade e proteção
                    contra qualquer tipo de ataque.
                </p>
            </motion.div>
            <motion.div className='card_plans'
                         drag="x"
                         dragConstraints={{ right: 0, left: -width }}
                         initial={{ x: 100 }}
                         animate={{ x: 0 }}>
                <Card
                    image='https://cdn.discordapp.com/attachments/701489669673844887/1060199537483980860/image_4.png'
                    title='Hospedagem MTA'
                    price='9,99'
                    text='Servidores MTA com um sistema 
                inovador de compactador e download
                e hospedagem totalmente Brasileira.'/>
                <Card
                    image='https://cdn.discordapp.com/attachments/701489669673844887/1060210162754932776/image_5.png'
                    title='Hospedagem de Minecraft'
                    price='9,99'
                    text='Servidores de Minecraft com ótima
                facilidade de administrar e criar
                rapidamente com ping Brasileiro.'/>
                <Card
                    image='https://cdn.discordapp.com/attachments/701489669673844887/1060210543220228106/image_5_1.png'
                    title='Hospedagem de FiveM  '
                    price='9,99'
                    text='Crie seu servidor RP com ótimas
                qualidades e proteções para sua
                 comunidade e divirta-se'/>

            </motion.div>
        </motion.section>
    )
}
