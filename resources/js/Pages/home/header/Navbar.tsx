import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import notification from "bootstrap-icons/icons/bell-fill.svg";
import "../../css/Style.css";
import logo from '../../logo.png';
import { Link, Head } from '@inertiajs/react';
import Dropdown from "@/Components/Dropdown.jsx";
interface UserProps{
    name:string
}
function Navbar({user}:{user?:UserProps}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <img src={logo} id="logo"></img>
        <a className="navbar-brand" id="navname" href="index.html">
          <strong>SyncHub</strong>
          <p> \ Where ideas synchronize</p>
        </a>
        <form className="form-inline mx-auto">
                <input
                className="form-control mr-sm-2"
                id="searchbar"
                type="search"
                name="search"
                placeholder="Cerca in SyncHub🔎"
                aria-label="Cerca in SyncHub🔎"
            ></input>
            <button
                className="btn btn-outline-danger my-2 my-sm-0"
                id="searchbutton"
                type="submit"
            >
                Cerca
            </button>
        </form>
          {user ?
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
                          <Dropdown.Link href={route('profile.edit')}>Profilo</Dropdown.Link>
                          <Dropdown.Link href={route('logout')} method="post" as="button">
                              Esci
                          </Dropdown.Link>
                      </Dropdown.Content>
                  </Dropdown>
              </div>
              :
              <div>
                  <Link
                      href={route('register')}
                      className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >
                      <button id="signup" type="button" className="btn btn-danger">
                          Registrati
                      </button>
                  </Link>

                  <Link
                      href={route('login')}
                      className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >
                      <button id="login" type="button" className="btn btn-danger">
                          Accedi
                      </button>
                  </Link>
              </div>
          }


      </nav>
    </>
  );
}

export default Navbar;
