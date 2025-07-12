import { Card } from "../Card";
import './Hero.css';
 export function Hero(params) {
    return <><div className="home">
        <div className="home-text">
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
            <Card name="JACKET"price="60.90" image="jacket.png" />
            <Card name="SAC A MAIN" price="100.00"image="sac-a-main.png" />
            <Card name="ROBE" price="180.00"image="robe.png" />
            <Card name="T-Shirt"  price="69.00"image="t-shirt.png" />
        </div>
        <script src="js/vente.js"></script>
        <script src="js/panier.js"></script>
    </div>
</>
}