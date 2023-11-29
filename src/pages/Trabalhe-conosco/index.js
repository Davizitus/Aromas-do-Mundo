import "./index.css"
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const Contatos = () => {

    return (
        <div>
            <h1>Contatos</h1>
            <h3>Venha fazer parte da nossa equipe culinária apaixonada! No Aromas do mundo, buscamos talentos que compartilhem nosso amor pela gastronomia e dedicação ao serviço excepcional. Se você é apaixonado por criar experiências gastronômicas memoráveis, tem habilidades culinárias excepcionais ou expertise em atendimento ao cliente, Estamos ansiosos para receber indivíduos comprometidos e apaixonados pela arte da culinária</h3>
            <h3>Envie seu currículo para aromas.do.mundo@gmail.com.</h3>
            <h3>Telefone para contato: 4002-8922</h3>
        <Link to="/">
            <Button id={"button"} name="Home" />
        </Link>
        </div>
    );
}

export default Contatos;