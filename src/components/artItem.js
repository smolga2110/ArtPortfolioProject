import './styles/artItem.css'

function ArtItem({art}){
    return(
        <div className='artitem_container'>
            <figure>
                <img src={art.route} alt={art.title}></img>
            </figure>
            <figcaption>
                <h3>{art.title}</h3>
                <p>{art.author}</p>
            </figcaption>
        </div>
    );
}

export default ArtItem;