import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import PaginaBase from "pages/PaginaBase";
import Pedidos from "pages/Pedidos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="Pedidos" element={<Pedidos />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;