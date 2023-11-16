import { Link } from "react-router-dom";
import Button from "../../components/Button";
import H1 from "../../components/H1";
import "./index.css"
import { useState } from "react";
import Sidebar from "../../components/sidebar";

const Home = () => {



    const [open, setOpen] = useState(false);
    const verificar = () => {
        setOpen(!open)

    }

    return (
        <div>
            <h1>batataaaa</h1>
            <Button name="Abrir" onClick={verificar} />
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
            <H1 mensage="Aromas do Mundo"/>
        </div>
    )

}

export default Home;