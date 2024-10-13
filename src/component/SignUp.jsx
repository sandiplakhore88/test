import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toastError, toastSuccess } from "../utils";
import {signUpService} from "../axiosservice/signUpService";

const SignUp = () => {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPassword: ''
    });

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSignup = async (e)=>{
        e.preventDefault();
        if(!formData.userName){
            return toastError("Name is required");
        }else if(!formData.userEmail){
            return toastError("Email is required");
        }else if(!formData.userPassword){
            return toastError("Password is required");
        }

        try {
            const response = await signUpService(formData);
            const respData = response?.data;

            if(!respData?.success){
                toastError(respData?.message);
            }else{
                toastSuccess(respData?.message);
            }
        } catch (error) {
            toastError(error?.message);
        }

    }

    return (
        <div className="container">
            <h1>SignUp</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        name='userName'
                        placeholder="Enter your name.."
                        onChange={handleChange}
                    />
                </div>

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
                <button>Singup</button>
                <span>
                    Already have an accound?
                    <Link to='/login'>Login</Link>
                </span>
            </form>
            <ToastContainer/>
        </div>
    );
}

export default SignUp;