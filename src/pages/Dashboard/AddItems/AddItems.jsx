import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { axiosHook } from "../../../hooks/useAxios";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
console.log(image_hosting_api);
const AddItems = () => {
    const publicAxios =  useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const onSubmit = async(data) => {
    console.log(data)
    const imageFile = {image : data.image[0]}
    const res = await publicAxios.post(image_hosting_api, imageFile, {headers: {"content-type": "multipart/form-data"}})
    console.log(res.data)
    if(res.data.success){
        const menuItem = {
            name: data.name,
            category:  data.category,
            price: parseFloat(data.price),
            recipe:  data.recipe,
            image: res.data.data.display_url
        }
        const menuResponse = await axiosHook.post('/menu', menuItem)
        console.log(menuResponse.data)
        if(menuResponse.data.insertedId){
            alert('inserted')   
        }
    }
};
  return (
    <div className="p-8">
      <SectionTitle title={"What's New"} heading={"ADD Items"}></SectionTitle>
      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-control">
    <label className="label font-bold">
      <span className="label-text">Recipe Name</span>
    </label>
    <input
      {...register("name")}
      type="text"
      placeholder="Recipe Name"
      name="name"
      className="input border border-yellow-500 focus:outline-none focus:border-2 focus:border-yellow-500"
      required
    />
  </div>
  <div className="flex gap-6">
    {/* category */}
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text font-bold">Select Category</span>
      </label>
      <select
        {...register("category")}
        className="input border border-yellow-500 focus:outline-none focus:border-2 focus:border-yellow-500"
      >
        <option value="salad" disabled selected>Select Category</option>
        <option value="salad">Salad</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="dessert">Dessert</option>
        <option value="drinks">Drinks</option>
      </select>
    </div>
    {/* Price */}
    <div className="form-control w-full">
      <label className="label font-bold">
        <span className="label-text">Set Price</span>
      </label>
      <input
        {...register("price")}
        type="number"
        min={"1"}
        placeholder="Set Your Price"
        name="price"
        className="input border border-yellow-500 focus:outline-none focus:border-2 focus:border-yellow-500"
        required
      />
    </div>
  </div>
  <div>
    <label className="label">
      <span className="label-text font-bold">Recipe of Your Food</span>
    </label>
    <textarea 
    {...register("description")}
      className="w-full rounded-xl border border-yellow-500 focus:outline-none focus:border-2 focus:border-yellow-500"
      name="recipe"
      rows="6"
      required
    ></textarea>
  </div>
  <input required {...register("image")}
   type="file" className="file-input file-input-bordered file-input-warning w-full  my-3" />
  <button className="btn btn-warning my-3">
    Add Item <FaUtensils></FaUtensils>
  </button>
</form>

      </div>
    </div>
  );
};

export default AddItems;
