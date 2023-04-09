import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ICashFlow, IQuote} from "../../models/ISales";


export const iexApi = createApi({
    reducerPath: "iexApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.iex.cloud/v1/"
    }),
    tagTypes: ['api'],
    endpoints: (build) => ({
        quoteElement: build.query<IQuote[],string>({
            query: (value) => ({
                url: `/data/core/quote/${value}?token=sk_20496c0a7dca42229314de0ba3d21619`
            }),
            providesTags: result => ['api']
        }),
        cashFlow: build.query<ICashFlow[], string>({
            query: (company: string) => ({
                url: `/data/core/cash_flow/${company}?token=sk_20496c0a7dca42229314de0ba3d21619&last=25`
            }),
            providesTags: result => ['api']
        })
    })
})