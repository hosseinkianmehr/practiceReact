import { Stack } from "@mui/material"
import { SwiperHeader } from "../../component/main/swiper"
import { BreakpointsProduct } from "../../component/main/breakpointsProduct"

const Main = () => {
  return (
    < >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >

        <SwiperHeader />
        <BreakpointsProduct/>
      </Stack>
    </>
  )
}

export default Main