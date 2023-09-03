import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Box, Card, ImageListItem, ImageListItemBar } from '@mui/material'
import MediaCard from '../card';

export const BreakpointsProduct = () => {
    return (
        <>
            <Box sx={{width: '80vw', height: 400 }} style={{justifyContent:'center',alignItems:'center'}}>
                <Swiper 
                    slidesPerView={0}
                    spaceBetween={0}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        440: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    
                    className="mySwiper"
                >
                    {[1, 2, 3,4 ,5, 345 ,543,3 ,53].map(() => {
                        return (
                            <SwiperSlide >
                                <MediaCard/>
                            
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Box>
        </>
    );
}
