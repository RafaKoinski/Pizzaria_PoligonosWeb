import { Link } from "react-router-dom";
import  style  from "./Inicio.module.css";

function Inicio() {
    return(
        <div >
            <section>
                <div className={style.inicio}>
                    <h1>Bem-vindo a pizzaria Poligonos!</h1>
                    <p>Venha conferir nossa incrível pizza redonda, com fatia triangular que vai dentro de uma caixa quadrada</p>
                    <Link to="./Pedidos" className={style.botao}>Fazer Pedido</Link>
                </div>
            </section>
        </div>
    )
}

export default Inicio;