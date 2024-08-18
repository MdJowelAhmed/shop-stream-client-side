import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../hooks/UseAuth";


const Login = () => {
    const {signIn,signInWithGoogle}=useAuth()
   const navigate=useNavigate()
   const [regError,setRegError]=useState('')

   const handleSignInUser=e=>{
    e.preventDefault()
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    const user={email,password}
  
    setRegError('')
    signIn(email, password)
            .then(result => {
                const loggedUser=result.user;
                console.log(loggedUser)
                const user={email}
                if(result.user){
                    Swal.fire({
                        title: "Login successFull!",
                        text: "You clicked the button!",
                        icon: "success"
                      });
                    navigate(location?.state || "/")
                   }
            })
            .catch(error =>{
                setRegError(error.message)
            }
        )
   }

   const handleSocialLogin = socialProvider => {
    socialProvider()
        .then(result => {
            if (result.user) {
                const loggedUser=result.user;
                // console.log(loggedUser)
                const userGoogle={email:result?.user?.email}
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`,userGoogle,{
                    withCredentials:true
                })
                .then(res=>{
                    console.log(res.data)
                })
                Swal.fire({
                    title: "Login Success!",
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
            <div className="md:hero min-h-screen " >
                <div className="md:hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                       <img className="h-[400px] w-[400px] lg:ml-20 rounded-3xl" src="https://img.freepik.com/premium-photo/premium-web-page-security-lock-screen-icon-3d-rendering-isolated-background_150525-4263.jpg?w=740" alt="" />
                    </div>
                    <div className="card shrink-0 md:w-1/2 shadow-2xl bg-base-300">
                        <form onSubmit={handleSignInUser} className="card-body">
                        <h1 className="text-2xl md:text-5xl font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-success" type="submit" value="Login" />
                            </div>
                        </form>
                        {
                            regError && <span className="text-red-600 text-center mb-3">{regError} </span>
                        }
                        <div className="text-center">
                        
                        <button onClick={()=>handleSocialLogin(signInWithGoogle)} className="btn btn-outline text-center mb-6 font-poppins bg-white shadow-2xl"><span className="text-4xl"><FcGoogle /></span> Login with Google</button>
                        </div>
                        <div className="text-center mb-4">
                            <p>Have not a Account? please <Link to='/register'><span className="text-blue-600 font-poppins">Register</span></Link></p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Login;