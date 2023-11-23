import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Menu from "../pages/Menu";
import Bebidas from "../pages/Bebidas";
import Doces from "../pages/Doces";
import Contatos from "../pages/Trabalhe-conosco";
function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/bebidas" element={<Bebidas />} />
                <Route path="/doces" element={<Doces />} />
                <Route path="/contatos" element={<Contatos />} />
            </Routes>

        </BrowserRouter>
    );

}

export default Rotas;