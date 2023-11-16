const Bebidas = () => {
    const Bebida = [
        { nome: "Água", preco: "R$5" },
        { nome: "Coca-Cola", preco: "R$18" },
        { nome: "Guaraná", preco: "R$10" },
        { nome: "Suco de Morango", preco: "R$15" },
        { nome: "suco de Maracujá", preco: "R$15" },
        { nome: "uísuque Buchanas", preco: "R$20" },
        { nome: "Martine", preco: "R$30" },
        { nome: "Jack-Cola", preco: "R$30" },
        { nome: "Negrone", preco: "R$25" },
        { nome: "Dose tequila", preco: "R$10" }
    ]

    return (
        <div>
            <ul>
                {Bebida.map((Bebida, index) => (
                    <li key={index}>
                        Nome: {Bebida.nome},
                        Preço: {Bebida.preco},

                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Bebidas;