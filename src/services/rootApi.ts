/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
  createApi,
  fetchBaseQuery,
  type BaseQueryApi,
  type FetchArgs,
} from "@reduxjs/toolkit/query/react";
import type { User } from "../types/user.type";
import { login, logout } from "../redux/slices/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.accessToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  let result = await baseQuery(args, api, extraOptions);
  const state = api.getState() as any;

  if (result?.error?.status === 401) {
    const refreshToken = state.auth.refreshToken;
    if (refreshToken) {
      const refreshResult = await baseQuery(
        {
          url: "/refresh-token",
          method: "POST",
          body: { refreshToken },
        },
        api,
        extraOptions,
      );

      const newAccessToken = (refreshResult?.data as { accessToken: string })
        ?.accessToken;
      if (newAccessToken) {
        api.dispatch(
          login({
            accessToken: newAccessToken,
            refreshToken,
          }),
        );

        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
        window.location.href = "/login";
      }
    }
  }

  return result;
};

export const rootApi = createApi({
  reducerPath: "api", // tên của slice trong Redux store
  baseQuery: baseQueryWithReauth,
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

    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: "/refresh-token",
        method: "POST",
        body: { refreshToken },
      }),
    }),

    // Call API auth user
    getAuthUser: builder.query<User, void>({
      query: () => "/auth-user",
    }),

    createPost: builder.mutation({
      query: (formData) => {
        return {
          url: "/posts",
          method: "POST",
          body: formData,
        };
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useVerifyOTPMutation,
  useGetAuthUserQuery,
  useCreatePostMutation,
  useRefreshTokenMutation,
} = rootApi;
