import React from "react";
import { useHistory } from "react-router-dom";
import projeto1 from '../img/projeto.png'
import todoList from '../img/todo-list.png'
import trybeWarts from '../img/trybe-warts.png'
import { Button } from "../components/style";



function Projetos() {
    const history = useHistory()
     const home = () => {
     history.push('/')
     }
    return(
        <>
        <section id="projetos" className="my-projetos">
        <h1>Projetos</h1>
        <section  className="img-projetos">
        <div className="projetos-nav">
        <img src={ projeto1 } alt="" />
        <a href="k">Pixel art</a>
       
    </div>
    <div class="projetos-nav" >
       <img src={todoList} alt=""/>
        <a href="todo list/">Todo list</a>
    </div>
    <div className="projetos-nav">
    <img src={ trybeWarts } alt=""/>
        <a href="trybe-formulario/">trybe-warts</a>
    </div>
    </section>
    <Button type="button" onClick={home} >Home</Button>
</section>

</>
    )
}

export default Projetos;