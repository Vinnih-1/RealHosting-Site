import './Faq.css'
import arrow from './../../assets/Img/seta.png'
export const Faq = () => {
    return (
        <div className='faq'>
            <div className="question">
                <p className='text_question'>Qual é o tempo de ativação do serviço?</p>
                <img src={arrow} alt="" />
            </div>
            <div className="answer">
                <p className='text_answer'>
                    Nosso tempo de ativação dura em torno de 5
                    Minutos após a compra e validação do serviço
                    escolhido.
                </p>
            </div>
        </div>
    )
}
