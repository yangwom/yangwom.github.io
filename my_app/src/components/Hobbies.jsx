import React from 'react'
import clash from '../img/clash.jpg'
import trybeImg from '../img/trybe.png'
import naruto from '../img/naruto.jpg'
import anime from '../img/crunch.png'

function Hobbies() {
    return (
         <section className="hobbies-containers"  >
         <h1 id="hobbies"  >Hobbies</h1>
             <section className="Hobbies"  >
             <img src={ clash } alt="clash-royale" />
             <img src={ trybeImg } alt="trybe" />
             <img src={ naruto } alt="naruto" />
             <img src={ anime } alt="site de anime" />

         </section>
         </section>
        
    
    )
}

export default Hobbies;