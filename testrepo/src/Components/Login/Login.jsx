import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ saveUserData }) {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function getUserData(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function validateLoginForm() {
    const schema = Joi.object({
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().min(3).required()
    });
    return schema.validate(user, { abortEarly: false });
  }

  async function submitLoginForm(e) {
    e.preventDefault();
    setLoading(true);

    const validation = validateLoginForm();
    if (validation.error) {
      setError(validation.error.details[0].message);
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.get('https://68552c556a6ef0ed66318ebb.mockapi.io/api/v1/users');
      const foundUser = data.find(
        (u) =>
          u.email.toLowerCase() === user.email.toLowerCase() &&
          u.password === user.password
      );

      if (foundUser) {
        setError('');
        const fakeToken = `token-${Math.random().toString(36).substring(2)}`;

        // ✅ حذف الباسورد من البيانات قبل التخزين
        const { password, ...userWithoutPassword } = foundUser;

        // ✅ تخزين البيانات في localStorage
        localStorage.setItem('userToken', fakeToken);
        localStorage.setItem('userData', JSON.stringify(userWithoutPassword));

        // ✅ طباعة بيانات المستخدم (بدون الباسورد)
        console.log('✅ Logged in user:', userWithoutPassword);

        saveUserData(); // callback to App
        setLoading(false);
        navigate('/Home');
      } else {
        setError('Invalid email or password');
        setLoading(false);
      }
    } catch (err) {
      setError('Server error, try again later');
      setLoading(false);
      console.error(err);
    }
  }

  return (
    <div className="w-75 py-4">
      <h3 className="fw-bolder mb-3 text-center">Login</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={submitLoginForm}>
        <label htmlFor="email">Email:</label>
        <input
          onChange={getUserData}
          type="email"
          id="email"
          name="email"
          className="form-control my-Input my-2"
          autoComplete="username"
        />

        <label htmlFor="password">Password:</label>
        <input
          onChange={getUserData}
          type="password"
          id="password"
          name="password"
          className="form-control my-Input my-2"
          autoComplete="current-password"
        />

        <button type="submit" className="btn btn-success">
          {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Login'}
        </button>
      </form>
    </div>
  );
}

/*
import  axios  from 'axios';
import React , {useState} from 'react'

export default function Register() {
  const [user, setUser] = useState({
    first_name:'',
    last_name:'',
    age:'',
    email:'',
    password:''
  });
  const [error, seterror] = useState('')
  async function sendUserDataToApi() {
    let {data} = await axios.post(https://route-egypt-api.herokuapp.com/signup , user);
    if (data.message === 'success') {
      //Navigate to HomeLogin
    }
    else {
      seterror(data.message)

    }
  }
  function getUserData(e) {
    let myUser = {...user};
   myUser[e.target.name] = [e.target.value];
    console.log(myUser);
    setUser(myUser);

  }
  function submitRegisterForm(e) {
    e.preventDefault();
    sendUserDataToApi();

  } 
  return (
   <div className='w-75 py-4'>
     <h3 className='fw-bolder mb-2 text-center'>Form</h3>
      <div className='alert alert-danger'>
        {error}
      </div>
     
      <form onSubmit={submitRegisterForm}>
        <label htmlFor="first_name">FirstName: </label>
        <input onChange={getUserData}
         type="text"
          id='first_name'
          name='first_name'
          className='form-control my-Input my-2' />
        <label  htmlFor="last_name">LastName: </label>
        <input onChange={getUserData} type="text" id='last_name' name='last_name' className='form-control my-Input my-2' />
        <label htmlFor="age">Age: </label>
        <input onChange={getUserData} type="number" id='age' name='age' className='form-control my-Input my-2'  />
        <label htmlFor="email">Email: </label>
        <input  onChange={getUserData} type="email" id='email' name='email' className='form-control my-Input my-2' autoComplete="current-password" />
        <label htmlFor="password">Password :</label>
        <input onChange={getUserData} type="password" className='form-control my-Input my-2' id='password' name='password' autoComplete="current-password"  />
        <button type='submit' className='btn btn-info'>Rigester</button>
      </form>     
    </div>
  )
}



*/