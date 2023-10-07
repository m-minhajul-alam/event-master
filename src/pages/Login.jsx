import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
    const { logIn } = useContext(AuthContext);

    const hendelLogin = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget)
        const email = (from.get('email'));
        const password = (from.get('password'));
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>
            <div className="bg-blue-950 h-20">
                <h1 className="text-white text-3xl text-center font-bold pt-3">Login</h1>
            </div>


            <div className="hero py-16 bg-base-200">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={hendelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-xs text-center">Do not have account? <Link className="text-blue-600 hover:underline" to={"/register"}>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;