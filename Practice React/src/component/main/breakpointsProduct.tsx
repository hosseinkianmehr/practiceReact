import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Box, Card, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import MediaCard from '../card';
import { useGetProducts } from '../../query';
import { Link } from 'react-router-dom';

export const BreakpointsProduct = () => {
    const {data}=useGetProducts()
    console.log(data)
    return (
        <>
            <Box sx={{width: '80vw', height: 400 }} style={{justifyContent:'center',alignItems:'center'}}>
                <Swiper 
                    slidesPerView={0}
                    spaceBetween={10}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        400: {
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
                    {data && data.map((a,index) => {
                        return (
                            <SwiperSlide key={index} >
                                <Link to={`/product/${a.id}`} preventScrollReset={true} >
                                <MediaCard data={a}/>
                                </Link>
                            
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                
            </Box>
        </>
    );
}
