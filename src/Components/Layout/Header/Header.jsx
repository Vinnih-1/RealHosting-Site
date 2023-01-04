import './Header.css'
import hamburguer from './../../../Img/hamburguer.svg'
import user from './../../../Img/user.svg'
import user2 from './../../../Img/user2.svg'
import discord from './../../../Img/discord.svg'
import termos from './../../../Img/termos.svg'
import Paragraph from '../../Paragraph/Paragraph'

export const Header = () => {
    return (
        <header>
            <div className="header_disclosure">
                <div className='container_warns'>
                    <div>
                        <img src={discord} alt="Icone do discord" />
                        <Paragraph color="white" text="Atendimento via Discord RealHosting" />
                    </div>
                    <div>
                        <img src={termos} alt="Termos e Políticas" />
                        <Paragraph color="white" text="Termos e Políticas" />
                    </div>
                </div>
            </div>
            <nav>
                <div className='container_nav'>
                    <div>
                        <img src={hamburguer} alt="menu hamburguer responsivo" className='hamburguer' />
                        <img src='https://cdn.discordapp.com/attachments/1053495855103098951/1059526854081515590/Frame_4.png' alt="logo tipo da Real Hosting" className='logo' />
                    </div>
                    <ul>
                        <li>Início</li>
                        <li>Hospedagem</li>
                        <li>Servidores</li>
                        <li>Suporte</li>
                    </ul>
                    <div className='container_nav-desk'>
                        <Paragraph color="orange" text="Registre-se" />
                        <div className='container_button'>
                            <img src={user2} alt="área do cliente" className='icon_user2' />
                            <Paragraph color="white" text="Minha conta" />
                        </div>
                    </div>
                    <img src={user} alt="área do cliente" className='icon_user' />
                </div>
            </nav>
        </header>
    )
}

export default Header