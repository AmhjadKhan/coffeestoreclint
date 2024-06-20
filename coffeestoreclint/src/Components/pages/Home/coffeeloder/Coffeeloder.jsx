import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Coffeecard from "../coffeecard/Coffeecard";

const Coffeeloder = () => {
  const coffees = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Items per page

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = coffees.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(coffees.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6"> Coffee Card {coffees.length} Avilavle</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {currentItems.map((coffee) => (
          <Coffeecard key={coffee._id} coffee={coffee} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={handlePrevPage}
          className={`px-4 py-2 rounded-lg border ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`page-button px-4 py-2 rounded-lg border ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
            >
              <h1 className="text-4xl">{number}</h1>
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 rounded-lg border ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Coffeeloder;
