
// @ts-ignore
import logo from "../../assets/realhosting-logo2.svg"
import "./styles.scss"

export function Footer() {
    return(
        <div className="mt-5 footer pt-5">
            <div className="contents d-flex justify-content-around">
                <div className="about">
                    <img src={logo} alt="Logo da RealHosting" />
                    <div className="mt-4 text-body-secondary">A empresa tem a intenção de prover o serviço 
                    de hospedagem de servidores, inicialmente de 
                    Minecraft e, posteriormente de vários outros 
                    tipos de jogos, como FiveM, MTA, Minecraft 
                    Bedrock, etc...

                    Qualidades e proteções contra qualquer tipo de
                    ataques em nossos servidores.</div>
                </div>

                <div className="links d-flex justify-content-around gap-4">
                    <div className="services-footer">
                        <h4 className="fw-bold fs-5 text-body-secondary">Serviços</h4>
                        <ul className="list-unstyled">
                            <li><a className="text-decoration-none text-body-secondary" href="">Multi Theft Auto - MTA</a></li>
                            <li><a className="text-decoration-none text-body-secondary" href="">Minecraft</a></li>
                            <li><a className="text-decoration-none text-body-secondary" href="">FiveM</a></li>
                            <li><a className="text-decoration-none text-body-secondary" href="">Minecraft Bedrock</a></li>
                            <li><a className="text-decoration-none text-body-secondary" href="">Outros</a></li>
                        </ul>
                    </div>

                    <div className="support-footer">
                        <h4 className="fw-bold fs-5 text-body-secondary">Suporte</h4>
                        <ul className="list-unstyled">
                            <li><a className="text-decoration-none text-body-secondary" href="">Área do cliente</a></li>
                            <li><a className="text-decoration-none text-body-secondary" href="">Email</a></li>
                            <li><a className="text-decoration-none text-body-secondary" href="">Discord</a></li>
                            <li><a className="text-decoration-none text-body-secondary" href="">Termos e serviços</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container under-footer">
                <hr />
                <div className="contents d-flex justify-content-between">
                    <div className="text-body-secondary">RealHosting Hospedagem Ltda. Copyright © 2021 - 2022</div>
                    <div className="text-body-secondary">Termos & políticas</div>
                </div>
            </div>
        </div>
    )
}