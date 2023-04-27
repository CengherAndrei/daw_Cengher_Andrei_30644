import React, {useEffect, useMemo, useState} from "react";
import "./Login.css";
import TokenService from "./TokenService";
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useNavigate} from "react-router";

function PropertyBook() {
    // defineste starea initiala cu valorile initiale
    const [prop, setProp] = useState(null);
    const [user, setUser] = useState("");
    const [type, setType] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [price, setPrice] = useState("");
    const [surface, setSurface] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigate = useNavigate();

    function handleDateChange(date) {
        setSelectedDate(date);
    }
    let username2 = TokenService.getCurrentUsername()

    const [data, setData] = useState();
    let idProp = sessionStorage.getItem("idProp");
    idProp = parseInt(idProp);
    useMemo(() => {
        axios
            .request({
                    method: "GET",
                    url: "http://localhost:8000/api/property",
                    params: {id: idProp},
                    headers: {
                        Authorization: `Bearer ${sessionStorage.access_token}`,
                    }
                }
            )
            .then((res) => {
                setProp(res.data.property);
                console.log(res.data.property);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [])
    useMemo(() => {
        axios
            .request({
                    method: "GET",
                    url: "http://localhost:8000/api/user",
                    params: {username: username2},
                    headers: {
                        Authorization: `Bearer ${sessionStorage.access_token}`,
                    }
                }
            )
            .then((res) => {
                setUser(res.data.user);

                console.log(res.data.user)

            })
            .catch((err) => {
                console.log(err);
            });

    }, [])
    let idClient = user.id
    console.log(idClient)
    // functie de submit pentru a trimite informatiile formularului

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/appointment",
                {
                    clientId: idClient,
                    propertyId: prop.id,
                    date: selectedDate.toISOString().slice(0, 16),
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.access_token}`,
                    },
                }
            )
            .then(() => {
                navigate("/vanzari");
            })
            .catch((err) => {
                alert("Exista o programare pentru ora si ziua selectata")
                console.log(err);
            });
    };

    return (
        <div className="container">
            <h1>Formular programare</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Tip:</label>
                    <input
                        type="text"
                        id="name"
                        defaultValue={prop?.type}
                        disabled={true}
                        onChange={(event) => setType(event.target.value)}
                    />
                    <label htmlFor="name">Oras:</label>
                    <input
                        type="text"
                        id="name"
                        defaultValue={prop?.city}
                        disabled={true}
                        onChange={(event) => setCity(event.target.value)}
                    />
                    <label htmlFor="name">Adresa:</label>
                    <input
                        type="text"
                        id="name"
                        defaultValue={prop?.address}
                        disabled={true}
                        onChange={(event) => setAddress(event.target.value)}
                    />

                    <label htmlFor="pret">Pret:</label>
                    <input
                        type="number"
                        id="pret"
                        defaultValue={prop?.price}
                        disabled={true}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <label htmlFor="surface">Suprafata:</label>
                    <input
                        type="text"
                        id="email"
                        defaultValue={prop?.surface}
                        disabled={true}
                        onChange={(event) => setSurface(event.target.value)}
                    />
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="dd/MM/yyyy HH:mm"
                    />

                    <button type="submit">Fa o programare</button>
                </form>
        </div>
    );
}

export default PropertyBook;