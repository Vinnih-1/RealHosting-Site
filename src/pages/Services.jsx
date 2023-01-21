import './services/services.css'
import { Card } from "../components/Card/Card"
import { Warn } from "../components/Layout/Warn/Warn"

export const Services = () => {
    return (
        <div>
            <Warn
                title="Escolha um dos nossos serviços e aproveite nossas qualidades "
                text="Promova hoje seu servidor com uma hospedagem com uma alta qualidade e proteção contra qualquer tipo de ataque."
            />
            <div className="layservices">
                    <Card
                        image='https://cdn.discordapp.com/attachments/835219525825462272/1063233848021897296/Minecraft_Grass-512x512_1.png'
                        title='Hospedagem de Minecraft'
                        price='2,50'
                        text='Servidores de Minecraft com ótima facilidade de administrar e criar rapidamente com ping estável.'
                        color="#F9F3EB"
                    />
                    <Card
                        image='https://cdn.discordapp.com/attachments/835219525825462272/1063234098245668934/discord-mark-blue_2_1.png'
                        title='Hospedagem de Bot'
                        price='1,25'
                        text='Crie seu próprio bot de discord e hospede conosco com planos super baratos.'
                        color="#F9F3EB"
                    />
            </div>
        </div>
    )
}
