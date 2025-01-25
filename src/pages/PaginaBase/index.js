import Cabecalho from "componentes/Cabecalho";
import style from "./PaginaBase.module.css"
import { Outlet } from "react-router-dom";
import Rodape from "componentes/Rodape";

function PaginaBase() {
    return(
        <main className={style.container}>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </main>
    )
}

export default PaginaBase;