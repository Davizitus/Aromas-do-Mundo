import H1 from "../../components/H1";
import "./index.css"
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const Sobre = () =>{

    return(
        <div>

        <H1 mensage="Sobre o Aromas do mundo" />
<h3>Bom, nosso restaurante preza pelo meio ambiente
     e estamos com um incrivel projeto de reflorestamento,
      já fizemos o plantil de mais de 100 arvores.</h3>

        <Link to="/" >
            <Button id={"button"} name="Home" />
        </Link>

        </div>
    )

}

export default Sobre;