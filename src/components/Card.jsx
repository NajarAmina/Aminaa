export function Card ({name ,price ,}) {
    return <div className="row">
                <img src="T_SHIRT.png" alt=" jacket"/>
                <div className="product-info-container">
                    <div className="product-info-left">
                        <h5>{name}</h5>
                        <p>{price}TND</p>
                        <div className="heart-icon">
                            <i className='bx bx-heart' onclick="toggleFavorite(this, 'T-SHIRT', '69,90 TND', 'TSHIRT.png', 'T-SHIRT.html')" data-name="T-SHIRT"></i>
                        </div>
                    </div>
                    <a href="#" className="products-btn add-to-cart">AJOUTER AU PANIER</a>
                </div>
            </div>
    
}