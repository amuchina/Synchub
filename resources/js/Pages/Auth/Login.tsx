import { useEffect, FormEventHandler } from 'react';
import {  Link, useForm } from '@inertiajs/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../../css/Style.css";
export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });


    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            <div className="container" id="loginbody">
                <div id="prova"></div>
                <form id="loginform" onSubmit={submit}>
                    <h2 className="text-center mb-4">Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
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
                            placeholder="Inserisci la password"
                            name="password"
                            required
                        ></input>
                    </div>
                    <div className="form-group">

                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                    >
                        Login
                    </button>
                    <Link
                        className="btn btn-primary btn-block"
                        id="createaccount"
                        href={route('register')}>
                        <button
                            type="button"
                        >
                            Crea un account
                        </button>
                    </Link>
                </form>
            </div>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </>
    );
}
