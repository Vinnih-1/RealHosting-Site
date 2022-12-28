import './Footer.css'
import logoFooter from './../../../Img/logo_footer.png'
export const Footer = () => {
    return (
        <footer>
            <div className='container_text'>
                <p className='text'>
                    <img src={logoFooter} alt="" />
                    <br></br>
                    <br></br>
                    A empresa tem a intenção de prover o serviço
                    de hospedagem de servidores, inicialmente de
                    Minecraft e, posteriormente de vários outros
                    tipos de jogos, como FiveM, MTA, Minecraft
                    Bedrock, etc...
                    <br></br>
                    <br></br>
                    Qualidades e proteções contra qualquer tipo de
                    ataques em nossos servidores.
                </p>
            </div>
            <div className='container_links'>
                <h2>Serviços</h2>
                <br></br>
                <p className='text'>Multi Theft Auto - MTA</p>
                <br></br>
                <p className='text'>Minecraft</p>
                <br></br>
                <p className='text'>FiveM</p>
                <br></br>
                <p className='text'>Minecraft Bedrock</p>
                <br></br>
                <p className='text'>Outros</p>
            </div>
            <div className='container_links'>
                <h2>Suporte</h2>
                <br></br>
                <p className='text'>Área do cliente</p>
                <br></br>
                <p className='text'>Email</p>
                <br></br>
                <p className='text'>Discord</p>
                <br></br>
                <p className='text'>Termos e serviços</p>
                <br></br>
            </div>
            <div className='container_copy'> 
                <p className='text'>RealHosting Hospedagem Ltda. Copyright
                    © 2021 - 2022</p>
                <br></br>
                <p className='text'>Termos & políticas</p>

            </div>
        </footer>
    )
}
export default Footer