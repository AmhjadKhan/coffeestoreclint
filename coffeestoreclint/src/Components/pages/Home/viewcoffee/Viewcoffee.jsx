import { Link, useLoaderData } from "react-router-dom";

const Viewcoffee = () => {
  const viewcoffee = useLoaderData();
  const { name, quantity, supplier, taste, category, details, photo } =
    viewcoffee;
  console.log(viewcoffee);
  return (
    <div className="flex justify-center items-center">
      <div className="card w-2/3">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Coffee" className="rounded-xl h-96" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl font-extrabold">{name}</h2>
          <div className="flex space-x-4 ">
            <p className="font-semibold text-2xl">{quantity}</p>
            <p className="font-semibold text-2xl">{supplier}</p>
            <p className="font-semibold text-2xl">{taste}</p>
            <p className="font-semibold text-2xl">{category}</p>
          </div>

          <p className="font-bold text-3xl">{details}</p>
          <div className="card-actions mt-4">
            <Link to={"/"}>
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewcoffee;
