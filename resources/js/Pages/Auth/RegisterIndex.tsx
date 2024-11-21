import React, { useState, useEffect, FormEventHandler } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../../css/Style.css";
import { Link, useForm } from '@inertiajs/react';

function Registration() {
    const [rememberMe, setRememberMe] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({ //processing ed errors unused
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <link
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <div className="container" id="registrationbody">
                <div id="prova"></div>
                <form id="registrationform" onSubmit={submit}>
                    <h2 className="text-center mb-4">Crea un account</h2>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Inserisci il tuo nome"
                            name="name"
                            required
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Inserisci la tua email"
                            name="email"
                            required
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Inserisci una password"
                            name="password"
                            required
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Conferma password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            placeholder="Conferma la password"
                            name="confirmPassword"
                            required
                        ></input>
                    </div>
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                            Ricordami
                        </label>
                    </div>
                    <div id="alreadyAccount">
                        <Link
                        href={route('login')}
                        id="alreadyAccountText">
                            Hai gia' un account? Accedi
                        </Link>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Registrati
                    </button>
                </form>
            </div>

            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </>
    );
}

export default Registration;
