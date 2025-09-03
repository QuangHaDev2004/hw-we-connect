import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApi = createApi({
  reducerPath: "api", // tên của slice trong Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({ // định nghĩa các API endpoint
    register: builder.mutation({
      query: ({ fullName, email, password }) => ({
        url: "/signup",
        method: "POST",
        body: { fullName, email, password },
      }),
    }),
  }),
});

export const { useRegisterMutation } = rootApi;
