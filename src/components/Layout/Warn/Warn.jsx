import './Warn.css'
export const Warn = ({title, text})=>{
    return(
        <section className='banner_warn'>
            <div className='container_warn'>
            <h1 className='title_warn'>{title}</h1>
            <p className='text_warn'>{text}</p>
            </div>
        </section>
    )
}