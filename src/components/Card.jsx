export function Card ({name ,price,image,page}) {
    return <div className="row">
                <img src={image} alt={name} />
                <div className="product-info-container">
                    <div className="product-info-left">
                        <h5>{name}</h5>
                        <p>{price}TND</p>
                        <div className="heart-icon">
                            <i className='bx bx-heart' onclick="toggleFavorite(name,price,image,page)" data-name={name} ></i>
                        </div>
                    </div>
                    <a href="#" className="products-btn add-to-cart">AJOUTER AU PANIER</a>
                </div>
            </div>
    
}