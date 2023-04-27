import React, {useMemo, useState} from "react";
import "./Login.css";
import axios from "axios";
import TokenService from "./TokenService";
import {useNavigate} from "react-router";

function AgentPage() {
    const [spaces, setSpaces] = useState([]); // defineste starea initiala cu un array de exemple de spatii
    const navigate = useNavigate();

    const [toBuy, setToBuy] = useState("false");
    const [type, setType] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [address, setAddress] = useState("");
    const [surface, setSurface] = useState("");
    useMemo(() => {
        axios
            .request({
                    method: "GET",
                    url: "http://localhost:8000/api/property/all",
                    headers: {
                        Authorization: `Bearer ${sessionStorage.access_token}`,
                    }
                }
            )
            .then((res) => {
                setSpaces(res.data.properties);
            })
            .catch((err) => {
                console.log(err);
            });

    },[spaces])

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!price || !address || !surface || !city) {
            alert("Vă rugăm să completați toate câmpurile.");
            return;
        }

        const newSpace = {
            id: Date.now(),
            type,
            city,
            address,
            surface,
            price,
            toBuy
        };
        axios
            .post("http://localhost:8000/api/property", {
                    type: type,
                    city: city,
                    address: address,
                    price: price,
                    surface: surface,
                    toBuy: toBuy,
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.access_token}`,
                    }
                })
            .then((res) => {
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });

        setSpaces([...spaces, newSpace]);
        setType("");
        setPrice("");
        setAddress("");
    };

    const handleDelete = (id) => {
        console.log(id);
        axios
            .request({
                    method: "DELETE",
                    url: "http://localhost:8000/api/property",
                    params: {id:id},
                    headers: {
                        Authorization: `Bearer ${sessionStorage.access_token}`,
                    }
                }
            )
            .then((res) => {
                setSpaces(res.data.properties);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleEdit = (id) => {
        sessionStorage.setItem("idProp",id);
        navigate(`/edit/${id}`)
    };

    function handleCheckboxChange(event) {
        setToBuy(event.target.checked);
    }

    return (
        <div className="agent-page">
            <h2>Spații disponibile</h2>
            <div className="spaces-list">
                {spaces && spaces.length > 0 ? (
                    spaces.map((space) => (
                        <div className="space" key={space.id}>
                            <div className="space-info">
                                <p>Preț: {space.price}</p>
                                <p>Locație: {space.address}</p>
                                <p>Suprafata: {space.surface}</p>
                                <p>De vanzare: {space.toBuy}</p>
                            </div>
                            <div className="space-actions">
                                <button onClick={() => handleEdit(space.id)}>Editează</button>
                                <button
                                    className="delete"
                                    onClick={() => handleDelete(space.id)}
                                >
                                    Șterge
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Nu există spații disponibile momentan.</p>
                )}
            </div>

            <form className="form" onSubmit={handleSubmit}>
                <h3>Adaugă spațiu nou</h3>

                <label htmlFor="type">Tip:</label>
                <select
                    id="type"
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                >
                    <option value="apartament">Apartament</option>
                    <option value="casa">Casa</option>
                    <option value="teren">Teren</option>
                </select>

                <label htmlFor="price">Oras:</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
                <label htmlFor="price">Adresa:</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
                <label htmlFor="price">Preț:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
                <label htmlFor="surface">Suprafata:</label>
                <input
                    type="number"
                    id="surface"
                    value={surface}
                    onChange={(event) => setSurface(event.target.value)}
                />

                <label>De vanzare</label>
                <input
                    type="checkbox"
                    checked={toBuy}
                    onChange={handleCheckboxChange}
                />
                <button type="submit">Adaugă spațiu</button>
            </form>
        </div>
    );
}

export default AgentPage;