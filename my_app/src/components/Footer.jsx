import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
 import { FaGithubAlt } from 'react-icons/fa'



function Footer() {
    return( 
    <footer >
        <div class="redes" >
       <a href="https://github.com/yangwom"> { < FaGithubAlt className='fab' /> } </a>
       <a href="https://www.linkedin.com/in/yang-vieira/"> { <AiFillLinkedin className='fab' /> }</a>
    </div>
    <div class="incon">
    <p>desenvolvido por yangflix</p>
    </div>
    </footer>)
}


export default Footer;