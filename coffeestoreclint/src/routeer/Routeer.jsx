import { createBrowserRouter } from "react-router-dom";
import Mainlaout from "../Components/Mainlayout/Mainlaout";
import Home from "../Components/pages/Home/Home";
import About from "../Components/pages/About/About";
import Contact from "../Components/pages/contact/Contact";
import Addcoffee from "../Components/pages/addcoffee/Addcoffee";

const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element:<Mainlaout />,
        children:[
            {
                path:'/',
                element:<Home />,
                loader: () => fetch('http://localhost:3000/coffee')
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/addcoffee",
                element:<Addcoffee />
            }
        ]
    }
]);
export default myCreateRoute;