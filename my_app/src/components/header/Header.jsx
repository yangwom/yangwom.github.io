import img from './img/Yang0000.png'
import ButtonDarkMode from '../styleButton/ButtonDarkMode'
import { Container, Imagem } from '../style'
import { Link } from 'react-router-dom'
function Header() {
       return (
    <Container>
     <Imagem src={img} />
       <nav>
        <Link to="projetos">Meus  projetos</Link>
        <ButtonDarkMode />
      </nav>
      </Container>
    )

}
export default Header
