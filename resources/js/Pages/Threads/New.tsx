import React, {FormEventHandler, useState} from 'react';
import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageProps } from '@/types';
import post from "axios";

function New({ auth }: PageProps<{}>){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('threads.create'));
        console.log('New thread created:', { title, auth });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            currentPage={'settings'}
        >
            <Head title="Impostazioni"/>
            <div className="container mt-5 border p-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="mb-4">Pubblica un nuovo Thread</h2>
                        <form onSubmit={submit}>
                            <div className="form-group mb-3">
                                <label htmlFor="forumName">Titolo del Thread</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="Inserisci il titolo del Thread"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="description">Descrizione</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    placeholder="Scrivi una breve descrizione di cio' di cui vuoi parlare nel Thread"
                                    rows={3}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="moderator">Tags</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="moderator"
                                    placeholder="tags"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Invia
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}

export default New;
