import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApi = createApi({
  reducerPath: "api", // tên của slice trong Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  // định nghĩa các API endpoint
  endpoints: (builder) => ({
    // call API signup
    register: builder.mutation({
      query: ({ fullName, email, password }) => ({
        url: "/signup",
        method: "POST",
        body: { fullName, email, password },
      }),
    }),

    // Call API login
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = rootApi;
