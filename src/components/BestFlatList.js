import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./Title"
import BestFlatItem from "./BestFlatItem"

export default class BestFlatList extends Component {
    render() {
        const title = {
            text: "Ultimele adaugate",
            description: ""
        }
        const settings = {
            infinite: true,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoPlay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };
        return (
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={title.text} description={title.description} />
                            <Slider {...settings}>
                                <BestFlatItem flatState="For Sale" descriere="Casa spatioasa" pret="350000" camere="4" bai="2"/>
                                <BestFlatItem flatState="For Sale" descriere="Apartament spatios" pret="80000" camere="2" bai="1" />
                                <BestFlatItem flatState="For Rent" descriere="Casa cu piscina proprie" pret="1000" camere="3" bai="2" />
                                <BestFlatItem flatState="For Sale" descriere="Casa in padure" pret="240000" camere="5" bai="2" />
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}