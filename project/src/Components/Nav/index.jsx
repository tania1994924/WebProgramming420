import {Link} from "react-router-dom";
import Logo from "../../static/images/logo.svg";

export default function Nav(props) {
  const preventDefault = (event) => event.preventDefault();
   return (
      <>
	
    <nav className="navbar navbar-expand-md navbar-dark navbar-custom top-nav-collapse">
        
       
        <Link className="navbar-brand logo-image" to="/"><img src={Logo} alt="alternative"/></Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/">HOME <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/plan">PLAN</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link page-scroll" href="stay.html">STAY</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/places">Places</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/experience">Experiences</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/gallery">Gallery</Link>
                </li>
            </ul>
            <span className="nav-item social-icons">
                <span className="fa-stack">
                    <Link href="#your-link">
                        <span className="hexagon"></span>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </Link>
                </span>
                <span className="fa-stack">
                    <Link href="#your-link">
                        <span className="hexagon"></span>
                        <i className="fab fa-twitter fa-stack-1x"></i>
                    </Link>
                </span>
            </span>
        </div>
    </nav> 

     </>
    );
}