import { Link } from "react-router-dom";
import Button from "../../components/Button";
import H1 from "../../components/H1";
import "./index.css"
import { useState } from "react";
import Sidebar from "../../components/sidebar";
import aromas from "../../images/aromas.png";
import H3 from "../../components/H3";
const Home = () => {



    const [open, setOpen] = useState(false);
    const verificar = () => {
        setOpen(!open)

    }

    return (
        <div>
            
            <Button id={"butao"} name="Abrir" onClick={verificar} />
           
            <Sidebar
                open={open}
                onClose={verificar}
                conteudo={<>
                    <Link to="/Menu" >
                        <Button className="button" name="Salgados" />
                    </Link>

                    <Link to="/Doces">
                        <Button name="Doçes" />
                    </Link>

                    <Link to="/Bebidas">
                        <Button name="Bebidas" />
                    </Link>

                    <Link to="/Contatos">
                        <Button name="Contatos" />
                    </Link>

                    <Link to="/Sobre" >
                        <Button name="Movimento ambiental" />
                    </Link>
                </>
                } />
                <div className="alinhar">
            <H1  mensage="Aromas do Mundo"/>
            <img className="arom" src={aromas} alt="Logo" />
            </div>
            <H3 mensage="Feito por Davi e Eric" />
        </div>
    )

}

export default Home;