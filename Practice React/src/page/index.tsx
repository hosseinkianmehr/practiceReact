import { Routes, Route } from "react-router-dom"
import Login from "./authentication/login"
import Register from "./authentication/register"

import Panel from "./panel"
import { useGetProducts } from "../query"

export const Page = () => {
  const {data}=useGetProducts()
  console.log(data)
  return (
   
<>
      <Routes >

        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Register />} />

        <Route path="/*" element={<Panel />} />



      </Routes>
 
</>
  )
}
