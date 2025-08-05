import { useState } from "react";

export function Card({ name, price, image, page }) {
  const [panier, setPanier] = useState([]);
  // list of selected products
  // let panier = [];
  function addProduct(product) {
    setPanier((prev) => {
      console.log("element", prev);
      return [...prev, product];
    });
  }

  console.log("Panier", panier);

  return (
    <div className="row">
      <img src={image} alt={name} />
      <div className="product-info-container">
        <div className="product-info-left">
          <h5>{name}</h5>
          <p>{price}TND</p>
          <div className="heart-icon">
            <i className="bx bx-heart"></i>
          </div>
        </div>
        <a
          onClick={() => addProduct({ name, image, price })}
          className="products-btn add-to-cart"
        >
          AJOUTER AU PANIER
        </a>
      </div>
    </div>
  );
}
