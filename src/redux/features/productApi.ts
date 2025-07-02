import { baseApi } from "../allApi/baseApi";

interface ProductResponse {
  _id: string;
  title: string;
  quantity: string;
  category: string;
  image: string;
  description: string;
  acknowledged: boolean;
}

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse[], string>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),

    getSingleProduct: builder.query<ProductResponse, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),

    createProduct: builder.mutation<ProductResponse, Partial<ProductResponse>>({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["products"],
    }),

    updateProduct: builder.mutation<
      ProductResponse,
      { id: string; body: Partial<ProductResponse> }
    >({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["products"],
    }),

    deleteProduct: builder.mutation<ProductResponse, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetSingleProductQuery,
} = productApi;
