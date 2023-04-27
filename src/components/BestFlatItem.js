import {Link} from "react-router-dom"
import axios from "axios";
import {useNavigate} from "react-router";

const BestFlatItem = ({id,flatState,descriere,pret,suprafata,bai}) => {
    const navigate = useNavigate();
    const handleButton = () => {
        console.log({id});
        if(!sessionStorage.access_token)
            navigate("/login");
        else
        {
            sessionStorage.setItem("idProp",id);
            navigate("/property");
        }

    };

    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                    <div className={`best-estate-state ${flatState ==="For Rent" ? "bg-green" : "bg-red" }`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    <h4><Link to="/">{descriere}</Link></h4>
                </div>
                <div className="best-estate-features">
                    <div className="d-flex">
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>Suprafata: {suprafata}</span>
                        </div>
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>{bai} Bai</span>
                        </div>
                        <div className="best-estate-feature">
                            <button onClick={handleButton}>Programare</button>
                        </div>
                    </div>
                    <h5 className="best-estate-price">${pret}</h5>
                </div>
            </div>
        </div>
    )
}

export default BestFlatItem