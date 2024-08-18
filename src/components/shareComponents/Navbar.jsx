
import { CgProfile } from "react-icons/cg";

import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import useAuth from "../hooks/UseAuth";



const Navbar = () => {
    const { user, logOut } = useAuth()
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    const handleTheme = e => {
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <div>


            <div className="z-index ">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                               
                                 <NavLink to='/' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                    <button > Home</button>
                                </NavLink>

                                <NavLink to='/products' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                    <button > Products</button>
                                </NavLink>
                               
                                <div>
                                    {
                                        user ? <div>
                                            <NavLink to='/add' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                                <button > Add Products</button>
                                            </NavLink>
                                           
                                        </div> : <div>
                                            <Link className="btn" to='/login'>Login</Link>
                                            <Link className="btn ml-3" to='/register'>Register</Link>
                                        </div>
                                    }
                                </div>

                            </ul>
                        </div>
                        <Link to='/'><h2 className="text-4xl">Shop Stream </h2></Link>
                    </div>
                    <div className="navbar-center z-50 hidden lg:flex">
                        <ul className="menu menu-horizontal z-[1] px-1">
                           
                             <NavLink to='/' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                <button > Home</button>
                            </NavLink>
                            <NavLink to='/products' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                <button > Products</button>
                            </NavLink>
                           

                            <div>
                                {
                                    user ? <div>
                                        <NavLink to='/add' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                            <button >Add Products</button>
                                        </NavLink>
                                      
                                    </div> : <div>
                                        <Link className="btn" to='/login'>Login</Link>
                                        <Link className="btn ml-3" to='/register'>Register</Link>
                                    </div>
                                }
                            </div>

                        </ul>
                    </div>
                    <div className="navbar-end z-50 flex">

                        <div className="flex items-center gap-2">

                            <div>
                                {
                                    user ? <div className="dropdown  dropdown-hover">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user?.photoURL || <CgProfile />} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu  dropdown-content  shadow bg-base-100 rounded-box w-40 z-[1]">
                                            <li>
                                                <Link onClick={logOut}  to='/login' > <button className="btn">LogOut</button></Link>
                                            </li>
                                        </ul>

                                    </div> : <div>

                                    </div>
                                }
                            </div>
                            <div>
                                <label className="cursor-pointer grid place-items-center">
                                    <input onChange={handleTheme} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                </label>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar