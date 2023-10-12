import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl:  'https://jsonplaceholder.typicode.com'}),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page = 1) => `posts?page=${page}`,
      //query: () => '/posts',
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
