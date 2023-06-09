import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const ImgKey = '88a32f9606ac9f1f4bc4d022254b25e1'
console.log(ImgKey);


const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit, reset,
  } = useForm();
  const ImgHostingURL = `https://api.imgbb.com/1/upload?key=${ImgKey}`;
  console.log(ImgHostingURL);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(ImgHostingURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imageURL = imgRes.data.display_url;
          const { name, category, price, recipe } = data;

          const newItem = {
            name,
            price: parseFloat(price),
            category,
            image: imageURL,
            recipe,
          };
          console.log(newItem);
          axiosSecure.post('/menu',newItem)
          .then(data=>{
           if (data.data.insertedId) {
            reset();
            Swal.fire({
              position: 'middle',
              icon: 'success',
              title: 'Your Menu Item Added SuccessFully',
              showConfirmButton: false,
              timer: 1500
            })
            
           }
          })
        }
      });
  };



  return (
    <div className="w-full px-10 ">


      {/* form ar kaj baj  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 80 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex gap-5 ">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              defaultValue={"Pick One"}
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option> Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price "
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Item Image </span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details </span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
        {/*       
        <input className="btn btn-warning btn-sm mt-4 mb-5 " type="submit" value="Add Item" /> */}

        <button className="btn btn-warning"> Submit</button>
      </form>
    </div>
  );
};

export default AddClass;
