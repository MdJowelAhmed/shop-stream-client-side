import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"
import Swal from 'sweetalert2'
import { useState } from "react";
import useAuth from "../hooks/UseAuth";


const Register = () => {
    const { createUser,signInWithGoogle } = useAuth()
    const [showPassword,setShowPassword]=useState(false)
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const location=useLocation()
    const [regError, setRegError] = useState('')

    const handleCreateUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { name, photoURL, email, password }
        // console.log(newUser)
        setRegError('')

        if (password.length < 6) {
            setRegError('Password must be at least 6 characters long');
            return;
          }

        if (!/(?=.*[a-z])/.test(password)) {
            setRegError('Password must contain at least one lowercase letter');
            return;
          }
      
          if (!/(?=.*[A-Z])/.test(password)) {
            setRegError('Password must contain at least one uppercase letter');
            return;
          }

        createUser(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: "Register successFull!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                    navigate(location?.state || "/")
                }
            })
            .catch(error => {
                setRegError(error.message)
            })
    }

    const handleChange = (e) => {
        setPassword(e.target.value);
      };

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    
                    Swal.fire({
                        title: "Register Success!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                    navigate(location?.state || "/")
                }
            })
            .catch(error => {
                console.log(error)

            })
    }
    return (
        <div>

            <div className="md:hero min-h-screen " style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-geometric-shapes-dark-background_23-2148423542.jpg?t=st=1715337413~exp=1715341013~hmac=53f383d90e738e76a5fc2ef7f1edb225a0a4b5827b63393ca305917a194d00ef&w=826)' }} >
                <div className="md:hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left">
                        <img className="h-[400px] w-[400px] lg:ml-20 rounded-3xl shadow-2xl" src="https://img.freepik.com/premium-photo/businessman-typing-keyboard-laptop-computer-input-username-password-technology-security-system-protect-hacker-concept_50039-4132.jpg?w=900" alt="" />
                    </div>
                    <div className="card shrink-0 md:w-1/2 shadow-2xl bg-base-300">
                        <form onSubmit={handleCreateUser} className="card-body">
                            <h1 className="text-2xl md:text-5xl font-bold">Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={handleChange} type={showPassword ?"text" :"password"} name="password" value={password} placeholder="password" className="input input-bordered" required />

                            </div>
                            <div onClick={()=>setShowPassword(!showPassword)} className="absolute md:ml-72 md:bottom-60">
                                    {
                                       showPassword ?  <FaEye /> :  <FaEyeSlash />
                                    }
                                </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-secondary" type="submit" value="Register" />
                            </div>
                        </form>
                        {
                            regError && <span className="text-red-600 text-center mb-3">{regError} </span>
                        }
                        <div className="text-center ">

                            <button onClick={()=>handleSocialLogin(signInWithGoogle)} className="btn btn-outline text-center mb-6 font-poppins bg-white shadow-2xl"><span className="text-4xl"><FcGoogle /></span> Register with Google</button>
                        </div>
                        <div className="text-center mb-4">
                            <p>Have a Account? please <Link to='/login'><span className="text-blue-600 font-poppins">Login</span></Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;