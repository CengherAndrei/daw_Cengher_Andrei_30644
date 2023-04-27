import BlogItem from "./BlogItem"

const Blog = () => {
    return (
        <section className="blog">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Despre noi</h1>
                            <h2 className="page-description">Despre noi</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center' }} className="video-responsive">
                <iframe
                    align="center"
                    width="1440"
                    height="720"
                    src={`https://www.youtube.com/embed/_AtIADJKw8Q`}
                    frameBorder="20"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Prezentare "
                />
            </div>

            <div className="col-lg-6">
                <div className="about-item">
                    <div className="title">
                        Welcome to ACF Real Estate
                    </div>
                    <div className="about-text">
                        ACF Imobiliare este o companie specializată în tranzacții imobliare. Din 2019 și până în prezent
                        ne ocupăm de furnizarea unui pachet de servicii imobiliare complet.
                        La ACF avem capacitatea de a furniza servicii de dimensiuni prepoderente pentru satisfacerea
                        clientului.
                        Cu noi aveți siguranța unui partener pentru o investiție profitabilă și de asemenea
                        promptitudine în soluționarea fiecărei tranzacții.

                        Misiunea noastră este de a împlini visul dumneavoastră, oferind o stare de satisfacție, prin
                        care confortul și siguranța unui imobil sunt furnizate în cel mai scurt timp.

                        Obiectul nostru de activitate îl reprezintă: tranzacțiile imobiliare, prognoze și evaluări
                        imobiliare, consultanță pentru plasamente, administrarea proprietăților și a investițiilor
                        imobiliare, precum și publicitate, promovare imobiliară, documentație pentru credite.
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Blog