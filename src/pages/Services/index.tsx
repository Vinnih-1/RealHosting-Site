import { Navbar } from "../../components/navbar/Navbar"
import { Footer } from "../../components/footer/Footer"

import "./styles.scss"
import { CardService } from "./../../components/services/CardService"

// @ts-ignore
import serviceMta from "../../assets/service-mta.svg"

// @ts-ignore
import serviceMinecraft from "../../assets/service-minecraft.svg"

// @ts-ignore
import serviceFivem from "../../assets/service-fivem.svg"

export function Services() {
    return(
        <>
            <Navbar/>
            <div className="container-fluid mt-2 overlay-services d-flex flex-column align-items-center text-center">
                <h2 className="mt-4 fw-bold fs-1">Escolha um dos nossos serviços <br/> e aproveite nossas qualidades</h2>
                <p className="mb-4">Promova hoje seu servidor com uma hospedagem com uma <br/>
alta qualidade e proteção contra qualquer tipo de ataque.</p>
            </div>
            <div className="container-fluid mt-5">
                <div className="row justify-content-center row-cols-3">
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
            <Footer/>
        </>
    )
}