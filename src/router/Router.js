import { Route, Routes } from "react-router"
import { TelaBiotipos } from "../pages/TelaBiotipos"
import { TelaInicial } from "../pages/TelaInicial"

export const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<TelaInicial />} />
            <Route exact path="/biotipos" element={<TelaBiotipos />} />
        </Routes>
    );
};

export default Router;