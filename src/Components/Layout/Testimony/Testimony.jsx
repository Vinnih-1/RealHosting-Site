import Client from '../../Client/Client'
import './Testimony.css'
export const Testimony = () => {
    return (
        <section className='section_testimony'>
            <h1 className="title_testimony">Depoimentos de nossos Clientes</h1>
            <p className="text_testimony">Veja alguns depoimentos de clientes que adquiriram
                alguns dos nossos serviços.</p>
            <div>
                <Client
                    image="https://cdn.discordapp.com/attachments/701489669673844887/1060566748509769728/Ellipse_1.png"
                    client="JS Studio"
                    comment="Serviço de ótima qualidade e
                    com grande proteção, Recomendo!"
                />
                <Client
                    image="https://cdn.discordapp.com/attachments/701489669673844887/1060571365729648720/Ellipse_1_1.png"
                    client="LordBluue3"
                    comment="Equipe de suporte com excelentes 
                    profissionais, recomendo utilizar os serviços
                    dessa empresa."
                />
                <Client
                    image="https://cdn.discordapp.com/attachments/701489669673844887/1060571944069627924/Ellipse_1_2.png"
                    client="Nyuu"
                    comment="Serviço de ótima qualidade e
                    com grande proteção, Recomendo!"
                />
            </div>
        </section>
    )
}
export default Testimony