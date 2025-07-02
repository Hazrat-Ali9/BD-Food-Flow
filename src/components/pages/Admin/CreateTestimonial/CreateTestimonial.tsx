import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateTestimonialsMutation } from "../../../../redux/features/testimonialsApi";
import { toast } from "sonner";

interface Inputs {
  name: string;
  title: string;
  quantity: string;
  image: string;
  description: string;
}

const CreateTestimonial = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [createTestimonial] = useCreateTestimonialsMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await createTestimonial(data);
      if ("error" in res) {
        // Handle error
        console.error("Error during Create Donation :", res.error);
      } else {
        // Handle success
        if (res?.data?.acknowledged) {
          toast.success("Create Donation For testimonial successfully!!");
          reset();
        } else {
          // Handle invalid response
          console.error("Invalid response:", res);
        }
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error during Create Donation d:", error);
    }
  };

  return (
    <>
      <div className="w-3/4 mx-auto">
        <div className="text-2xl font-bold text-center mt-14">
          <h1>Create Donation For testimonial </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-xl p-5 rounded-lg mt-3 dark:bg-slate-900"
        >
          {/* Input field for Name */}
          <div className="flex flex-col mb-3">
            <label className="mb-1">Donner Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
          </div>
          {/* Input field for title */}
          <div className="flex flex-col mb-3">
            <label className="mb-1">Title</label>
            <input
              {...register("title", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">Image</label>
            <input
              {...register("image", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.image && (
              <span className="text-red-500">Image is required</span>
            )}
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">Quantity</label>
            <input
              {...register("quantity", { required: true })}
              type="text" // Changed to text type
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.quantity && (
              <span className="text-red-500">Quantity is required</span>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">Description</label>
            <input
              {...register("description", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
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
    </>
  );
};

export default CreateTestimonial;
