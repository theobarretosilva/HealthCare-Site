import { Route, Routes } from "react-router-dom"
import { TelaBiotipos } from "../pages/TelaBiotipos/TelaBiotipos"
import { TelaInicial } from "../pages/TelaInicial/TelaInicial"

export const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<TelaInicial />} />
            <Route exact path="/biotipos" element={<TelaBiotipos />} />
        </Routes>
    );
};