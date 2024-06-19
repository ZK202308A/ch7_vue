import customAxios from "./customAxios.jsx";

const server = 'http://localhost:8080';


export const postProduct =  async (product) => {

    const res = await customAxios.post(`${server}/api/v1/products`, product);

    return res.data

}

export const getProducts = async ( page = 1, size = 10 ) => {

    console.log("server", server)

    const res = await customAxios.get(`${server}/api/v1/products/list?page=${page}&size=${size}`)

    return res.data;
}