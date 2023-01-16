import { Card } from '../../../Card/Card'
import './Plans.css'
export const Plans = () => {
    return (
        <div className="section_plans">
            <div className='container_plans'>
                <h1 className='title_plans'>Confira os nossos principais plano totalmente ideal para o seu projeto</h1>
                <p className='text_plans'>Promova hoje seu servidor com uma
                    hospedagem com umaalta qualidade e proteção
                    contra qualquer tipo de ataque.
                </p>
            </div>
            <div className='card_plans'>
                <Card
                    image='https://cdn.discordapp.com/attachments/835219525825462272/1063233848021897296/Minecraft_Grass-512x512_1.png'
                    title='Hospedagem de Minecraft'
                    price='2,50'
                    text='Servidores de Minecraft com ótima facilidade de administrar e criar rapidamente com ping estável.'
                />
                <Card
                    image='https://cdn.discordapp.com/attachments/835219525825462272/1064438288800293004/discord.png'
                    title='Hospedagem de Bot'
                    price='1,25'
                    text='Crie seu próprio bot de discord e hospede conosco com planos super baratos.'
                />
            </div>
        </div>
    )
}
