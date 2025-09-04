import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../types/user.type";
import type { RootState } from "../redux/store";

export const rootApi = createApi({
  reducerPath: "api", // tên của slice trong Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
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

    // Call API verify OTP
    verifyOTP: builder.mutation({
      query: ({ email, otp }) => ({
        url: "/verify-otp",
        method: "POST",
        body: { email, otp },
      }),
    }),

    // Call API auth user
    getAuthUser: builder.query<User, void>({
      query: () => "/auth-user",
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useVerifyOTPMutation,
  useGetAuthUserQuery,
} = rootApi;
