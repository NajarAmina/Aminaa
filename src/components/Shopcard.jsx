export function Shopcard({ name, link, image, description }) {
  return (
    <div className="shop-card-item">
      <div className="boutiques-container">
        <div class="shop-card">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p> {description}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
