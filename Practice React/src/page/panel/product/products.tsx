import { Grid,Skeleton } from "@mui/material"
import { useGetProducts } from "../../../query"
import MediaCard from "../../../component/card"

const Products = () => {
  const { data ,isLoading} = useGetProducts()
  console.log(data)
  return (
    <>
      <Grid container spacing={5} sx={{justifyContent:"center"}}>
        {isLoading ?
        [1,2,3,4,5,6,7,8,9].map(()=>{
          return(
            <Grid item>
              <Skeleton variant="rectangular" width={200} height={200}/>
            </Grid>
          )
        })
        :data.map((a:object) => {
          return (
            <Grid item>
              <MediaCard data={a} />
            </Grid>
          )
        }
        )}
       
      </Grid>
    </>
  )
}

export default Products