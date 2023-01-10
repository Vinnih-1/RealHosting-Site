import './Card.css'
import styled from 'styled-components'
export const Card = ({ image, title, price, text, color  }) => {

    const Container = styled.div`
    width: 300px;
    height: 389px;
    border-radius: 25px;
    background-color: ${color};
    display: flex;
    margin-right: 1rem;
  `

    return (
        <div >
            <Container>
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

            </Container>
        </div>
    )
}
