const Button = ({name, onClick, id}) =>{
//criamos id para tentar fazer esse troço fucionar

    return(
        <div>
            <button id={id} onClick={onClick}>{name}</button>
        </div>
    );
}

export default Button;