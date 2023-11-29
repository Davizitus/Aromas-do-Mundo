import { Link } from "react-router-dom";
import "./index.css"
import H2 from "../../components/H2";
import Button from "../../components/Button";
const Doces = () => {
    const Doce = [
        { nome: "Gelato Del Peppo", preco: "R$31", descricao: "Sorvete de cheesecake de frutas vermelhas com renda de amêndoas e calda de frutas vermelhas", imagem : "https://media-cdn.tripadvisor.com/media/photo-s/02/bd/c4/c5/peppo.jpg" },
        { nome: "Petit Gateau Con Gelato Vaniglia", preco: "R$31", descricao: "Petit Gâteau com sorvete de creme | Opções: Chocolate, doce de leite, doce de leite com recheio de chocolate", imagem: "https://i.pinimg.com/564x/b0/d4/f5/b0d4f5f7452b5fb082f24d90e9d07227.jpg" },
        { nome: "Charlotte Di Cioccolato e Noci", preco: "R$31", descricao: "Torta de chocolate com nozes", imagem: "https://i.pinimg.com/564x/f0/9f/94/f09f946e79fec7607e92506c9eaed010.jpg" },
        { nome: "Gelato Di Formaggi", preco: "R$29", descricao: "Sorvete de queijo com calda quente de goiabada", imagem: "https://lapercussi.com/website/wp-content/uploads/2021/07/gelato-di-formaggio-la-percussi.jpg" },
        { nome: "Banana Flambata Con Gelato di Vaniglia", preco: "R$31", descricao: "Banana flambada com sorvete de creme", imagem: "https://media.gazetadopovo.com.br/bomgourmet/2014/07/bomgourmetotv0906-26-4768d280.jpg" },
        { nome: "Crema Di Papaya", preco: "R$29", descricao: "Creme de Papaya com licor de cassis", imagem:"https://cooknenjoy.com/wp-content/uploads/2022/07/Creme-Papaya-01-1200x1200.jpg" },
        { nome: "Tiramisù", preco: "R$31", descricao: "Tradicional sobremesa italiana com mascarpone, biscoito champanhe, café, conhaque e chocolate em pó", imagem: "https://italianismo.com.br/wp-content/uploads/2020/11/Tiramisu%CC%80.jpg" },
        { nome: "Pudin de Sorvete", preco: "R$29", descricao: "Também conhecido como pudim de sorvete, ele tem calda de caramelo e calda de chocolate.", imagem: "https://melepimenta.com/wp-content/uploads/2022/12/Pudim-sorvete-sorvetao-como-fazer-Baixa-1.jpg" },
        { nome: "Cannoli Recheado", preco: "R$9", Descricao: "Uma explosão de sabor em cada mordida, com casquinha crocante recheada com ricota, chocolate e frutas cristalizadas.", imagem: "https://padacon.com.br/wp-content/uploads/2018/05/CANNOLI-italia-web-adimix.jpg" },
        { nome: "Panna Cotta de Frutas Vermelhas", preco: "R$11", descricao: "Uma sobremesa sedosa e refrescante, coberta com um coulis de frutas vermelhas.", imagem: "https://s2.glbimg.com/vFx4Otg9EjhrS6KJnL5Ut-w80Yk=/smart/e.glbimg.com/og/ed/f/original/2019/11/06/panacota_-_zillis.jpg" }
    ]


    return (
        <div>
            <H2 mensage="Doces"  />
            <ul>
                {Doce.map((Doce, index) => (
                    <li key={index}>
                        Nome: {Doce.nome},
                        Preço: {Doce.preco},
                        Descrição: {Doce.descricao}
                        <br></br>
                        <img className="doce" src={Doce.imagem} alt={Doce.nome} />
                    </li>
                ))}
            </ul>
            <Link to="/" >
                <Button id={"button"} name="Home" />
            </Link>
        </div>
    );
}

export default Doces;