import { Outlet } from "react-router-dom"
import Footer from "../shared/Footer"
import Navber from "../shared/Navber"


const Mainlaout = () => {
  return (
    <div>
    <Navber />
      <Outlet />
    <Footer />
    </div>
  )
}

export default Mainlaout
