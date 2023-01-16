import './Faq.css'
import arrow from './../../assets/Img/seta.png'
export const Faq = ({ question, answer }) => {
    return (
        <div className='faq'>
            <div className="question">
                <p className='text_question'>{question}</p>
                <img src={arrow} alt="" className='arrow' />
            </div>
            <div className="answer">
                <p className='text_answer'>
                    {answer}
                </p>
            </div>
        </div>
    )
}
