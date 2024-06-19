

const Coffeecard = (coffee) => {
    const {name, quantity, supplier, taste, category, details, photo} = coffee.coffee;
    // console.log(coffee.coffee)
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={photo} alt ="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title"> {name}</h2>
    <div className="flex gap-2">
    <p>{quantity}</p>
    <p>{supplier}</p>
    </div>
   <div className="flex gap-2">
   <p>{taste}</p>
   <p>{category}</p>
   </div>
    <p>{details}</p>
  </div>
</div>
    </div>
  )
}

export default Coffeecard
