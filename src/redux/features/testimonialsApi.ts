import { baseApi } from "../allApi/baseApi";

export interface TestimonialsData {
  _id: string;
  name: string;
  title: string;
  image: string;
  quantity: string;
  description: string;
  acknowledged: boolean;
}

export const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonial: builder.query<TestimonialsData[], string>({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
      providesTags: ["testimonial"],
    }),

    createTestimonials: builder.mutation<
      TestimonialsData,
      Partial<TestimonialsData>
    >({
      query: (body) => ({
        url: "/testimonial",
        method: "POST",
        body,
      }),
      invalidatesTags: ["testimonial"],
    }),
  }),
});

export const { useGetTestimonialQuery, useCreateTestimonialsMutation } =
  testimonialApi;
