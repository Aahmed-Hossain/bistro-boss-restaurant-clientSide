/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (food) => {
    console.log(food);
    if (user && user?.email) {
      console.log(user.email);
      const cartItem = {menuId: _id, user: user?.email, name, image, price}
    } else {
      Swal.fire({
        title: "You are not Logged in",
        text: "Please login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <section>
      <div className="card card-compact w-96 bg-base-100 shadow-xl p-6">
        {/* <figure><img src={image} alt="Shoes" /></figure> */}
        <div className="relative inline-block">
          <div className="absolute top-0 right-0 w-1/4 h-1/6 bg-black bg-opacity-75 rounded-md  flex justify-center items-center text-white text-center font-bold">
            ${price}
          </div>
          <figure>
            <img src={image} alt="Shoes" className="block w-full h-auto" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn border-b-4 border-yellow-600 outline-2 mt-8"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCard;
