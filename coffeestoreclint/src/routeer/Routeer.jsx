import { createBrowserRouter } from "react-router-dom";
import Mainlaout from "../Components/Mainlayout/Mainlaout";
import Home from "../Components/pages/Home/Home";
import About from "../Components/pages/About/About";
import Contact from "../Components/pages/contact/Contact";

const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element:<Mainlaout />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            }
        ]
    }
]);
export default myCreateRoute;