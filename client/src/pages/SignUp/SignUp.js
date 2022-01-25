import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap";
import "./SignUp.css";

// import { useMutation } from "@apollo/client";
// import { ADD_PROFILE } from "../../utils/mutations";

// import Auth from "../../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName:"",
    email: "",
    number: "", 
    street_address: "",
    city: "",
    state: "",
    zipcode:"",
    password: "",
  });
  // const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

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
    //   const { data } = await addProfile({
    //     variables: { ...formState },
    //   });

    //   Auth.login(data.addProfile.token);
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="First Name "
                name="firstName"
                type="text"
                value={formState.firstName}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Last Name"
                name="lastName"
                type="text"
                value={formState.lastName}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Phone Number"
                name="number"
                type="text"
                value={formState.number}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Street Address"
                name="street_address"
                type="text"
                value={formState.street_address}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="city"
                name="city"
                type="text"
                value={formState.city}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="state"
                name="state"
                type="text"
                value={formState.state}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="zipCode"
                name="zipcode"
                type="text"
                value={formState.zipcode}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="confirm password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="btn btn-block btn-info"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
