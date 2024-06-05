import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const Contact2 = () => {
  return (
    <div>
      <div className="flex flex-col w-full lg:flex-row mt-8 mb-4">
        <div className="grid flex-grow h-42 card bg-base-300 rounded-box place-items-center">
          <div1 className="flex">
            <h1 className="text-xl font-bold">ADDRESS:-</h1>
            <h1 className="text-xl">Qatar t building</h1>
          </div1>
          <h1 className="text-xl">Sheikhtamim road</h1>
          <div className="flex">
            <h1 className="text-2xl">
              <CiLocationOn />
            </h1>
            <h1 className="text-xl font-bold">Doha, Qatar</h1>
          </div>
          <h1 className="text-xl font-bold">Phone:- 00355224455</h1>
        </div>
        <div className="divider lg:divider-horizontal text-4xl">
          <FaArrowRight />
        </div>
        <div className="grid flex-grow h-42 card bg-red-300 rounded-box place-items-center">
          <div className="flex">
            <h1 className="text-xl font-bold">ADDRESS:-</h1>
            <h1 className="text-xl">4rd floor kira building</h1>
          </div>
          <h1 className="text-xl">Sheikhmuzib road</h1>
          <div className="flex">
            <h1 className="text-2xl">
              <CiLocationOn />
            </h1>
            <h1 className="text-xl font-bold">Dhaka,Bangladesh</h1>
          </div>
          <h1 className="text-xl font-bold">Phone:- 00355224455</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact2
