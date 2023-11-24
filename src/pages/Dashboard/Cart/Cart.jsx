import { FaTrash } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import { axiosHook } from "../../../hooks/useAxios";

const Cart = () => {
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosHook.delete(`/carts/${id}`)
          .then(res => {
            if(res.data.deletedCount){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  refetch();
            }
            
          })
        }
      });
  }

  return (
    <div className="">
      <div className="flex justify-evenly bg-red-300">
        <h2 className="text-4xl">Items: {cart.length}</h2>
        <h2 className="text-4xl">Total Price: {totalPrice}</h2>
        <button className="btn btn-warning btn-md">Pay</button>
      </div>
      
      {cart.map((item, index) => (
  <div key={item._id} className="flex items-center justify-between gap-2 py-2 border border-slate-200 rounded-xl mb-4 p-4">
    {/* left div */}
    <div className="flex items-center gap-3">
      
      <span className=" text-xl font-semibold p-3">{index + 1}</span>
      <img
        className="w-[12rem] rounded-xl flex items-start"
        src={item.image}
        alt={item.name}
      />
      <div>
        <p className="text-[#A2A2A2">Price: {item.price}</p>
        <p className="text-[#A2A2A2">Email: {item.email}</p>
      </div>
    </div>
    {/* right div */}
    <div className="flex items-center gap-4 pr-2">
      <div>
      <button 
      onClick={()=>handleDelete(item._id)}
      className="btn-circle btn-md opacity-60 p-3  hover:opacity-70 bg-black"><FaTrash className="text-orange-700 font-bold text-xl"></FaTrash>
        
      </button>
      </div>
    </div>
  </div>
))}

    </div>
  );
};

export default Cart;
