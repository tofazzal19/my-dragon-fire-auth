import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
import button from 'daisyui/components/button';

const Navbar = () => {
    const {user, logOut} = use(AuthContext);
    const handleLogOut = ()=>{
         console.log('user trying to logout'); 
         logOut().then(()=> {

            alert('You Logged Out Successfully')
            //sign oust successful.
         }).catch((error) => {
            console.log(error);
         });
    }
    return (
        <div className='flex justify-between items-center'>
           <div className=''>{user && user.email}</div>
           <div className='nav flex gap-5 text-accent'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/creer'>Career</NavLink>
           </div>

           <div className='login-btn flex gap-5'>
            <img src={userIcon} alt="" />
            {
                user ?  (<button  onClick={handleLogOut} className='btn btn-primary px-10' >LogOut</button>) : (<Link to='/auth/login' className='btn btn-primary px-10' >Login</Link>)
            }
            
           </div>
 
        </div>
    );
};

export default Navbar;