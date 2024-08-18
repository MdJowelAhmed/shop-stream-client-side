
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className=' bg-[#F4F3F0] p-8 md:h-[600px] rounded-3xl' >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                 {/* <SwiperSlide>Slide 1</SwiperSlide> */}

                 <SwiperSlide>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='flex-1 text-center mt-16 space-y-4 flex flex-col items-center justify-center'>
                            <h2 className='text-5xl text-blue-400 font-semibold'>Ultra HD Smart TV</h2>
                            <h2 className='text-4xl text-amber-600 font-semibold'> Samsung</h2>
                            <p className=''>55-inch Ultra HD 4K Smart TV with built-in Alexa and HDR technology. .</p>
                            <button className='btn btn-success my-10'>Explore More</button>

                        </div>
                        <div className='flex-1'>
                            <img className='w-full h-[500px] rounded-3xl' src="https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/b41a7fde-dcc1-11ec-9f1b-2e0c91dc8f24.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

               
                 {/* <SwiperSlide>Slide 3</SwiperSlide> */}

                 <SwiperSlide>
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <div className='flex-1 text-center mt-16 space-y-4 flex flex-col items-center justify-center'>
                            <h2 className='text-5xl text-blue-400 font-semibold'>DSLR Camera</h2>
                            <h2 className='text-4xl text-amber-600 font-semibold'>Canon </h2>
                            <p className='text-sm'>24.1 MP DSLR camera with dual pixel autofocus and 4K video recording. </p>
                            <button className='btn btn-success my-10'>Explore More</button>

                        </div>
                        <div className='flex-1'>
                            <img className='w-full h-[500px] rounded-3xl' src="https://i5.walmartimages.com/seo/Canon-EOS-4000D-DSLR-Camera-EF-S-18-55-mm-f-3-5-5-6-III-Lens-Intl-Model_f19eafa7-34df-43a7-b8c8-d2d278591a01.a2330695baba8634b2ffb3aedb0af159.jpeg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                <SwiperSlide>
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <div className='flex-1 text-center mt-16 space-y-4 flex flex-col items-center justify-center'>
                            <h2 className='text-5xl text-blue-400 font-semibold'>Gaming Laptop</h2>
                            <h2 className='text-4xl text-amber-600 font-semibold'>HP </h2>
                            <p className='text-sm'>High-performance gaming laptop with NVIDIA RTX graphics.</p>
                            <button className='btn btn-success my-10'>Explore More</button>

                        </div>
                        <div className='flex-1'>
                            <img className='w-full h-[500px] rounded-3xl' src="https://mcsolution.com.bd/wp-content/uploads/2024/01/HP-Omen-Gaming-Laptop-16-wf1026TX-2024-Price-in-Bangladesh-MC-Solution-BD-1200x900.webp" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
               
                {/* <SwiperSlide>Slide 4</SwiperSlide> */}
                <SwiperSlide>
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <div className='flex-1 text-center mt-16 space-y-4 flex flex-col items-center justify-center'>
                            <h2 className='text-5xl text-blue-400 font-semibold'>Instant pot</h2>
                            <h2 className='text-4xl text-amber-600 font-semibold'>Instant pot </h2>
                            <p className='text-sm '>7-in-1 multi-use programmable pressure cooker.</p>
                            <button className='btn btn-success my-10'>Explore More</button>

                        </div>
                        <div className='flex-1'>
                            <img className='w-full h-[500px] rounded-3xl' src="https://cdn.mos.cms.futurecdn.net/nZjgviVnSpBSAp8psNcMtG-415-80.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;