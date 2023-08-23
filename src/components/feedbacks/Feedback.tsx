import "./styles.scss"

interface FeedbackProps {
    author: string;
    message: string;
    avatar: string;
    role: string;
}

export function Feedback(props: FeedbackProps) {
    return(
        <div className="container feedback-component">
            <div className="d-flex gap-3 align-items-center">
                <img className="rounded-circle" src={props.avatar} alt="Avatar do cliente" />
                <div className="author-credentials">
                    <div className="name fw-bold fs-5">{props.author}</div>
                    <div className="role">{props.role}</div>
                </div>
            </div>
            <p className="feedback fw-semibold mt-3">{props.message}</p>
        </div>
    )
}