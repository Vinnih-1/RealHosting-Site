import { Navbar } from "../../components/navbar/Navbar";
import "./styles.scss"
import { Feature } from "../../components/feature/Feature";
import AliceCarousel from 'react-alice-carousel';

// @ts-ignore
import supportFeature from "../../assets/support-feature.svg"

// @ts-ignore
import dataProtection from "../../assets/data-protection.svg"

// @ts-ignore
import licensedHost from "../../assets/licensed-host.svg"

// @ts-ignore
import qualityAndPerformance from "../../assets/quality-and-performance.svg"

// @ts-ignore
import smartSystem from "../../assets/smart-system.svg"

// @ts-ignore
import serviceMta from "../../assets/service-mta.svg"

// @ts-ignore
import serviceMinecraft from "../../assets/service-minecraft.svg"

// @ts-ignore
import serviceFivem from "../../assets/service-fivem.svg"

// @ts-ignore
import client1Avatar from "../../assets/client1-avatar.svg"

// @ts-ignore
import client2Avatar from "../../assets/client2-avatar.svg"
// @ts-ignore
import client3Avatar from "../../assets/client3-avatar.svg"

import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { CardService } from "../../components/services/CardService";
import { Feedback } from "../../components/feedbacks/Feedback";
import { FaqCollapse } from "../../components/faq/FaqCollapse";
import { Footer } from "../../components/footer/Footer";

export function Home() {
    const featureItems = [
        <Feature featureTitle={"Suporte Especializado"} iconPath={supportFeature}/>,
        <Feature featureTitle={"Proteção de Dados"} iconPath={dataProtection}/>,
        <Feature featureTitle={"Hospedagem Licenciada"} iconPath={licensedHost}/>,
        <Feature featureTitle={"Qualidade & Performance"} iconPath={qualityAndPerformance}/>,
        <Feature featureTitle={"Sistemas Inteligentes"} iconPath={smartSystem}/>
    ]

    const feedbackItems = [
        <Feedback author="JS Studio" role="Cliente" avatar={client1Avatar} message="Serviço de ótima qualidade e com grande proteção, Recomendo!"/>,
        <Feedback author="LordBluue3" role="Cliente" avatar={client2Avatar} message="Equipe de suporte com excelentes profissionais, recomendo utilizar os serviços dessa empresa."/>,
        <Feedback author="JS Studio" role="Cliente" avatar={client3Avatar} message="Serviço de ótima qualidade e com grande proteção, Recomendo!"/>
    ]

    const featureResponsive = {
        0: { items: 2 },
        568: { items: 2 },
        1024: { items: 5 },
    }

    const feedbackResponsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    }

    return(
        <>
            <Navbar/>

            <div className="header-image">
                <div className="container mt-2 py-5 overlay">
                    <h3 className="text-white fs-3 fw-bold mb-3 me-5">Bem vindo a melhor plataforma de <br/> Hospedagem do mercado.</h3>
                    <p className="description fs-6">Hospede o seu servidor hoje mesmo em um ambiente <br/> com servidores 100% em Armazenamento SSD e <br/> infraestrutura de ponta no Brasil.</p>
                    <button className="btn px-4 realhosting-account-button realhosting-color-background">Crie sua conta</button>
                </div>
            </div>
            <div className="container d-flex mt-4 justify-content-around">
                <AliceCarousel
                responsive={featureResponsive}
                infinite
                items={featureItems}
                disableButtonsControls
                disableSlideInfo
                disableDotsControls
                />
            </div>
            <div className="container-fluid services mt-4 pt-5 d-flex justify-content-center flex-column">
                <div className="container description text-center w-75">
                    <h3 className="fw-bold">Confira os nossos principais plano <br/> totalmente ideal para o seu projeto</h3>
                    <p>Promova hoje seu servidor com uma hospedagem com uma <br/> alta qualidade e proteção contra qualquer tipo de ataque.</p>
                </div>
                <div className="row justify-content-center row-cols-1 row-cols-md-3 g-4 mt-5 plans">
                    <CardService title="Hospedagem de MTA"
                    price="9,99" 
                    description="Servidores MTA com um sistema inovador de compactador e download e hospedagem totalmente Brasileira."
                    thumbnail={serviceMta} />
                    <CardService title="Hospedagem de Minecraft"
                    price="9,99" 
                    description="Servidores de Minecraft com ótima facilidade de administrar e criar rapidamente com ping Brasileiro."
                    thumbnail={serviceMinecraft} />
                    <CardService title="Hospedagem de FiveM"
                    price="9,99" 
                    description="Crie seu servidor RP com ótimas qualidades e proteções para sua comunidade e divirta-se"
                    thumbnail={serviceFivem} />
                </div>
            </div>
            <div className="container feedbacks mt-5">
                <div className="container text-center description mb-5">
                    <h3 className="fw-bold">Depoimentos de nossos Clientes</h3>
                    <p>Veja alguns depoimentos de clientes que adquiriram <br/> alguns dos nossos serviços.</p>
                </div>

                <div className="container-fluid d-flex justify-content-around mt-5">
                    <AliceCarousel
                        mouseTracking
                        infinite
                        responsive={feedbackResponsive}
                        items={feedbackItems}
                        disableButtonsControls
                        disableDotsControls
                        disableSlideInfo
                    />
                </div>
            </div>
            <div className="container faq mt-5">
                <h3 className="fw-bold text-center my-4">Perguntas Frequentes</h3>
                <FaqCollapse/>
            </div>
            <Footer />
        </>
    )
}