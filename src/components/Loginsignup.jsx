import React , {useState} from 'react';
import './Loginsignup.css';

const Loginsignup = () => {

    const [action,setAction] = useState("Sign up");
    return(
        <div className='contatiner'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==='Login'?<div></div>:<div className='input'>
                {/* <img src={user_icon} alt= ""/> */}
                <input type='text' placeholder="Name"/>
                </div>}
            
                <div className='input'>
                {/* <img src={email_icon} alt= ""/> */}
                <input type='email' placeholder='Email ID'/>
                </div>
                <div className='input'>
                {/* <img src={password_icon} alt= ""/> */}
                <input type='password' placeholder='Password'/>
                </div>
            </div>
            {action==='Signup'?<div></div>:<div className='forgot-password'>Lost passwoord?<span>Click Here!</span></div>}
            
            <div className='submit-container'>
                <div className={action==='Login'?'submit gray':'submit'}onClick={()=> {setAction('Signup')}}>Signup</div>
                <div className={action==='Signup'?'submit gray':'submit'}onClick={()=>{setAction('Login')}}>Login</div>

            </div>
        </div>
    )
}
export default Loginsignup