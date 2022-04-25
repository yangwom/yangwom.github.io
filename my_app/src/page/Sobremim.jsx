import Header from '../components/header/Header';
import ListSkills from '../components/ListSkills';
import Hobbies from '../components/Hobbies';
import img from '../img/yang.jpg';
import Footer from '../components/Footer';

function Sobremim() {
	return (
		<>
			<Header/>
			<section className="sobre-mim">
				<img src={img} width="200px" alt="" />

				<p>
					<strong>
            Olá meu nome yang wom, nasci em campo grande(ms) estou apaixonado
            por desenvolvimento de sofware atualmente estudante da trybe
					</strong>
				</p>
			</section>
			<ListSkills />
			<Hobbies />
			<Footer />
		</>
	);
}

export default Sobremim;
