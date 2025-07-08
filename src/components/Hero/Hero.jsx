import { Card } from "../Card";

 export function Hero(params) {
    return <><div className="home">
        <div classNameName="home-text">
            <h5>Nouvelle collection</h5>
            <h1>UN PAS D'AVANCE<br />SUR LA MODE</h1>
            <p>c'est ici que ca commence! </p>
            <a href="nouveautes.html" className="home-btn">VOIR TOUT<i className='bx bx-right-arrow-alt'></i></a>
        </div>
    </div>
    <div className="trending" id="trending">
        <div className="center-text">
            <h2>ON TREND</h2>
        </div>
        <div className="products">
           <Card name="T-Shirt" price="90" />
            <div className="row">
                <img src="SAC A MAIN.png" alt=" jacket" />
                <div className="product-info-container">
                    <div className="product-info-left">
                        <h5>SAC A MAIN</h5>
                        <p>100,00 TND</p>
                        <div className="heart-icon">
                            <i className='bx bx-heart' onclick="toggleFavorite(this, 'SAC A MAIN', '100,00 TND', 'SAC A MAIN.png', 'sac.html')" data-name="SAC A MAIN"></i>
                        </div>
                    </div>
                    <a href="#" className="products-btn add-to-cart">AJOUTER AU PANIER</a>
                </div>
            </div>
           
            <div className="row">
                <img src="ROBE.png" alt=" jacket"/>
                <div className="product-info-container">
                    <div className="product-info-left">
                        <h5>ROBE</h5>
                        <p>180,00 TND</p>
                        <div className="heart-icon">
                            <i className='bx bx-heart' onclick="toggleFavorite(this, '>ROBE', '180,00 TND', 'ROBE.png', 'robe.html')" data-name="ROBE"></i>
                        </div>
                    </div>
                    <a href="#" className="products-btn add-to-cart">AJOUTER AU PANIER</a>
                </div>
            </div>
            <div className="row">
                <img src="T_SHIRT.png" alt=" jacket"/>
                <div className="product-info-container">
                    <div className="product-info-left">
                        <h5>T-SHIRT</h5>
                        <p>69,90 TND</p>
                        <div className="heart-icon">
                            <i className='bx bx-heart' onclick="toggleFavorite(this, 'T-SHIRT', '69,90 TND', 'TSHIRT.png', 'T-SHIRT.html')" data-name="T-SHIRT"></i>
                        </div>
                    </div>
                    <a href="#" className="products-btn add-to-cart">AJOUTER AU PANIER</a>
                </div>
            </div>
        </div>
        <script src="js/vente.js"></script>
        <script src="js/panier.js"></script>
    </div>
</>
}