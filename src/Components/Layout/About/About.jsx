import suport from './../../../Img/about/suporte.png'
import protection from './../../../Img/about/protecao.png'
import host from './../../../Img/about/hospedagem.png'
import quality from './../../../Img/about/qualidade.png'
import system from './../../../Img/about/sistemas.png'
import './About.css'
export const About = () => {
    return (
        <section className='section_about'>
            <div className='container_about'>
                <img src={suport} alt="Suporte especializado" />
                <p className='text_about'>Suporte <br></br> Especializado</p>
            </div>
            <div className='container_about'>
                <img src={protection} alt="Proteção de Dados" />
                <p className='text_about'>Proteção de<br></br> Dados</p>
            </div>
            <div className='container_about'>
                <img src={host} alt="Hospedagem Licenciada" />
                <p className='text_about'>Hospedagem<br></br> Licenciada</p>
            </div>
            <div className='container_about'>
                <img src={quality} alt="Qualidade e Perfomance" />
                <p className='text_about'>Qualidade &<br></br> Perfomance</p>
            </div>
            <div className='container_about'>
                <img src={system} alt="Sistemas Inteligentes" />
                <p className='text_about'>Sistemas<br></br> Inteligentes</p>
            </div>
        </section>
    )
}
export default About