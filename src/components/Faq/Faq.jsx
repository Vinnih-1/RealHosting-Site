import './Faq.css'
import arrow from './../../assets/Img/seta.png'
export const Faq = () => {
    function drop(){
        document.getElementsByClassName("answer").style = "background-color: black !important;"
    }
    return (
        <div className='faq'>
            <div className="question" onClick={drop}>
                <p className='text_question'>Qual é o tempo de ativação do serviço?</p>
                <img src={arrow} alt="" className='arrow' />
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
