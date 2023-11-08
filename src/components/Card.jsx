import rex from "../assets/rex.jpeg";

export const Card = (props) => {
  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg border border-white mx-auto my-4 bg-blue-900"
      data-aos="zoom-in"
      data-aos-duration="3000"
    >
      <img className="w-full h-auto" src={rex} alt="product" />
      <div className="px-6 py-2 pt-4 bg-blue-900">
        <div className="font-bold text-2xl mb-2 bg-blue-900 text-white">
          Product: {props.name}
        </div>
        <p className="text-gray-200 text-base bg-blue-900 text-white font-bold">
          Description: {props.description}
        </p>
      </div>
      <div className="px-6 py-2 bg-blue-900">
        <span className="text-gray-200 text-base bg-blue-900 text-white font-bold">
          Price: {props.price}
        </span>
      </div>
      <div className="px-6 py-2 bg-blue-900">
        <span className="text-gray-200 text-base bg-blue-900 text-white font-bold">
          SKU: {props.sku}
        </span>
      </div>
      <div className="px-6 py-2 bg-blue-900">
        <span className="text-gray-200 text-base bg-blue-900 text-white font-bold">
          Stock: {props.stock}
        </span>
      </div>
      <div className="px-6 py-4 bg-blue-900 flex justify-center">
        <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Buy
        </button>
      </div>
    </div>
  );
};
