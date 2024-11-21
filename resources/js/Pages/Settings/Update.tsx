import React, { useState } from 'react';
import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageProps } from '@/types';
function Update({ auth }: PageProps<{}>){
    const [forumName, setForumName] = useState('');
    const [description, setDescription] = useState('');
    const [moderator, setModerator] = useState('');

    const handleSave = () => {
        // Implement logic to save forum settings
        console.log('Saved:', { forumName, description, moderator });
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
                        <h2 className="mb-4">Forum Settings</h2>
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="forumName">Forum Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="forumName"
                                    placeholder="Enter the forum name"
                                    value={forumName}
                                    onChange={(e) => setForumName(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    placeholder="Enter a brief description of the forum"
                                    rows={3}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="moderator">Moderator</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="moderator"
                                    placeholder="Enter the moderator's username"
                                    value={moderator}
                                    onChange={(e) => setModerator(e.target.value)}
                                />
                            </div>

                            <button type="button" className="btn btn-primary" onClick={handleSave}>
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}

export default Update;
