const Contact = () => {
    return (
        <section className="contact">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Contact</h1>
                            <h2 className="page-description">Contact</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-envelope"></i>
                                        <h5>Mail</h5>
                                        <h6>acfimobiliare@gmail.com</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <h5>Adresa</h5>
                                        <h6>Strada Branului Nr 54, Targu Mures, Romania</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-phone-alt"></i>
                                        <h5>Telefon</h5>
                                        <h6>+40765811347</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-5">
                                <div className="col-lg-6">
                                    <label>Nume</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-6">
                                    <label>Prenume</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-6">
                                    <label>Email</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-6">
                                    <label>Telefon</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-12">
                                    <label>Subiect</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-12">
                                    <label>Mesaj</label>
                                    <textarea type="text" className="ta-contact" rows="4"></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn-contact">Trimitere mesaj</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact