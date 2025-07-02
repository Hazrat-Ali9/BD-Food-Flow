import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: `${process.env.VITE_SERVER_BASE_URL}`,
    baseUrl: "https://food-flow-server-amber.vercel.app/api/v1",
    // credentials: 'include',
  }),
  endpoints: () => ({}),

  tagTypes: ["products", "users", "volunteer", "testimonial"],
});
