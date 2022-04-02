import React from "react";
import todoList from '../img/todo-list.png';
import trybeWallet from '../img/trybe-wallet.png';
import solarSystem from '../img/solar-system.png'
import img from '../components/header/img/Yang0000.png'
import { Container, Imagem } from "../components/style";
import ButtonDarkMode from '../components/styleButton/ButtonDarkMode'
import Footer from "../components/Footer";
import { Link } from "react-router-dom";



function Projetos() {
    return(
        <>
        <Container>
          <Imagem src={img} />
          <nav>
          <Link to="/">Home</Link>
          <ButtonDarkMode/>
          </nav>
         </Container>
        <section id="projetos" >
        <section  className="img-projetos">
        <div className="projetos-nav">
        <img src={ solarSystem } alt="" />
        <a href="https://yangwom.github.io/Solar-system/">S.System</a>
       
    </div>
    <div class="projetos-nav" >
       <img src={todoList} alt=""/>
        <a href="https://yangwom.github.io/todo-list/">Todo list</a>
    </div>
    <div className="projetos-nav">
    <img src={ trybeWallet } alt=""/>
        <a href="https://yangwom.github.io/Projeto-wallet/">Wallet</a>
    </div>
    </section>
</section>
<Footer />
</>
    )
}

export default Projetos;