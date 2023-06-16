import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, test, category, details, photoUrl } =
    coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        console.log(form)
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test= form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photo.value;
        const updatedCoffee = {name,quantity,supplier,test,category,details,photoUrl};
        console.log(updatedCoffee)

        // send a data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method:"PUT",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data =>{
          console.log(data)
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Success!',
              text: 'Coffee updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
    
    }
  return (
    <div className="bg-[#F4F3F0] md:p-24 p-12 mx-auto md:w-1/2">
      <h2 className="text-3xl text-center font-bold">Update Coffee :{name}</h2>
      <form onSubmit={handleUpdateCoffee} action="">
        {/* form name and quantity row */}
        <div className="md:flex mt-6 gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier and test row */}
        <div className="md:flex mt-6 gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Test</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="test"
                defaultValue={test}
                placeholder="Test"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details */}
        <div className="md:flex mt-6 gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo url */}
        <div className="mt-6 gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photoUrl}
                placeholder="Photo Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block bg-[#D2B48C] mt-6"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
