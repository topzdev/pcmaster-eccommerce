import React from "react";
import { Link } from "react-router-dom";
import logo from "../../resources/images/pc-master-logo.png";

//icons

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__nav'>
                <Link to='/' className='navbar__brand'>
                    <img src={logo} alt='PCMR' className='navbar__logo' />
                </Link>

                <div className='navbar__search'>
                    <div className='inp--search'>
                        <input
                            className='inp'
                            type='text'
                            placeholder='Search product'
                        />
                        <button>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                            >
                                <path d='M18.869 19.162l-5.943-6.484A7.448 7.448 0 0015.001 7.5c0-2.003-.78-3.887-2.197-5.303S9.504 0 7.501 0 3.614.78 2.198 2.197.001 5.497.001 7.5s.78 3.887 2.197 5.303S5.498 15 7.501 15a7.441 7.441 0 004.688-1.645l5.943 6.483a.497.497 0 00.707.031.5.5 0 00.031-.706zM1 7.5C1 3.916 3.916 1 7.5 1S14 3.916 14 7.5 11.084 14 7.5 14 1 11.084 1 7.5z' />
                            </svg>
                        </button>
                    </div>
                </div>

                <li className='navbar__list'>
                    <Link className='btn btn--icon' to='/cart'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                        >
                            <path d='M8 20c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM15 20c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM17.539 4.467A1.351 1.351 0 0016.5 4H4.257l-.099-.596A1.718 1.718 0 002.5 2h-1a.5.5 0 000 1h1c.307 0 .621.266.671.569l1.671 10.027A1.718 1.718 0 006.5 15h10a.5.5 0 000-1h-10a.724.724 0 01-.671-.569l-.247-1.48 9.965-.867c.775-.067 1.483-.721 1.611-1.489l.671-4.027a1.354 1.354 0 00-.289-1.102zm-.697.937l-.671 4.027c-.053.316-.391.629-.711.657l-10.043.873-.994-5.962h12.076c.117 0 .215.04.276.113s.085.176.066.291z' />
                        </svg>
                    </Link>
                </li>
            </div>
        </nav>
    );
};

export default Navbar;
