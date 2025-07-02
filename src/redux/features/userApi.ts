import { baseApi } from "../allApi/baseApi";

// types.ts
export interface UserData {
  // Define the properties of the Pokemon type
  name: string;
  email: string;
  password: string;
  token: string;
  success: boolean;
  // Add more properties as needed
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createLoginUser: builder.mutation<UserData, Partial<UserData>>({
      query: (userInfo: UserData) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["users"],
    }),

    createRegisterUser: builder.mutation<UserData, Partial<UserData>>({
      query: (body: UserData) => ({
        url: "/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useCreateLoginUserMutation, useCreateRegisterUserMutation } =
  userApi;
export default userApi.reducer;
