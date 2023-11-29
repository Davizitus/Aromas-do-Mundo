import "./index.css"
import { Link } from "react-router-dom";
import Button from "../../components/Button";
const Menu = () => {
    const hostsClick = () => {

        alert("Molho de tomate especial caseiro. É uma receita de familia ");
    };

    const comidas = [
        { nome: "Massa Carbonara", preco: "R$50", descricao: "Um prato tradicional italiano na sua mesa: essa receita de macarrão a carbonara é um absurdo de gostosa! Não há como resistir à combinação de macarrão, ovos e bacon! Um clássico da culinária que consegue ser simples, fácil e delicioso!", imagem: "https://th.bing.com/th/id/R.a0fc4ee42098ece02e4f95fc18f81090?rik=D%2b2JjcoCrnS%2b9Q&pid=ImgRaw&r=0" },
        { nome: "Batata Rustica", preco: "R$30", descricao: "Elas são um ótimo acompanhamento para carnes, aves e peixes. E também podem ser um aperitivo.", imagem: "https://th.bing.com/th/id/R.b0ce768d1ea1b8e5c48460739abf04b7?rik=rDAhQAKluhyRnw&pid=ImgRaw&r=0" },
        { nome: "Lasanha Italiana", preco: "R$35", descricao: "Uma lasanha que é ítaliana", imagem: "https://th.bing.com/th/id/R.b45e8dc3a1ea5196132267339944d82c?rik=zbW%2fpwxansJR%2bQ&pid=ImgRaw&r=0" },
        { nome: "Bacalhau no Forno", preco: "R$112", descricao: "Bacalhau no forno, bem português, lascas de bacalhau Gadus Morhua com ovos, pimentão, azeitona, batatas e azeite de oliva. 400g", imagem: "https://th.bing.com/th/id/R.8278ff26f94261d378202ad38e6fd94c?rik=fBQBn6YIIARpXQ&pid=ImgRaw&r=0" },
        { nome: "Costela de Porco com Polenta", preco: "R$58", descricao: "Costela de porco desossada com crosta de mix de pimentas e cítricos e polenta mole. Picante.", imagem: "https://th.bing.com/th/id/R.e9825956c961361a82eda00418699bc5?rik=AoCKH1ww3JNxVw&riu=http%3a%2f%2fcamilanacozinha.com%2fwp-content%2fuploads%2f2014%2f12%2fCostelinha-porco-ora-pro-nobis.jpg&ehk=nZB1VvhYx3ujfrfWHUW8HMo3f8gFPm1%2fGVVMgQw8b0o%3d&risl=1&pid=ImgRaw&r=0" },
        { nome: "Carreteiro de Charque", preco: "R$43", descricao: "Com vagem e moranga cabotiá tostadas. Vem com feijão preto mexido e ovo frito.", imagem: "https://th.bing.com/th/id/R.9974d5800384f0aec9ab68d5ee834899?rik=4wguCtDXae5V4w&riu=http%3a%2f%2f4.bp.blogspot.com%2f-696mdn0uWJs%2fUFfFyX7-ntI%2fAAAAAAAACsI%2fEuUkTe-T9uo%2fs1600%2fFOTO%2bCARRETEIRO%2bDE%2bCHARQUE.jpg&ehk=XFg0cWQHguJDESs3xLEk0aQ3WUm6VU2V5vdi9p%2b6v4Q%3d&risl=&pid=ImgRaw&r=0" },
        { nome: "Fettine di Filetto", preco: "R$72", descricao: "Iscas ao azeite de ervas com queijo provolone, servido com torradinhas", imagem: "https://blog.giallozafferano.it/semplicebuonoeconomico/wp-content/uploads/2018/12/IMG-20181224-WA0025-960x540.jpg" },
        { nome: "Bruschettas", preco: "R$39", descricao: "Seis bruschettas de presento cru e queijo brie; tomate fresco, manjericão e parmesão; pasta de queijo gorgonzola e mussarela de búfala", imagem: "https://th.bing.com/th/id/R.e3e68342b530c8ce81eafc5366b5c024?rik=4zAzpgjgqBQNFA&pid=ImgRaw&r=0" },
        { nome: "Burrata con Pomodorini", preco: "R$74", descricao: "Burrata com tomatinhos cereja confitados no azeite e ervas, com mix de folhas", imagem: "https://th.bing.com/th/id/R.ec617bcbd343367bb4c9191f12575dae?rik=MfRo%2fIzVBN4jag&pid=ImgRaw&r=0" },
        { nome: "Medaglioni Allegro", preco: "R$119", descricao: "Medalhões de filé ao molho cremoso de funghi Porcini flambado com whisky, acompanhados de tortelloni recheados com queijo Camembert, figo cristalizado e presunto ao molho de manteiga e nozes", imagem: "https://th.bing.com/th/id/OIP.xnSS_SCGB13OGoG87pD6xQHaE6?pid=ImgDet&rs=1" }
    ]


    return (
        <div id="Menu">
            <h2 id="pratoSalgado">Comidas Salgadas</h2>
            <button onClick={hostsClick}>Ingrediente X</button>
            <ul>
                {comidas.map((comidas, index) => (
                    <li key={index}>
                        Nome: {comidas.nome},
                        Preço: {comidas.preco},
                        Descrição: {comidas.descricao}
                        <br></br>
                        <img className="comida" src={comidas.imagem} alt={comidas.nome} />
                    </li>
                ))}
            </ul>
                    <Link to="/" >
                        <Button id={"button"} name="Home" />
                    </Link>
        </div>
    );
};

export default Menu;
