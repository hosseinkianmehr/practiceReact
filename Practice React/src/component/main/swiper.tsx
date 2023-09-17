import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Box, ImageListItem, ImageListItemBar,  } from '@mui/material'

// import required modules

export const SwiperHeader = () => {
    return (
        <Box sx={{ width: '80vw', height: '40vw' }}>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper"
            >
                {[1, 2, 3].map((i) => {
                    return (
                        <SwiperSlide key={i} >
                            <ImageListItem>
                            <ImageListItemBar
                                    title={'sefdf'}
                                    subtitle={'item.author'}
                                    />
                                <img src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' style={{ width: '80vw', height: '40vw' }} />
                                <ImageListItemBar
                                    title={'sefdf'}
                                    subtitle={'item.author'}
                                    />
                            </ImageListItem>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </Box>
    )
}
