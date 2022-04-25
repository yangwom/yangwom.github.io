import styled from 'styled-components';


export const  Container = styled.header `
width: 100%;
position: fixed;
background-color: black;
padding: 5px 20px;
display: flex;
justify-content: space-between;
justify-items: center;

`;

export const  Imagem = styled.img `
width: 200px

`;

export const Button = styled.button `
background-color: rgb(0, 255, 0);
border: none;
margin-left: 10px;
padding: 5px;
border-radius: 3px;
transition: 0.6s;
&:hover {
background-color: rgb(0, 255, 255)
}
`;