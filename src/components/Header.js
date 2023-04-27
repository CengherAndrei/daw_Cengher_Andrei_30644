import React from "react"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () =>
    {
        sessionStorage.clear();
        navigate("/");
    }
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <div className="d-flex align-items-center">
                            <i className="fas fa-home"></i>
                                <span className="ms-2">
                                    ACF Real Estate
                           </span>
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Acasa</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  className="nav-link" to="/blog">Despre noi</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  className="nav-link" to="/about">Noutati</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/inchirieri">Inchirieri <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="sub-ul">
                                        <li><a href={"/inchirieri#case"}>Case</a></li>
                                        <li><a href={"/inchirieri#apartamente"}>Apartamente</a></li>
                                        <li><a href={"/inchirieri#terenuri"}>Terenuri</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a  className="nav-link" to="/vanzari">Vanzari <i className="fas fa-chevron-down"></i></a>
                                    <ul className="sub-ul">
                                        <li><a href={"/vanzari#case"}>Case</a></li>
                                        <li><a href={"/vanzari#apartamente"}>Apartamente</a></li>
                                        <li><a href={"/vanzari#terenuri"}>Terenuri</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <button onClick={handleLogout} className="nav-link" >Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;