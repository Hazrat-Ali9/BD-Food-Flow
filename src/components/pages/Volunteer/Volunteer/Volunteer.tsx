// export default ;
import { SubmitHandler, useForm } from "react-hook-form";
// import { toast } from 'react-toastify'
import { toast } from "sonner";
import { useCreateVolunteersMutation } from "../../../../redux/features/volunteerApi";

interface Inputs {
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
}

const Volunteer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [createVolunteer] = useCreateVolunteersMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await createVolunteer(data);
      if ("error" in res) {
        // Handle error
        console.error("Error during Volunteer created:", res.error);
      } else {
        // Handle success
        if (res?.data?.acknowledged) {
          toast.success("Volunteer created successfully!!");

          reset();
        } else {
          // Handle invalid response
          console.error("Invalid response:", res);
        }
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error during Volunteer created:", error);
    }
  };

  return (
    <>
      <div className="w-1/2 mx-auto container pt-32">
        <div className="text-2xl font-bold text-center mt-14">
          <h2>Create Volunteers </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-xl p-5 rounded-lg mt-14 dark:bg-slate-900"
        >
          {/* Input field for title */}
          <div className="flex flex-col mb-3">
            <label className="mb-1">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.name && (
              <span className="text-red-500">name is required</span>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">email</label>
            <input
              {...register("email", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.email && (
              <span className="text-red-500">email is required</span>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">phoneNumber</label>
            <input
              {...register("phoneNumber", { required: true })}
              type="text"
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.phoneNumber && (
              <span className="text-red-500">phoneNumber is required</span>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">location</label>
            <input
              {...register("location", { required: true })}
              type="text" // Changed to text type
              className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.location && (
              <span className="text-red-500">location is required</span>
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

export default Volunteer;
