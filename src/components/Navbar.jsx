import React from 'react'
import logo from '../assets/basket.png'

const Navbar = () => {
  return (
    <div className='flex flex-wrap place-items-center'>
        <section className='relative mx-auto'>
            <nav className='flex justify-between bg-slate-800 text-white w-screen'>
                <div className='px-5 xl:px-12 py-6 flex w-full items-center'>
                    <a href="#" className='text-3xl font-bold flex items-center'>
                        <img src={logo} alt="logo" className='h-10' />
                        <p>Dunk</p>
                    </a>

                    {/* Nav link */}
                    <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li><a className="hover:text-gray-200" href="#">Home</a></li>
                        <li><a className="hover:text-gray-200 underline" href="#">Players</a></li>
                        <li><a className="hover:text-gray-200" href="#">Matches</a></li>
                        <li><a className="hover:text-gray-200" href="#">Ticket's</a></li>
                    </ul>

                    {/* Icons */}
                    <div className="hidden xl:flex items-center space-x-5">
                        <a className="hover:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </a>
                        <a className="flex items-center hover:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                        
                    </div>

                </div>
            </nav>
        </section>
    </div>
  )
}

export default Navbar