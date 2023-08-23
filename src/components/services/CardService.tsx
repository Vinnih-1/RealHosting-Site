import "./styles.scss"

interface CardServiceProps {
    title: string;
    price: string;
    description: string;
    thumbnail: string;
}

export function CardService(props: CardServiceProps) {
    return(
        <div className="card mx-5 border-0 shadow-lg p-3 mb-5 bg-body-tertiary rounded-4">
            <div className="card-body d-flex flex-column text-center align-items-center">
                <img className="py-3" src={props.thumbnail} alt="" />
                <h4 className="card-title py-2">{props.title}</h4>
                <div className="description py-0 fw-medium fs-5">Planos a partir de</div>
                <div className="d-flex align-items-center">
                    <p className="price fw-bold fs-4">R${props.price}</p>
                    <p className="text-black">/mensal</p>
                </div>
                <p className="card-text mb-5 fs-6 fw-semibold text-center description">{props.description}</p>
                <button className="btn px-4 realhosting-account-button realhosting-color-background">Ver todos os planos</button>
            </div>
        </div>
    )
}