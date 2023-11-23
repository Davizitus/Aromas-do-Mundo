import "./index.css"
const Doces = () => {
    const Doce = [
        { nome: "Celato Del Peppo", preco: "R$31", descricao: "Sorvete de cheesecake de frutas vermelhas com renda de amêndoas e calda de frutas vermelhas", imagem: "https://media-cdn.tripadvisor.com/media/photo-s/02/bd/c4/c5/peppo.jpg" },
        { nome: "Petit Gateau Con Gelato Vaniglia", preco: "R$31", descricao: "Petit Gâteau com sorvete de creme | Opções: Chocolate, doce de leite, doce de leite com recheio de chocolate", imagem: "https://i.pinimg.com/736x/b0/d4/f5/b0d4f5f7452b5fb082f24d90e9d07227.jpg" },
        { nome: "Charlotte Di Cioccolato e Noci", preco: "R$31", descricao: "Torta de chocolate com nozes", imagem: "https://i.pinimg.com/736x/f0/9f/94/f09f946e79fec7607e92506c9eaed010.jpg" },
        { nome: "Gelato Di Formaggi", preco: "R$29", descricao: "Sorvete de queijo com calda quente de goiabada", imagem: "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2009/12/ricetta-gelato-parmigiano/_jcr_content/header-par/image_single.img.jpg/1634899479507.jpg" },
        { nome: "Banana Flambata Con Gelato di Vaniglia", preco: "R$31", descricao: "Banana flambada com sorvete de creme", imagem: "https://media-cdn.tripadvisor.com/media/photo-s/02/bd/c4/df/peppo.jpg" },
        { nome: "Crema Di Papaya", preco: "R$29", descricao: "Creme de Papaya com licor de cassis", imagem: "https://cdn.nonnapaperina.it/wp-content/uploads/2018/06/Crema-di-papaya-con-zenzero-life-3.jpg?strip=all&lossy=1&webp=67&sharp=1&ssl=1" },
        { nome: "Tiramisù", preco: "R$31", descricao: "Tradicional sobremesa italiana com mascarpone, biscoito champanhe, café, conhaque e chocolate em pó", imagem: "https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-videoSixteenByNineJumbo1600.jpg" },
        { nome: "Pudim de Sorvete", preco: "R$29", descricao: "Também conhecido como pudim de sorvete, ele tem calda de caramelo e calda de chocolate.", imagem: "https://cdn0.tudoreceitas.com/pt/posts/3/2/5/pudim_de_sorvete_facil_6523_orig.jpg" },
        { nome: "Cannoli Recheado", preco: "R$9", descricao: "Uma explosão de sabor em cada mordida, com casquinha crocante recheada com ricota, chocolate e frutas cristalizadas.", imagem: "https://img.cybercook.com.br/receitas/422/cannoli-do-poderoso-chefao.jpeg" },
        { nome: "Panna Cotta de Frutas Vermelhas", preco: "R$11", descricao: "Uma sobremesa sedosa e refrescante, coberta com um coulis de frutas vermelhas.", imagem: "https://s2.glbimg.com/vFx4Otg9EjhrS6KJnL5Ut-w80Yk=/smart/e.glbimg.com/og/ed/f/original/2019/11/06/panacota_-_zillis.jpg" }
    ]


    return (
        <div>
            <ul>
                {Doce.map((Doce, index) => (
                    <li key={index}>
                        Nome: {Doce.nome},
                        Preço: {Doce.preco},
                        Pescrição: {Doce.descricao}
                        <br></br>
                        <img className="doce" src={Doce.imagem} alt={Doces.nome} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Doces;