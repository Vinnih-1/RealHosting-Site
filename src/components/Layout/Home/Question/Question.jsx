import { Faq } from '../../../Faq/Faq'
import './Question.css'
export const Question = () => {
    return (
        <section className='section_question'>
            <h1 className='title_question'>Perguntas Frequentes</h1>
            <div className='container_faq'>
                <Faq 
                question={"Quanto tempo leva para a ativação da minha compra?"}
                answer={"Nosso tempo de ativação dura em torno de 5 Minutos após a compra e validação do serviço escolhido."}
                />
                
                <Faq 
                question={"Caso eu não goste, eu posso pedir reembolso?"}
                answer={"Sim! Todos os clientes tem direito a uma proteção de 7 dias para pedir o reembolso integral."}
                />

                <Faq 
                question={"Qual o processador vocês usam?"}
                answer={"Atualmente nós usamos um Intel Core i7 7700K OC - 5.0Ghz."}
                />
            </div>
        </section>
    )
}
