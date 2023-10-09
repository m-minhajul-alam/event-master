import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
    const { logIn, googleSingIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState(" ");
    const [loginSuccess, setLoginSuccess] = useState(" ");
    const [showPass, setShowPass] = useState(false);

    const hendelLogin = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget)
        const email = (from.get('email'));
        const password = (from.get('password'));

        setLoginError(" ");
        setLoginSuccess(" ");

        logIn(email, password)
            .then(result => {
                console.log(result);
                setLoginSuccess("Login Success.");
                e.target.reset();
            })
            .catch(error => {
                console.error(error);
                setLoginError("error: user is not valid. please check you email and password. try agine later.")
            })
    }

    const hendelGoogleReg = () => {
        googleSingIn()
            .then(result => console.log(result.user))
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <div className="bg-blue-950 h-20">
                <h1 className="text-white text-3xl text-center font-bold pt-3">Login</h1>
            </div>

            <div className="hero h-full py-16 bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={hendelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="relative form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPass ? "text" : "password"}
                                name='password'
                                placeholder="password"
                                className="input input-bordered" required />
                            <span onClick={() => setShowPass(!showPass)}
                                className="absolute top-14 right-3 text-blue-900 text-xs font-bold cursor-pointer">
                                {
                                    showPass ? "Hide" : "Show"
                                }
                            </span>
                        </div>
                        {
                            loginError && <p className="text-xs text-red-500 font-bold text-center mt-2">{loginError}</p>
                        }
                        {
                            loginSuccess && <p className="text-xs text-green-500 text-center font-bold">{loginSuccess}</p>
                        }
                        <div className="form-control mt-2">
                            <button className="btn btn-primary border-none hover:border-none bg-blue-900 hover:bg-blue-900 text-white">Login</button>
                        </div>
                        <p className="text-xs text-center">
                            Do not have account? Please <Link
                                className="text-blue-900 font-bold hover:underline" to={"/register"}>
                                Register</Link>
                        </p>

                        <button onClick={hendelGoogleReg}
                            className='relative border border-blue-950 w-full py-1 font-bold mt-2 rounded-full'>
                            Login With Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;