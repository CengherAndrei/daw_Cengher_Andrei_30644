import React, {useMemo, useState} from "react";
import Title from "./Title";
import Slider from "react-slick";
import BestFlatItem from "./BestFlatItem";
import {useNavigate} from "react-router";
import axios from "axios";
const Vanzari = () => {
    const title = {
        text: "Spatii de vanzare",
        description: ""
    }
    const [spaces, setSpaces] = useState([]); // defineste starea initiala cu un array de exemple de spatii
    const navigate = useNavigate();
    useMemo(() => {
        axios
            .request({
                    method: "GET",
                    url: "http://localhost:8000/api/property/all",
                }
            )
            .then((res) => {
                setSpaces(res.data.properties);
            })
            .catch((err) => {
                console.log(err);
            });

    },[spaces])
    return (
        <section className="about">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Vanzari</h1>
                            <h2 className="page-description">Vanzari</h2>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section-best-estate">
                <div className="container">
                    <div className="row">
                        <section id="case">
                            <div className="col-lg-12">
                                <strong>Case</strong>
                                <div>
                                    {spaces && spaces.length > 0 ? (
                                        spaces.filter(space => space.type==="casa").map((filterspace) => (
                                            <div className="space" key={filterspace.id}>
                                                <BestFlatItem id={filterspace.id} flatState="For Sale" descriere={filterspace.address} pret={filterspace.price} suprafata={filterspace.surface}/>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Nu există spații disponibile momentan.</p>
                                    )}
                                </div>
                            </div>
                        </section>
                        <section id="apartamente">
                            <div className="col-lg-12">
                                <Title  />
                                <Title  />
                                <strong>Apartamente</strong>
                                <div>
                                    {spaces && spaces.length > 0 ? (
                                        spaces.filter(space => space.type==="apartament").map((filterspace) => (
                                            <div className="space" key={filterspace.id}>
                                                <BestFlatItem id={filterspace.id} flatState="For Sale" descriere={filterspace.address} pret={filterspace.price} suprafata={filterspace.surface}/>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Nu există spații disponibile momentan.</p>
                                    )}
                                </div>
                            </div>
                        </section>
                        <section id="terenuri">
                            <div className="col-lg-12">
                                <Title  />
                                <Title  />
                                <strong>Terenuri</strong>
                                <div>
                                    {spaces && spaces.length > 0 ? (
                                        spaces.filter(space => space.type==="teren").map((filterspace) => (
                                            <div className="space" key={filterspace.id}>
                                                <BestFlatItem id={filterspace.id} flatState="For Sale" descriere={filterspace.address} pret={filterspace.price} suprafata={filterspace.surface}/>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Nu există spații disponibile momentan.</p>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Vanzari