
import request from "../request"

export const getProducts = async () => {
    return (await request.get('/products')).data
}
export const getProduct = async (id:number) => {
    return (await request.get(`/products/${id}`)).data
}
export const getCategories = async () => {
    return (await request.get(`/products/categories`)).data
}
export const getProductCategories =async () => {
    return (await request.get(`/products/category/jewelery`)).data
}
//////////////
export const postproduct =async (data:object) => {
    return request.post(`/products`, data).data
}
export const putProduct = async (data:object) => {
    return (await request.put(`/products/${data.id}`, data)).data
}
export const deleteProduct = async (id:number) => {
    return (await request.delete(`/products/${id}`)).data
}
export const AddUser = async (data:object) => {
    return (await request.post('/users ', data))
}