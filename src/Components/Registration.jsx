import { useState } from "react";
import "./Registration.css";
import { IoWarningOutline } from "react-icons/io5";
export const RegistrationForm = () =>{
    //use state 
    const [user,setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phoneNumber:"",
    });

    const [emailError,setEmailError] = useState('');

    const handleInputChange= (e) =>{
        const {name,value} =e.target;

        setUser((prev)=>({...prev,[name]:value}))
    if(name === "email"){
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(!emailRegex.test(value)){
            setEmailError(`please input a valid email address`)
        }else{
            setEmailError("")
        }
        }
    }

    const handleFormSubmit= (event) =>{
        event.preventDefault();

        //final email validation
         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

         if(!emailRegex.test(user.email)){
            setEmailError(`please input a valid email address`);
            return;
         }



        const formData = {
            firstName : user.firstName,
            lastName:user.lastName,
            email:user.email,
            password:user.password,
            phoneNumber:user.phoneNumber,
        }
        console.log(formData);
    }
    return(
        <section className="container">


            <div className="Registration_form">
                <div className="sign">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                </div>

                <form  className="form" onSubmit={handleFormSubmit}>

                    <div className="first_name">
                        <label htmlFor="name">First Name</label> <br />
                        <input type="text" name="firstName" placeholder= "Enter Your First Name" autoComplete="off" required value={user.firstName} onChange={handleInputChange}/>
                        <span></span>
                    </div>

                    <div className="last_name">
                        <label htmlFor="name">Last Name</label> <br />
                        <input type="text" name="lastName" placeholder= "Enter Your Last Name" autoComplete="off" required value={user.lastName} onChange={handleInputChange}/>
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="email" id="email" placeholder= "Enter Your Email" autoComplete="off" value={user.email} onChange={handleInputChange}/>
                        {
                            emailError && <p className="flex-d"><IoWarningOutline />{emailError}</p>
                        }
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="password" placeholder= "Enter Your password" autoComplete="off" required value={user.password} onChange={handleInputChange}/>
                    </div>

                    <div className="phone">
                        <label htmlFor="phone">Phone Number</label> <br />
                        <input type="phone" name="phoneNumber" id="number" placeholder= "+880 17..." autoComplete="off" required value={user.phoneNumber} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <p>By creating an account you are agree to our <span className="terms"><a href="#">Terms & Privacy</a></span></p>
                    </div>

                    <div className="button">
                        <button type="submit" className="btn">Sign Up</button>
                    </div>
                </form>
            </div>

            <div className="userInfo">
                <p>Hello, my name is  
                    <span className="bold_name">{user. firstName} {user.lastName}</span>
                    . My email address is <span className="bold_name"> {user.email}</span>
                     and my phone number is <span className="bold_name">{user.phoneNumber}</span>
                </p>
            </div>
        </section>
    )
}