import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axios-base-query";
import { url } from "inspector";
import { GlobalFeed } from "./dto/global-feed.in";

export const feedApi = createApi({
  reducerPath: "feed",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api",
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeed, any>({
      query: () => ({ url: "/articles", method: "get" }),
    }),
  }),
});

export const { useGetGlobalFeedQuery } = feedApi;
