import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from "axios";
import TokenService from "./TokenService";
import {useNavigate} from "react-router";

export default function Login() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post("http://localhost:8000/api/register", {
                username: username,
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname,
            })
            .then((res) => {
                navigate("/login");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <div>
                    <h1 style={{color: "black",height:"100",border:"120"}}>Register</h1>
                </div>
                <Form.Group size="lg" controlId="firstname">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="firstname">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="lastname">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block="true" size="lg" type="submit" enable={!validateForm()}>
                    Register
                </Button>

            </Form>
        </div>
    );
}