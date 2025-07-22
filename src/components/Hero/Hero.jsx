import { Card } from "../Card";
import "./hero.css";
import Button from "@mui/material/Button";

export function Hero(params) {
  const products = [
    { name: "JACKET", price: "60.90", image: "jacket.png" },
    { name: "SAC A MAIN", price: "100.00", image: "sac-a-main.png" },
    { name: "ROBE", price: "180.00", image: "robe.png" },
    { name: "T-Shirt", price: "69.00", image: "t-shirt.png" },
  ];

  const handleClick = () => {
    window.location.href = "nouveautes.html";
  };

  return (
    <>
      <div className="home">
        <div className="home-text">
          <h5>Nouvelle collection</h5>
          <h1>
            UN PAS D'AVANCE
            <br />
            SUR LA MODE
          </h1>
          <p>c'est ici que ca commence!</p>
          <Button variant="contained" onClick={handleClick}>
            VOIR TOUT
          </Button>
        </div>
      </div>
      <div className="trending" id="trending">
        <h2>ON TREND</h2>
        <div className="products">
          {products.map((product, index) => (
            <Card
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
