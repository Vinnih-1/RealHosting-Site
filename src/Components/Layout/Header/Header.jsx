import './Header.css'
import hamburguer from './../../../assets/Img/hamburguer.svg'
import user from './../../../assets/Img/user.svg'
import user2 from './../../../assets/Img/user2.svg'
import discord from './../../../assets/Img/discord.svg'
import termos from './../../../assets/Img/termos.svg'
import { Paragraph } from '../../Paragraph/Paragraph'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <div className="header_disclosure">
                <div className='container_warns'>
                    <div>
                        <a href='https://discord.gg/QeyzFqcE9u'>
                        <img src={discord} alt="Icone do discord" id="discord"/>
                        <Paragraph color="white" text="Atendimento via Discord RealHosting" />
                        </a>
                    </div>
                    <div>
                        <a href='https://cdn.discordapp.com/attachments/835219525825462272/1066492270276255814/terms.pdf'>
                            <img src={termos} alt="Termos e Políticas" id="term" />
                            <Paragraph color="white" text="Termos e Políticas" />
                        </a>
                    </div>
                </div>
            </div>
            <nav>
                <div className='container_nav'>
                    <div className='logo'>
                        <img src={hamburguer} alt="menu hamburguer responsivo" className='hamburguer' />
                        <img src='https://cdn.discordapp.com/attachments/1053495855103098951/1059526854081515590/Frame_4.png' alt="logo tipo da Real Hosting" className='logo' />
                    </div>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/serviços">Hospedagem</Link></li>
                        <li><Link to="/serviços">Seviços</Link></li>
                        <li><a href='https://discord.gg/QeyzFqcE9u'>Suporte</a></li>
                    </ul>
                    <div className='container_nav-desk'>
                        <Paragraph color="orange" text="Registre-se" />
                        <a href='https://app.realhosting.com.br'>
                            <div className='container_button'>
                                <img src={user2} alt="área do cliente" className='icon_user2' />
                                <Paragraph color="white" text="Minha conta" />
                            </div>
                        </a>
                    </div>
                    <a href='https://app.realhosting.com.br' id='user_link'>
                        <img src={user} alt="área do cliente" className='icon_user' />
                    </a>
                </div>
            </nav>
        </header>
    )
}

