import { createBrowserRouter } from "react-router-dom";
import Mainlaout from "../Components/Mainlayout/Mainlaout";
import Home from "../Components/pages/Home/Home";

const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element:<Mainlaout />,
        children:[
            {
                path:'/',
                element:<Home />
            }
        ]
    }
]);
export default myCreateRoute;