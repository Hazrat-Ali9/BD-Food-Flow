import { useGetVolunteersQuery } from "../../../../redux/features/volunteerApi";

const OurVolunteers = () => {
  const { data, error, isLoading } = useGetVolunteersQuery("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...........</div>;
  }

  return (
    <div className="container pt-40 ">
      <h2 className="text-center">Our Volunteers</h2>
      <div className="grid pt-20 lg:grid-cols-4 gap-5 md:grid-cols-3 grid-cols-2">
        {data?.map((volunteer) => {
          return (
            <div
              className="border cursor-pointer shadow-lg duration-300 transition-all hover:scale-105 dark:border-gray-600 p-5 rounded-lg bg-white dark:bg-slate-900"
              key={volunteer._id}
            >
              <h1>name: {volunteer.name}</h1>
              <h1>email: {volunteer.email}</h1>
              <h1>phoneNumber: {volunteer.phoneNumber}</h1>
              <h1>location: {volunteer.location}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurVolunteers;
