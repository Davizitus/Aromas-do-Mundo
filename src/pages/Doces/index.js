const Doces = () => {
    const Doce = [
        { nome: "Gelato Del Peppo", preco: "R$31", descricao: "Sorvete de cheesecake de frutas vermelhas com renda de amêndoas e calda de frutas vermelhas" },
        { nome: "Petit Gateau Con Gelato Vaniglia", preco: "R$31", descricao: "Petit Gâteau com sorvete de creme | Opções: Chocolate, doce de leite, doce de leite com recheio de chocolate" },
        { nome: "Charlotte Di Cioccolato e Noci", preco: "R$31", descricao: "Torta de chocolate com nozes" },
        { nome: "Gelato Di Formaggi", preco: "R$29", descricao: "Sorvete de queijo com calda quente de goiabada" },
        { nome: "Banana Flambata Con Gelato di Vaniglia", preco: "R$31", descricao: "Banana flambada com sorvete de creme" },
        { nome: "Crema Di Papaya", preco: "R$29", descricao: "Creme de Papaya com licor de cassis" },
        { nome: "Tiramisù", preco: "R$31", descricao: "Tradicional sobremesa italiana com mascarpone, biscoito champanhe, café, conhaque e chocolate em pó" },
        { nome: "Pudin de Sorvete", preco: "R$29", descricao: "Também conhecido como pudim de sorvete, ele tem calda de caramelo e calda de chocolate." },
        { nome: "Cannoli Recheado", preco: "R$9", descricao: "Uma explosão de sabor em cada mordida, com casquinha crocante recheada com ricota, chocolate e frutas cristalizadas." },
        { nome: "Panna Cotta de Frutas Vermelhas", preco: "R$11", descricao: "Uma sobremesa sedosa e refrescante, coberta com um coulis de frutas vermelhas." }
    ]


    return (
        <div>
            <ul>
                {Doce.map((Doce, index) => (
                    <li key={index}>
                        Nome: {Doce.nome},
                        Preço: {Doce.preco},
                        Pescrição: {Doce.descricao}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Doces;