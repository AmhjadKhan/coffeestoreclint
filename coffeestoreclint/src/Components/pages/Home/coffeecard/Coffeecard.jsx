import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Coffeecard = (coffee) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee.coffee;
    
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:3000/coffee/${_id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire(
                    'Deleted!',
                    'Your Coffee has been deleted.',
                    'success'
                  )
                }
              });
          }
        });
      };
  
    return (
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={photo} alt="Coffee" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex gap-2">
              <p>{quantity}</p>
              <p>{supplier}</p>
            </div>
            <div className="flex gap-2">
              <p>{taste}</p>
              <p>{category}</p>
            </div>
            <p>{details}</p>
            <div className="flex gap-2 mt-4">
              <Link to={`viewcoffee/${_id}`}>
              <button className="btn btn-primary">View</button>
              </Link>
             <Link to={`updatecoffee/${_id}`}>
              <button className="btn btn-secondary">Update</button>
             </Link>
              <button onClick={() => handleDelete(_id)} className="btn btn-accent">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Coffeecard;
  