import axios from 'axios';
import Joi, { allow } from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    password: ''
  });

  let navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setloading] = useState(false)
  async function sendUserDataToApi() {

    // if you submit space label
    if (!user.email || !user.password) {
      setError('Email and password are required');
      setSuccess('');
      return;
    }
    try {
      // check if this  email exict previsualy
      const checkRes = await axios.get(
        'https://68552c556a6ef0ed66318ebb.mockapi.io/api/v1/users'
      );
      const existingUser = checkRes.data.find(
        (u) => u.email.toLowerCase() === user.email.toLowerCase()
      );

      if (existingUser) {
        setError('Email already registered');
        setSuccess('');
        return;
      }

      // create new user
      const payload = {
        first_name: user.first_name,
        last_name: user.last_name,
        age: user.age,
        email: user.email,
        password: user.password
      };

      const { data } = await axios.post(
        'https://68552c556a6ef0ed66318ebb.mockapi.io/api/v1/users',
        payload
      );

      if (data.id) {
        setloading(false);
        setSuccess('Success Sir🎉');
        setError('');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setloading(false);
        setError('There was a problem with registration sir🥺');
        setSuccess('');
      }

    } catch (err) {
      setError(' An error occurred while connecting to the server sir🥺');
      setSuccess('');
      console.error(err);
    }
  }

  function getUserData(e) {
    const myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  function submitRegisterForm(e) {
    e.preventDefault();
    setloading(true);
    sendUserDataToApi();
  }
  function validateRegistrationForm() {
    let scheme = Joi.object({
      first_name:Joi.string().min(3).max(12).required(),
      last_name:Joi.string().min(3).max(12).required(),
      age:Joi.number().min(16).max(80).required(),
      email:Joi.number().email({tlds: {allow: ['com' , 'net']}}),
      password:Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/)
      
    });
    scheme.validate(user);
  }
  return (
    <div className="w-75  p-4 out-Input">
      <h3 className="fw-bolder mb-2 text-center">Registration-Form</h3>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={submitRegisterForm}>
        <label htmlFor="first_name">First Name:</label>
        <input
          onChange={getUserData}
          type="text"
          id="first_name"
          name="first_name"
          className="form-control my-Input my-2"
        />

        <label htmlFor="last_name">Last Name:</label>
        <input
          onChange={getUserData}
          type="text"
          id="last_name"
          name="last_name"
          className="form-control my-Input my-2"
        />

        <label htmlFor="age">Age:</label>
        <input
          onChange={getUserData}
          type="number"
          id="age"
          name="age"
          className="form-control my-Input my-2"
        />

        <label htmlFor="email">Email:</label>
        <input
          onChange={getUserData}
          type="email"
          id="email"
          name="email"
          className="form-control my-Input my-2"
          autoComplete="email"
        />

        <label htmlFor="password">Password:</label>
        <input
          onChange={getUserData}
          type="password"
          id="password"
          name="password"
          className="form-control my-Input my-2"
          autoComplete="new-password"
        />

        <button type="submit" className="btn btn-info">
          {loading?<i className='fas fa-spinner fa-spin'></i>:'Register'}
        </button>
      </form>
    </div>
  );
}
