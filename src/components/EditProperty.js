import React, {useMemo, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router";
import { useParams } from 'react-router-dom';

function EditPropertyForm({ propertyToEdit, initialValue, onSubmit }) {
    const [space, setSpace] = useState([]);
    const [toBuy,setToBuy] = useState("false");
    const [type, setType] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [address, setAddress] = useState("");
    const [surface, setSurface] = useState("");
    const navigate = useNavigate();
    let idProp = sessionStorage.getItem("idProp");
    idProp = parseInt(idProp);

    useMemo(() => {
        axios
                .request({method:"GET",
                    url:"http://localhost:8000/api/property",
                    params: {id: idProp},
                    headers: {
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${sessionStorage.access_token}`,
                    }
                }
            )
            .then((res) => {
                setSpace(res.data.property);
                console.log(res.data.property);
            })
            .catch((err) => {
                console.log(err);
            });

    },[])
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put("http://localhost:8000/api/property", {
                id : idProp,
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
                navigate("/agent");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    function handleCheckboxChange(event) {
        setToBuy(event.target.checked);
    }
    return (
        <div>
            {space && (
                <form className="form" onSubmit={handleSubmit}>
                    <h3>Editeaza spațiul disponibil</h3>
                    <label htmlFor="type">Tip:</label>
                    <select
                        id="type"
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
                        defaultValue={space?.city}
                        onChange={(event) => setCity(event.target.value)}
                    />
                    <label htmlFor="price">Adresa:</label>
                    <input
                        type="text"
                        id="address"
                        defaultValue={space?.address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                    <label htmlFor="price">Preț:</label>
                    <input
                        type="number"
                        id="price"
                        defaultValue={space?.price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <label htmlFor="surface">Suprafata:</label>
                    <input
                        type="number"
                        id="surface"
                        defaultValue={space?.surface}
                        onChange={(event) => setSurface(event.target.value)}
                    />

                    <label>De vanzare</label>
                    <input
                        type="checkbox"
                        checked={toBuy}
                        onChange={handleCheckboxChange}
                    />
                    <button type="submit">Editeaza spațiu</button>
                </form>
            )}
        </div>

    );
}

export default EditPropertyForm;