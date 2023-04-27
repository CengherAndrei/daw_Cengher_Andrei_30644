import React from "react"
const Footer = () => {
    return (
        <section  className="footer">

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <i className="fas fa-home"></i>
                        <span className="footer-other-text d-block mt-3 mb-3">
                            Doresti sa achizitionezi un apartament sau cauti o chirie pe masura bugetului ? Noi nu dam gresi niciodata. Vino alaturi de noi si gaseste cea mai buna varianta pentru tine                        </span>

                    </div>
                    <div style={{ textAlign: 'center' }} className="col-lg-3 col-md-6">
                        <p className="footer-title">Menu</p>
                        <ul className="footer-ul">
                            <li>Acasa</li>
                            <li>Despre noi</li>
                            <li> Noutati</li>
                            <li>Inchirieri</li>
                            <li> Vanzari</li>
                            <li> Contact</li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title">Contact</p>
                        <ul className="footer-ul">
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-clock"></i></div> <span>08:00-18:00</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item" ><i className="fas fa-envelope"></i></div> <span>acfimobiliare@gmail.com</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-map-marker-alt"></i></div> <span>www.acfimobiliare.com</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-phone-alt"></i></div> <span>+40765811347</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer