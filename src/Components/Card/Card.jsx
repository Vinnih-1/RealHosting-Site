import './Card.css'
export const Card = ({ image, title, price, text }) => {
    return (
        <div>
            <div className='card'>
                <div className='container_card'>
                    <img src={image} alt="Icone da hospedagem" />

                    <h1 className='title_card_plans'>{title}</h1>
                    <div>
                        <p className='text_card_plans'>Planos a partir de</p>
                        <p className='text_card_month'><strong>R${price}</strong>/mensal</p>
                    </div>
                    <p className='text_details_plans'>{text}</p>
                    <button className='button_plans'>
                        Ver todos os planos
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Card