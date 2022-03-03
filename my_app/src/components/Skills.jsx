 function Skills({ titleSkills, listSkills }) {
  const { hard1, hard2, hard3, hard4, } = listSkills;
    return ( 
    <li >
        <h1>{titleSkills}</h1>
        <p>{hard1}</p>
        <p>{hard2}</p>
        <p>{hard3}</p>
        <p>{hard4}</p>
    </li>
    );

}

export default Skills;
