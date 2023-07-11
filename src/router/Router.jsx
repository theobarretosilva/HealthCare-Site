import { Route, Routes } from "react-router-dom"
import { TelaBiotipos } from "../pages/TelaBiotipos/TelaBiotipos"
import { TelaInicial } from "../pages/TelaInicial/TelaInicial"
import { LayoutBase } from "../components/LayoutBase/LayoutBase";

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<LayoutBase />}>
                <Route path="/" element={<TelaInicial />} />
                <Route path="/biotipos" element={<TelaBiotipos />} />
            </Route>
        </Routes>
    );
};