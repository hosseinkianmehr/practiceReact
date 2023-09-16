import { Grid } from "@mui/material"
import { useGetProducts } from "../../../query"
import MediaCard from "../../../component/card"

const Products = () => {
  const { data } = useGetProducts()
  console.log(data)
  return (
    <>
      <Grid container spacing={5} sx={{justifyContent:"center"}}>
        {data && data.map((a) => {
          return (
            <>
            <Grid item>
              <MediaCard data={a} />
            </Grid>
             
            </>
          )
        }
        )}
       
      </Grid>
    </>
  )
}

export default Products