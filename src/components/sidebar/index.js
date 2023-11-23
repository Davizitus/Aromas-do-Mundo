import Button from "../Button";
import React from "react";
const SideBar = ({ open, onClose, conteudo }) => {

    return (
        <div className={open ? "sidebar open" : "sidebar"} >
            <Button name="Fechar" onClick={onClose} />
            <ul>
                {conteudo}
            </ul>

        </div>
    );
}
export default SideBar;