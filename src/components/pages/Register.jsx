import React, { use } from 'react';
import { Form, Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

  const {createUser, setUser} =use(AuthContext);

  const hanldeRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({name, photo, email, password});

    createUser(email, password)
    .then((result) => {
      const user = result.user;
    setUser(user);

    } )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage =error.message;
      alert(errorMessage);
    })

  }
    return (
        <div>
          <div className='flex justify-center min-h-screen items-center'> 
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
      <form onSubmit={hanldeRegister} className="card-body">
        <fieldset className="fieldset">
            {/* Name */}
          <label className="label">Name</label>
          <input name= 'name' type="text" className="input" placeholder="Name" required />
            {/* Photo URL*/}
          <label className="label">Photo URL</label>
          <input name='photo' type="text" className="input" placeholder="Photo URL" required />
            {/* Email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
          {/* password */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required />
          <button type='sumbit' className="btn btn-neutral mt-4">Ragister</button>
          <p className='font-semibold text-center pt-5'>Allready Have An Account ? {''}  <Link className='text-secondary' to='/auth/login'>Login</Link></p>
        </fieldset>
      </form>
    </div>
</div>
</div>
    );
};

export default Register;