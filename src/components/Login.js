import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from "axios";
import {useNavigate} from "react-router";
import TokenService from "./TokenService";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post("http://localhost:8000/api/login", {
                username: email,
                password: password,
            })
            .then((res) => {
                sessionStorage.setItem("access_token", res.data.token);
                let userRole = TokenService.getCurrentUsersRole()
                if (userRole=="admin")
                    navigate("/agent");
                else
                    navigate("/user");
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
                    <h1 style={{color: "black",height:"100",border:"120"}}>Login</h1>
                </div>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
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
                    Login
                </Button>

            </Form>
        </div>
    );
}