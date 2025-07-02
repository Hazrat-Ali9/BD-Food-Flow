import { baseApi } from "../allApi/baseApi";

export interface VolunteerData {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  acknowledged: boolean;
}

export const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVolunteers: builder.query<VolunteerData[], string>({
      query: () => ({
        url: "/volunteer",
        method: "GET",
      }),
      providesTags: ["volunteer"],
    }),

    createVolunteers: builder.mutation<VolunteerData, Partial<VolunteerData>>({
      query: (body) => ({
        url: "/volunteer",
        method: "POST",
        body,
      }),
      invalidatesTags: ["volunteer"],
    }),
  }),
});

export const { useGetVolunteersQuery, useCreateVolunteersMutation } =
  volunteerApi;
