import "./index.css"
import H2 from "../../components/H2";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Bebidas = () => {
    const Bebida = [
        { nome: "Água", preco: "R$5", imagem: "https://drogariamoderna.vtexassets.com/arquivos/ids/251997/agua-crystal-s-gas-15ml_587745.jpg?v=638151218022670000" },
        { nome: "Coca-Cola", preco: "R$18", imagem: "https://cdn.awsli.com.br/800x800/298/298064/produto/58265265/924400c3ef.jpg" },
        { nome: "Guaraná", preco: "R$10", imagem: "https://cdn.awsli.com.br/2500x2500/1330/1330028/produto/51587137/a19f18b3f5.jpg" },
        { nome: "Suco de Morango", preco: "R$15", imagem: "https://t1.uc.ltmcdn.com/pt/posts/6/1/0/como_fazer_suco_de_morango_16016_600.jpg" },
        { nome: "suco de Maracujá", preco: "R$15", imagem: "https://www.botecogois.com.br/wp-content/uploads/2021/01/suco-maracuja.jpg" },
        { nome: "uísuque Buchanas", preco: "R$20", imagem: "https://diageo.vtexassets.com/arquivos/ids/163464/736051-whisky-buchanans-deluxe-12Anos-1L_1.jpg?v=638294277978570000" },
        { nome: "Martine", preco: "R$30", imagem: "Martine", imagem: "https://espacoprime.fbitsstatic.net/img/p/vermouth-martini-bianco-750ml-70300/256813-1.jpg?w=480&h=480&v=no-change&qs=ignore" },
        { nome: "Jack-Cola", preco: "R$30", imagem: "https://dka74ubh8klts.cloudfront.net/Custom/Content/Products/55/64/55647_jack-cola-bebida-mista-lata-330-ml_m1_638242575537689050.jpg" },
        { nome: "Negrone", preco: "R$25", imagem: "https://cdn.awsli.com.br/2500x2500/553/553779/produto/311547243aec3222e2.jpg" },
        { nome: "Dose tequila", preco: "R$10", imagem: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2012/08/24/1tequila.jpg" }
    ]

    return (
        <div>
            <H2 mensage="Bebidas" />
            <ul>
                {Bebida.map((Bebida, index) => (
                    <li key={index}>
                        Nome: {Bebida.nome},
                        Preço: {Bebida.preco},
                        <br></br>
                        <img className="bebida" src={Bebida.imagem} alt={Bebida.nome} />

                    </li>
                ))}
            </ul>
            <Link to="/">
                <Button id={"button"} name="Home"  />
            </Link>   
        </div>
    );
}

export default Bebidas;