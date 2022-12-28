import './Paragraph.css'

export const Paragraph = ({color, text}) =>{
    return(
        <p className={color} >{text}</p>
    )
}

export default Paragraph