import './Client.css'
export const Client = ({image, client, comment})=>{
    return(
        <div className='container_testimony_client'>
            <div className="container_client">
                <img className='image_client' src={image} alt={"imagem do client: "+client } />
                <p className='name_client'>{client}<br></br><strong>Cliente</strong></p>
            </div>
            <p className='comment_client'>{comment}</p>
        </div>
    )
}
export default Client