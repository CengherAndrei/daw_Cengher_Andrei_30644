import React, {useEffect, useMemo, useState} from "react";
import "./Login.css";
import TokenService from "./TokenService";
import axios from "axios";


function UserProfile() {
    // defineste starea initiala cu valorile initiale
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [apartamente, setapartamente] = useState(false);
    const [house, setcase] = useState(false);
    let username2 = TokenService.getCurrentUsername()

    const [data, setData] = useState();

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

                console.log(res.data.user.interests)
                setapartamente(res.data.user.interests.includes("apartament"))
                setcase(res.data.user.interests.includes("casa"));

            })
            .catch((err) => {
                console.log(err);
            });

    }, [])


    // functie de submit pentru a trimite informatiile formularului

    const handleSubmit = (event) => {
        event.preventDefault();

        let interests = [];
        if (apartamente)
            interests.push("apartament");
        if (house)
            interests.push("casa");

        axios
            .put("http://localhost:8000/api/user", {
                    username: username2,
                    email: email,
                    firstname: firstname,
                    lastname: lastname,
                    interests: interests
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.access_token}`,
                    }
                }
            )

            .then((res) => {
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            <h1>Profil client</h1>
            {user && (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Username:</label>
                    <input
                        type="text"
                        id="name"
                        defaultValue={user?.username}
                        disabled={true}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <label htmlFor="name">First Name:</label>
                    <input
                        type="text"
                        id="name"
                        defaultValue={user?.firstName}
                        onChange={(event) => setFirstname(event.target.value)}
                    />
                    <label htmlFor="name">Last Name:</label>
                    <input
                        type="text"
                        id="name"
                        defaultValue={user?.lastName}
                        onChange={(event) => setLastname(event.target.value)}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        defaultValue={user?.email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <label htmlFor="apartamente">Apartamente:</label>
                    <input
                        type="checkbox"
                        id="apartamente"
                        defaultChecked={apartamente}
                    />

                    <label htmlFor="house">Case:</label>
                    <input
                        type="checkbox"
                        id="case"
                        defaultChecked={house}
                    />

                    <button type="submit">Salvează</button>
                </form>
            )}
        </div>
    );
}

export default UserProfile;