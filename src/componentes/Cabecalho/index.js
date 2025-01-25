import { Link } from "react-router-dom";
import style  from "./Cabecalho.module.css";
import logo from "./Logo.png"
import CabecalhoLink from "componentes/CabecalhoLink";

function Cabecalho() {
    return(
        <header className={style.cabecalho}>
            <div>
                <Link to="./">
                    <img className={style.logoImagem} src={logo} alt="Logo do sistema calculo"></img>
                </Link>
            </div>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Pedidos">
                    Pedidos
                </CabecalhoLink>
                <CabecalhoLink url="./MeuspPedidos">
                    Meus pedidos
                </CabecalhoLink>
                <CabecalhoLink url="./Cadastrar">
                    Cadastrar
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;