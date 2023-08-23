import "./styles.scss"

interface FeatureProps {
    featureTitle: string;
    iconPath: string;
}

export function Feature(props: FeatureProps) {
    return(
        <div className="feature d-flex align-items-center">
            <img src={props.iconPath} alt="Ícone da feature" />
            <h4 className="fs-6 ms-2 fw-bold">{props.featureTitle}</h4>
        </div>
    )
}