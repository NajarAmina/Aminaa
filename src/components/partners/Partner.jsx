import ResponsiveContainer from "../common/ResponsiveContainer";
import { Shopcard } from "../Shopcard";
import "./partner.css";
export function Partner(params) {
  const partners = [
    {
      name: "Massimo Dutti",
      image: "MD.jpg",
      link: "https://www.massimodutti.com/",
      description: "est une marque de prét-a-pent et confort au auotidien.",
    },
    {
      name: "MANGO",
      image: "mango.jpg",
      link: "https://www.mango.com/",
      description:
        "est une marque de mode internationale née iné. Elle allie tendances actuelles et prix abordables pour une clientèle urbaine et moderne..",
    },
    {
      name: "Bershka",
      image: "bershka.png",
      link: "https://www.bershka.com/",
      description:
        "est une marque de mode, jeune et audacieuse, qui s’adresse à une clientèle dynamique. Elle propose des vêtements tendance et urbains, inspirés des dernières nouveautés du monde de la musique, de l’art ",
    },
    {
      name: "Pull&Bear",
      image: "pull&bear.png",
      link: "https://www.pull&bear.com/",
      description: "une marque drbaine et des tendan.",
    },
  ];
  return (
    <ResponsiveContainer>
      <div className="responsive-grid">
        <div className="shops" id="mes-boutiques">
          <h2>Nos Boutiques Partenaires</h2>
          <div className="shop-card">
            {partners.map((partner, index) => (
              <Shopcard
                key={index}
                name={partner.name}
                image={partner.image}
                link={partner.link}
                description={partner.description}
              />
            ))}
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
}
