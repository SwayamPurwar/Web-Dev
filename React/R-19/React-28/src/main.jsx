import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RecipeContext from "./contexts/RecipeContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <RecipeContext>
        <BrowserRouter>
            <App />
            <ToastContainer />
        </BrowserRouter>
    </RecipeContext>
);
