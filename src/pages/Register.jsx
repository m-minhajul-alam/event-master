import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser, googleSingIn } = useContext(AuthContext);

    const [emailError, setEmailError] = useState(" ");
    const [passError, setPassError] = useState(" ");
    const [regSuccess, setRegSuccess] = useState(" ");
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const hendelRegister = (e) => {
        e.preventDefault();

        const from = new FormData(e.currentTarget);
        const name = (from.get('name'));
        const photo = (from.get('photo'));
        const email = (from.get('email'));
        const password = (from.get('password'));

        setRegSuccess(" ");
        setEmailError(" ");
        setPassError(" ");

        if (!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
            setPassError("warning: password should be minimum 6 characters, at least 1 capitel letter and 1 special characte.");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setRegSuccess("Rgistration Success.");
                e.target.reset();
                navigate(location?.state ? location.state : '/')

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {

                    }).catch((error) => {
                        console.log(error);

                    })


            })



            .catch(error => {
                console.log(error.message);
                setEmailError("warning: this email is alredy in use.");
            })
    }

    const hendelGoogleReg = () => {
        googleSingIn()
            .then(result => console.log(result.user))
            .catch(error => console.log(error.message))
        navigate(location?.state ? location.state : '/')
    }

    return (
        <div>
            <div className="bg-blue-950 h-20">
                <h1 className="text-white text-3xl text-center font-bold pt-3">Register</h1>
            </div>
            <div className="hero py-16 bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={hendelRegister} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name='photo' placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            {
                                emailError && <p className="text-xs text-red-500 font-bold ml-3 mt-2">{emailError}</p>
                            }
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
                            <span onClick={() => setShowPass(!showPass)} className="absolute top-14 right-3 text-blue-900 text-xs font-bold cursor-pointer">
                                {
                                    showPass ? "Hide" : "Show"
                                }
                            </span>
                            {
                                passError && <p className="text-xs text-red-500 font-bold ml-3 mt-2">{passError}</p>
                            }
                        </div>

                        {
                            regSuccess && <p className="text-xs text-green-500 text-center font-bold">{regSuccess}</p>
                        }
                        <div className="form-control mt-2">
                            <button className="btn btn-primary bg-blue-900 hover:bg-blue-900 text-white">Register</button>
                        </div>
                        <p className="text-xs text-center">Alredy have account? Please <Link className="text-blue-900 font-bold hover:underline" to={"/login"}>Login</Link></p>

                        <button onClick={hendelGoogleReg} className='relative border border-blue-950 w-full py-1 font-bold mt-2 rounded-full'>Register With Google</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;