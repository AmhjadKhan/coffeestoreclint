import { useState, useEffect } from "react";

const Picto = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    // Fetch JSON data
    fetch("picto.json")
      .then((response) => response.json())
      .then((data) => setCoffeeData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mt-8 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {coffeeData.map((coffee, index) => (
          <div
            key={index}
            className="p-4 rounded"
          >
            <img
              src={coffee.image}
              alt={`Coffee ${index + 1}`}
              className="w-full mb-4 rounded-md"
            />
            <p className="font-semibold"><strong>Quality:</strong> {coffee.quality}</p>
            <p><strong>Description:</strong> {coffee.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Picto;
