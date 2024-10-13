import { useState } from "react";
import { Link, json } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { signInService } from "../axiosservice/signUpService";
import { toastError, toastSuccess } from "../utils";

const Login = ()=>{
    const [formData, setFormData] = useState({
        userEmail:'',
        userPassword:''
    });

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSignin = async(e)=>{
        e.preventDefault();

        if(!formData.userEmail){
            return toastError("Email is required");
        }else if(!formData.userPassword){
            return toastError("Password is required");
        }

        try {
            const response = await signInService(formData);
            const respData = response?.data;

            if(!respData?.success){
                toastError(respData?.message);
            }else {
                toastSuccess(respData?.message);
                const token = {
                    userEmail: respData?.userEmail,
                    userToken: respData?.jwtToken
                }
                localStorage.setItem('token',JSON.stringify(token));
            }
        } catch (error) {
            toastError(error?.message);
        }
    }

    return (
        <div className="container">
            <h1>SignIn User</h1>
            <form onSubmit={handleSignin}>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name='userEmail'
                        placeholder="Enter your email.."
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        name='userPassword'
                        placeholder="Enter your password.."
                        onChange={handleChange}
                    />
                </div>
                <button>SingIn</button>
                <span>
                    New user?
                    <Link to='/signup'>Login</Link>
                </span>
            </form>
            <ToastContainer/>
        </div>
    );
}

export default Login;