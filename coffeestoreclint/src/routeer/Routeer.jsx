import { createBrowserRouter } from "react-router-dom";
import Mainlaout from "../Components/Mainlayout/Mainlaout";
import Home from "../Components/pages/Home/Home";
import About from "../Components/pages/About/About";
import Contact from "../Components/pages/contact/Contact";
import Addcoffee from "../Components/pages/addcoffee/Addcoffee";
import Updatecoffee from "../Components/pages/updatecoffee/Updatecoffee";
import Viewcoffee from "../Components/pages/Home/viewcoffee/Viewcoffee";
import Singup from "../Components/pages/singup/Singup";
import Singin from "../Components/pages/singin/Singin";
import Privateroute from "./privateroute/Privateroute";

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
            },
            {
                path:'updatecoffee/:id',
                element:<Privateroute><Updatecoffee /></Privateroute>,
                loader: ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`)
            },
            {
                path:'viewcoffee/:id',
                element:<Privateroute><Viewcoffee /></Privateroute>,
                loader: ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`)
            },
            {
                path:'/singup',
                element:<Singup />
            },
            {
                path:'/singin',
                element:<Singin />
            }
        ]
    }
]);
export default myCreateRoute;