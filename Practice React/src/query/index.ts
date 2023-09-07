import { getCategories, getProduct, getProductCategories, getProducts } from "./request"
import { useQuery} from "react-query"

export const useGetProducts = ()=>{
    return (useQuery('getProducts',getProducts ))
    }
export const useGetProduct = (id:number)=>{
    return (useQuery(['getProduct',id],()=>getProduct(id) ))
    }
export const useGetcategories = ()=>{
    return (useQuery('getcategories',getCategories ))
    }
export const useGetProductCategories = ()=>{
    return (useQuery('getProductCategories',getProductCategories))
}
