
// @ts-ignore
import logo from "../../assets/realhosting-logo2.svg"

// @ts-ignore
import user from "../../assets/realhosting-user.svg"

// @ts-ignore
import discord from "../../assets/discord-logo.svg"

// @ts-ignore
import terms from "../../assets/terms-logo.svg"

import "./styles.scss"

export function Navbar() {
    return(
        <>
        <div className="container-fluid d-flex justify-content-around py-1 realhosting-color-background overtop">
            <a className="d-flex align-items-center gap-2" href="">
                <img src={discord} alt="" />
                Atendimento via Discord RealHosting
            </a>

            <a className="d-flex align-items-center gap-2" href="">
                <img src={terms} alt="" />
                Termos e Políticas
            </a>
        </div>
        <nav className="navbar navbar-expand-lg mt-2">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width={203}/>
                </a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarRealHostingTarget">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarRealHostingTarget">
                    <ul className="navbar-nav gap-4 fs-5 fw-medium realhosting-navbar-text">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Início</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className=" nav-link dropdown-toggle" data-bs-toggle="dropdown">Hospedagem</a>
                            <ul className="dropdown-menu realhosting-color-background realhosting-dropdown-menu p-3 fs-6 ">
                                <li><a className="dropdown-item" href="">Minecraft</a></li>
                                <li><a className="dropdown-item" href="">Multi Theft Auto</a></li>
                                <li><a className="dropdown-item" href="">FiveM</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Servidores</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Suporte</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Outros</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center gap-4">
                    <a href="#" className="nav-link register-link realhosting-color-text">Registre-se</a>
                    <button className="btn realhosting-account-button realhosting-color-background p-2 d-flex align-items-center gap-2 px-4">
                        <img className="account-button-image" src={user} alt="" />
                        Minha conta
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
}