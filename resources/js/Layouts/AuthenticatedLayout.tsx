import React, { useState, PropsWithChildren, ReactNode } from 'react';
import Dropdown from '@/Components/Dropdown';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { User } from '@/types';
import logo from '../Pages/logo.png';

export default function Authenticated({ user, currentPage, children ,header}: PropsWithChildren<{ user: User, currentPage?:any,header?:React.ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 p-2">
            <nav className="bg-white border-b border-gray-100 rounded-2xl ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/home">
                                    <img src={logo} id="logo" style={{ width: 40 }}></img>
                                </Link>
                            </div>

                            <div className="shrink-0 flex items-center">
                                <Link href="/home" className="ml-5" style={{ textDecoration: 'none', color: '#777777' }}>
                                    Home
                                </Link>
                            </div>

                            <div className="shrink-0 flex items-center">
                                <Link href="/threads" className="ml-5" style={{
                                    textDecoration: 'none', color:
                                        currentPage === 'threads'
                                            ? '#ed3c77'
                                            : '#777777'
                                }}>
                                    I miei Threads
                                </Link>
                            </div>

                            <div className="shrink-0 flex items-center">
                                <Link href="/profile" className="ml-5" style={{
                                    textDecoration: 'none', color:
                                        currentPage === 'profile'
                                            ? '#ed3c77'
                                            : '#777777'
                                }}>
                                    Profilo
                                </Link>
                            </div>

                            <div className="shrink-0 flex items-center">
                                <Link href="/settings" className="ml-5" style={{
                                    textDecoration: 'none', color:
                                        currentPage === 'settings'
                                            ? '#ed3c77'
                                            : '#777777'
                                }}>
                                    Impostazioni
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <div id="profileContainer">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 text-md leading-4 font-medium rounded-md text-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {user.name}

                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Esci
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profilo</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Esci
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
