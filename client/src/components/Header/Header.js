import NavigationItem from "./NavigationItem/NavigationItem";
import style from './Header.module.css';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className={style.navigation}>
          <ul>
            <li className="listItem"><img src="white-origami-bird.png" alt="white origami"/></li>
            <Link to="/"><NavigationItem>Home</NavigationItem></Link>
            <Link to="/about"><NavigationItem>About</NavigationItem></Link>
            <Link to="/contact-us"><NavigationItem>Contact</NavigationItem></Link>
            <Link to="/about/pesho"><NavigationItem>Going to Pesho</NavigationItem></Link>
            <Link to="/about/misho"><NavigationItem>Going to Misho</NavigationItem></Link>
            <Link to="/about/grisho"><NavigationItem>Going to Grisho</NavigationItem></Link>
            <Link to="/about/stamat"><NavigationItem>Going to Stamat</NavigationItem></Link>
            <Link to="/about/mariyka"><NavigationItem>Going to Mariyka</NavigationItem></Link>
            <Link to="/about/malinka"><NavigationItem>Going to Malinka</NavigationItem></Link>
            <Link to="/about/tosho"><NavigationItem>Going to Tosho</NavigationItem></Link>
            <Link to="/about/plamen"><NavigationItem>Going to Plamen</NavigationItem></Link>
          </ul>
        </nav>
    );
}

export default Header;