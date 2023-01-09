import { Faq } from '../../../Faq/Faq'
import './Question.css'
export const Question = () => {
    return (
        <section className='section_question'>
            <h1 className='title_question'>Perguntas Frequentes</h1>
            <div className='container_faq'>
                <Faq />
                <Faq />
                <Faq />
            </div>
        </section>
    )
}
