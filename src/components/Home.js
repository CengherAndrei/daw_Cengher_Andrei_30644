import FlatList from "./FlatList"
import Banner from "./Banner"
import React from "react"
import TeamList from "./TeamList"
import BestFlatList from "./BestFlatList"

const Home=()=>{
    return (
        <React.Fragment>
            <Banner/>
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
            <BestFlatList/>
        </React.Fragment>
    )
}

export default Home;