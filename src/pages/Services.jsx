import { Card } from "../components/Card/Card"
import { Warn } from "../components/Layout/Warn/Warn"

export const Services = () => {
    return (
        <div>
            <Warn
                title="Escolha um dos nossos serviços e aproveite nossas qualidades "
                text="Promova hoje seu servidor com uma hospedagem com uma alta qualidade e proteção contra qualquer tipo de ataque."
            />
            <div>
            <Card
                    image='https://cdn.discordapp.com/attachments/701489669673844887/1060199537483980860/image_4.png'
                    title='Hospedagem MTA'
                    price='9,99'
                    text='Servidores MTA com um sistema 
                inovador de compactador e download
                e hospedagem totalmente Brasileira.'
                    color="#F9F3EB"
                />
                <Card
                    image='https://cdn.discordapp.com/attachments/701489669673844887/1060210162754932776/image_5.png'
                    title='Hospedagem de Minecraft'
                    price='9,99'
                    text='Servidores de Minecraft com ótima
                facilidade de administrar e criar
                rapidamente com ping Brasileiro.'
                    color="#F9F3EB"
                />
                <Card
                    image='https://cdn.discordapp.com/attachments/701489669673844887/1060210543220228106/image_5_1.png'
                    title='Hospedagem de FiveM  '
                    price='9,99'
                    text='Crie seu servidor RP com ótimas
                qualidades e proteções para sua
                 comunidade e divirta-se'
                    color="#F9F3EB"
                />
            </div>
        </div>
    )
}
