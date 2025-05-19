import { Link } from "react-router-dom";

function ProductCard({ id, image, title, artisan, price }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
      <Link to={`/products/${id}`} className="w-full h-full flex flex-col">
        <div className="w-full h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300";
            }}
          />
        </div>
        <div className="flex flex-col items-center p-4 text-center flex-grow">
          <h3 className="text-xl font-semibold text-black mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-2">By {artisan}</p>
          <p className="text-lg font-bold text-indigo-600 mt-auto">
            ₹{price ? Number(price).toLocaleString("en-IN") : "---"}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
