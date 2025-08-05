
import "./header.scss";
import { TiHomeOutline } from "react-icons/ti";
import { GrBasket } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";

export function Header() {
  return (
  
        <header>
          <div className="logo">
            <img src="easyshop.png" alt="EASYSHOPtn Logo" />
          </div>
          <div className="navmenu">
            <a href="nouveautes.html">NOUVEAUTÉS</a>
            <span className="separator">|</span>
            <a href="vetements.html">VÊTEMENTS</a>
            <span className="separator">|</span>
            <a href="accessoires.html">ACCESSOIRES</a>
            <span className="separator">|</span>
            <a href="contactez-nous.html">CONTACTEZ-NOUS</a>
          </div>
          <div className="nav-icon">
            <a href="/">
              <TiHomeOutline />
            </a>
            <a href="/panier" id="cart-icon">
              <GrBasket />
            </a>
            <a href="/favoris">
              <FaRegHeart />
            </a>
            <a href="/login">
              <FaRegUser />
            </a>
            <a href="/logout" id="logout-btn">
              <BiLogOut />
            </a>
          </div>
        </header>
  
  );
}
