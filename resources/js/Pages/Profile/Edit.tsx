import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../css/Style.css";
import { PageProps } from '@/types';

export default function Edit({ auth}: PageProps<{}>) {
    const [user, setUser] = useState({
        username: '',
        email: '',
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleUpdateProfile = () => {
        // Aggiungi logic per inviare le informazioni aggiornate al server
        setIsEditing(false);
    };
    return (
        <Authenticated
            user={auth.user}
            currentPage={'profile'}>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">{isEditing ? 'Modifica Profilo' : 'Il tuo profilo'}</h2>
                        {isEditing ? (
                            <div className="flex-column">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={user.username}
                                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    />
                                </div>

                                {/* Aggiungi altri campi del profilo qui */}
                                <button className="btn btn-primary" onClick={handleUpdateProfile}>Salva Modifiche
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                <p className="card-text"><strong>Username:</strong> {auth.user.name}</p>
                                <p className="card-text"><strong>Email:</strong> {auth.user.email}</p>
                                <p className="card-text"><strong>Verificata il:</strong> {
                                    auth.user.email_verified_at === null
                                        ? 'Non verificata'
                                        : auth.user.email_verified_at
                                }
                                </p>
                                <div className="items-center">
                                    <button className="btn btn-info w-2/4" onClick={() => setIsEditing(true)}>
                                        Modifica Profilo
                                    </button>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
