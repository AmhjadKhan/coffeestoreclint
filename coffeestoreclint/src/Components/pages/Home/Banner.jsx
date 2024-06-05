import { GiCoffeeCup } from "react-icons/gi";


const Banner = () => {
    return (
      <div className="flex flex-col lg:flex-row bg-base-100">
        <div className="flex-1 flex items-center justify-center">
          <figure className="w-full h-full">
            <img
              src="https://www.sliderrevolution.com/wp-content/uploads/2021/09/coffee_gif.gif"
              alt="Album"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div className="flex-1 card-body">
          <div className="flex">
          <i className="card-title font-extrabold ml-12">HAVE A WONDERFUL DAY</i>
          <GiCoffeeCup className="text-5xl " />
          </div>
        
          <p>
           <strong>
           Stepping into the cozy coffee shop, the rich aroma of freshly brewed coffee immediately envelops you. The barista, with a warm smile, expertly crafts each drink, from frothy cappuccinos to velvety lattes. Wooden tables and mismatched chairs create a charming, rustic ambiance perfect for unwinding or catching up with friends. Soft jazz music plays in the background, adding to the relaxing atmosphere. Shelves lined with books and plants give the space a homely feel, inviting customers to linger and savor their time.
           </strong>
          </p>
          <div className="card-actions justify-end">
            <a href="/about"><button className="btn btn-primary">About Us</button></a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  