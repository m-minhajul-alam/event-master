import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><NavLink to={"/"}
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "text-white border-b-2 border-yellow-500 font-semibold"
                        : "text-white font-light"
            }> Home </NavLink></li>

        <li><NavLink to={"/register"}
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "text-white border-b-2 border-yellow-500 font-semibold"
                        : " text-white font-light"
            }> Register </NavLink></li>
    </>

    return (
        <div className=" bg-blue-950 pt-2">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content bg-blue-950 mt-3 z-[1] px-2 py-3 s w-32 text-center rounded">
                            {links}
                        </ul>
                    </div>
                    <a
                        href='/'
                        className="text-xl font-bold text-white">
                        <span className="bg-yellow-500 text-blue-950 p-1 rounded">Event</span> Master</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal gap-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-center items-center gap-2">
                        <button
                            className="text-blue-950 py-1 px-2 rounded font-bold bg-[#FFFFFF]">
                            <Link to={'login'}>Login</Link></button>
                        <img className="w-10 rounded-full" src={"https://i.ibb.co/N7fnVsV/user.png"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;