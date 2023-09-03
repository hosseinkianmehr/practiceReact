import { Routes, Route, Router } from "react-router-dom"
import Login from "./authentication/login"
import Register from "./authentication/register"

import Panel from "./panel"
import Main from "./panel/main"

export const Page = () => {
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
