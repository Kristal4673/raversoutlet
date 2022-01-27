import React, { useEffect, useState } from 'react'
import './Form.css'
import LOGO from '../../img/RAVERSOUTLET.png';
import HomeImg from '../../img/home.png';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

function Login() {

    const [formState, setFormState] = useState({ email: "", password: "" });
    const [login, { error, data }] = useMutation(LOGIN_USER);

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
  
    try {
        const { data } = await login({
          variables: { ...formState },
        });
        

        Auth.login(data.login.token);
        console.log('local storage saved');
      } catch (e) {
        console.error(e);
      }

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
                <form>
                    <div className='form-input'>
                        <label htmlFor='email'>Email</label>
                        <input name='email' id='email' type="email" placeholder='enter email' value={formState.email} onChange={handleChange}/>
                    </div>
                    <div className='form-input'>
                        <label>Password</label>
                        <input name='password' type="password" placeholder='*****' value={formState.password} onChange={handleChange}/>
                    </div>
                    <button onClick={handleFormSubmit} className='form-btn'>Enter</button>
                </form>
            </div>
            <img className='ravers-logo' alt='raversoutlet' src={HomeImg}/>
        </div>
    )
}

export default Login
