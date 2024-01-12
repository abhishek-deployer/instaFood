import React from 'react'
import "./login.css"
import { FaAllergies } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className='main'>
        <div className='main_div'>
            <div className='flex_main'>
                <div className='flex'>
                    <div className='flex_first'>
                        <div>
                        <h1>Signup  <FaAllergies color='#5138ee' /></h1>
                       
                        <p>How do i get started from</p>
                        
                        <label>Email
                            <br/>
                       
                        <input type='text' className='input'/>
                        </label>
                        
                        
                        <div className='mt-2'>
                        <label>Password
                        <br/>
                       
                        <input type='text' className='input'/>
                       
                        </label>
                        </div>
                        <div>

                        <button className='button'>Submit</button></div>

                        </div>
                        <div>
                            <Link to="/login">
                           <h6>Login</h6></Link>
                            </div>
                       

                    </div>
                    <div className='flex_second'>
                       
                        <img src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D'></img>

                    </div>

                </div>
            </div>
            

        </div>

    </div>
  )
}

export default Signup