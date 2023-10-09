import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    console.log(user);

    const handelLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);


    const links = <>
        <li><NavLink to={"/"}
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "text-blue-950 md:text-white border-b-2 border-yellow-500 font-semibold"
                        : "text-blue-950 md:text-white font-light"
            }> Home </NavLink></li>

        {user && <>
            <li><NavLink to={"/contactUs"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" :
                        isActive ? "text-blue-950 md:text-white border-b-2 border-yellow-500 font-semibold"
                            : " text-blue-950 md:text-white font-light"
                }> Contact Us </NavLink></li>

            <li><NavLink to={"/privacyPolicy"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" :
                        isActive ? "text-blue-950 md:text-white border-b-2 border-yellow-500 font-semibold"
                            : " text-blue-950 md:text-white font-light"
                }> PrivacyPolicy </NavLink></li>

            <li><NavLink to={"/about"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" :
                        isActive ? "text-blue-950 md:text-white border-b-2 border-yellow-500 font-semibold"
                            : " text-blue-950 md:text-white font-light"
                }> About </NavLink></li>
        </>
        }

        <li><NavLink to={"/register"}
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "text-blue-950 md:text-white border-b-2 border-yellow-500 font-semibold"
                        : " text-blue-950 md:text-white font-light"
            }> Register </NavLink></li>

    </>

    return (
        <div className=" bg-blue-950 md:pt-2">

            {/* nav md and lg screen */}
            <div className="navbar max-w-6xl w-[90%] mx-auto hidden md:flex">
                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-start">
                    <a href='/'
                        className="text-xl font-bold text-white">
                        <span className="bg-yellow-500 text-blue-950 p-1 rounded">Event</span> Master</a>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-center flex">
                    <ul className="menu-horizontal gap-5">
                        {links}
                    </ul>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-end">
                    <div className="flex justify-center items-center gap-2">
                        {
                            user ? <div className="flex flex-col items-end text-white">
                                <p>{user.displayName}</p>
                                <button onClick={handelLogOut} className="text-white text-xs font-bold">Logout</button></div>
                                : " "
                        }
                        {
                            user ? <img className="w-10 rounded-full" src={user.photoURL} />
                                : <img className="w-10 rounded-full" src={"https://i.ibb.co/N7fnVsV/user.png"} />
                        }
                    </div>
                </div>
            </div>


            {/* nav for sm screen */}
            <div className="navbar w-[90%] mx-auto text-white md:hidden">
                <div className="flex-1">
                    <a href='/'
                        className="text-sm font-semibold text-white">
                        <span className="bg-yellow-500 text-blue-950 p-1 rounded">Event</span> Master</a>
                </div>

                <div className="flex justify-end flex-1 px-2">
                    <div className="flex items-stretch">
                        <div className="dropdown text-blue-950 dropdown-end">
                            <label tabIndex={0} className="\">
                                {
                                    user ? <img className="w-8 rounded-full" src={user.photoURL} />
                                        : <img className="w-8 rounded-full" src={"https://i.ibb.co/N7fnVsV/user.png"} />
                                }
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li>
                                    {
                                        user ?
                                            <p className="text-blue-950">{user.displayName}</p>
                                            : " "
                                    }
                                </li>
                                <li>
                                    {
                                        user ?
                                            <button onClick={handelLogOut} className="text-blue-950">Logout</button>
                                            : " "
                                    }
                                </li>
                                {links}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;