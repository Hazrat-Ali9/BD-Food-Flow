import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../../../../redux/features/productApi";
import { getUserinfo } from "../../../../services/auth.services";

type Inputs = {
  name: string;
  email: string;
  title: string;
  category: string;
  quantity: string;
  image: string;
  description: string;
};

const DonateModal = ({ onClose }: { onClose: () => void }) => {
  const userInfo = getUserinfo();
  console.log(userInfo);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [createProduct] = useCreateProductMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const modifyData = {
      ...data,
      quantity: data.quantity.toString(), // Convert quantity to string
    };
    createProduct(modifyData);

    reset();
    navigate("/dashboard");
  };

  return (
    <>
      <div role="dialog" aria-modal="true">
        <section className="fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
          <div className="absolute md:w-6/12 w-3/4 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg pl-2 text-slate-400 my-2">
                Donate Product
              </h3>
              <button onClick={onClose} className="text-white">
                Close
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-xl p-5 rounded-lg"
            >
              {/* Input fields for the form */}
              <div className="flex space-x-3">
                <div className="flex flex-col mb-3 w-full">
                  <label className="mb-1 text-slate-400 text-lg">
                    Donor Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                <div className="flex flex-col mb-3 w-full">
                  <label className="mb-1 text-slate-400 text-lg">Email</label>
                  <input
                    defaultValue={userInfo?.email || ""}
                    readOnly
                    {...register("email", { required: true })}
                    type="text"
                    className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col mb-3">
                <label className="mb-1 text-slate-400 text-lg">Title</label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                />
                {errors.title && (
                  <span className="text-red-500">Title is required</span>
                )}
              </div>
              <div className="flex flex-col mb-3">
                <label className="mb-1 text-slate-400 text-lg">Image</label>
                <input
                  {...register("image", { required: true })}
                  type="text"
                  className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                />
                {errors.image && (
                  <span className="text-red-500">Image is required</span>
                )}
              </div>
              <div className="flex space-x-3">
                <div className="flex flex-col mb-3 w-full">
                  <label className="mb-1 text-slate-400 text-lg">
                    Category
                  </label>
                  <input
                    {...register("category", { required: true })}
                    type="text"
                    className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                  />
                  {errors.category && (
                    <span className="text-red-500">Category is required</span>
                  )}
                </div>
                <div className="flex flex-col mb-3 w-full">
                  <label className="mb-1 text-slate-400 text-lg">
                    Quantity
                  </label>
                  <input
                    {...register("quantity", { required: true })}
                    type="text"
                    className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                  />
                  {errors.quantity && (
                    <span className="text-red-500">Quantity is required</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col mb-3">
                <label className="mb-1 text-slate-400 text-lg">
                  Description
                </label>
                <input
                  {...register("description", { required: true })}
                  type="text"
                  className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                />
                {errors.description && (
                  <span className="text-red-500">Description is required</span>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="bg-[#023e8a] text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default DonateModal;
