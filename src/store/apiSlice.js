import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const my_ip = '192.168.1.7';  // replace localhost with your ipv4 (simplest fix)
// the newer version of react-native will not let you run the way you want to fetch api from localhost.
// go to command prompt, and type ipconfig to get your ip

const baseUrl = `http://${my_ip}:3000/`;

// const demoUrl = 'http://localhost:3000/';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        // products
        getProducts: builder.query({
            query: () => 'products',
        }),
        // product's details
        getProduct: builder.query({
            query: (id) => `products/${id}`,
        }),
        // orders
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: 'orders',
                method: 'POST',
                body: newOrder,
            }),
        }),
        getOrder: builder.query({
            query: (ref) => `orders/${ref}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetProductQuery, useCreateOrderMutation, useGetOrderQuery } = apiSlice;