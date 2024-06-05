import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";


const Contact1 = () => {
  return (
    <div>
      <div className="flex flex-col w-full lg:flex-row mt-4">
        <div className="grid flex-grow h-42 card bg-red-300 rounded-box place-items-center">
          <div1 className="flex">
            <h1 className="text-xl font-bold">ADDRESS:-</h1>
            <h1 className="text-xl">Al-wasl-001</h1>
          </div1>
          <h1 className="text-xl">Al-mina road</h1>
          <div className="flex">
            <h1 className="text-2xl">
              <CiLocationOn />
            </h1>
            <h1 className="text-xl font-bold">Bur-Dubai, Dubai</h1>
          </div>
          <h1 className="text-xl font-bold">Phone:- 00355224455</h1>
        </div>
        <div className="divider lg:divider-horizontal text-4xl">
          <FaArrowRight />
        </div>
        <div className="grid flex-grow h-42 card bg-base-300 rounded-box place-items-center">
          <div className="flex">
            <h1 className="text-xl font-bold">ADDRESS:-</h1>
            <h1 className="text-xl">3rd floor S building</h1>
          </div>
          <h1 className="text-xl">Sheikhzayed-road</h1>
          <div className="flex">
            <h1 className="text-2xl">
              <CiLocationOn />
            </h1>
            <h1 className="text-xl font-bold">Downtown, Dubai</h1>
          </div>
          <h1 className="text-xl font-bold">Phone:- 00355224455</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact1
