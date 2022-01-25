import React, { useState } from 'react'
import './Form.css'
import LOGO from '../../img/RAVERSOUTLET.png';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";


function Login() {

    const [formState, setFormState] = useState({ email: "", password: "" });
    // const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    // try {
    //   //send neil variable names 
    //   const { data } = await login({
    //     variables: { ...formState },
    //   });

    //   Auth.login(data.login.token);
    // } catch (e) {
    //   console.error(e);
    // }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

    return (
        <div className='form'>
            <div className='form-ctn'>
                <div className='form-title'>Login</div>
                <div className=''>
                    <div className='form-input'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' type="email" placeholder='@email.com' />
                    </div>
                    <div className='form-input'>
                        <label>Password</label>
                        <input type="text" placeholder='*****'/>
                    </div>
                    <button onClick={handleFormSubmit} className='form-btn'>Enter</button>
                </div>
            </div>
            <img className='ravers-logo' alt='raversoutlet' src={LOGO}/>
        </div>
    )
}

export default Login
