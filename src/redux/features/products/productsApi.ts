import { baseApi } from "@/redux/api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    getProducts: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
      providesTags: ["products"],
    }),

    getProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),

    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: updatedProduct,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});
export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
