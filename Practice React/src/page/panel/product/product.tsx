import { Grid, Box, Typography, Button, Card,Stack,Skeleton } from "@mui/material"
import { useGetProduct } from "../../../query"
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const sanitizedID = parseInt(id || "0") || 0
  const { data, isLoading } = useGetProduct(sanitizedID)
  console.log(id)
  console.log(data)
  return (
    <>
      {isLoading ?  
      (
        <Grid container direction={"row-reverse"} >
        <Grid item xs={12} sm={12} sx={{ padding: { xs: 1, sm: 3 } }}>
        <Skeleton animation="wave" />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
        <Skeleton variant="rectangular" width={200} height={200}/>
        </Grid>
        <Grid item xs={12} sm={6} >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}>
           <Skeleton animation="wave" width={200} />
           <Skeleton animation="wave" width={200}/>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} sx={{ padding: { xs: 2, sm: 5 } }}>

        <Skeleton animation="wave" sx={{marginBottom:1}}/>
        <Skeleton animation="wave" sx={{marginBottom:1}}/>
        <Skeleton animation="wave" sx={{marginBottom:1}}/>
        </Grid>

      </Grid>
      )
      :(<Grid container direction={"row-reverse"} >
      <Grid item xs={12} sm={12} sx={{ padding: { xs: 1, sm: 3 } }}>
        <Typography variant="h4">{data.title}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
        <Box
          component="img"
          sx={{
            height: { xs: "70vw", sm: 300 },
            width: { xs: "70vw", sm: 400 },
            borderRadius: 0.5
          }}
          alt="The house from the offer."
          src={data.image}
        />
      </Grid>
      <Grid item xs={12} sm={6} >
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}>
          <Card
            sx={{
              height: { xs: "70vw", sm: 300 },
              width: { xs: "70vw", sm: 300 },
              borderRadius: 0.5,
            }}>
              <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={4}>
            <Typography variant="h5">price:{data.price}</Typography>
            <Typography variant="body2" sx={{ padding: 3 }} > {data.category}</Typography>
            <Button> shop</Button>
              </Stack>
          </Card>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} sx={{ padding: { xs: 2, sm: 5 } }}>

        <Typography variant="body1"> {data.description}</Typography>
      </Grid>

    </Grid>)
      }
      </>
      )
    }

export default Product