import { Box } from '@mui/material';
import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCarousal from './common/Carousal';
import DonationCard from './common/DonationCard';
import jnv1 from '../../public/gal2.jpg'

function HomePage() {
    return (
        <Box sx={{
            padding: '10px 10px 10px 10px'
        }}>
            <Box sx={{
                display: 'flex'
            }}>
                <Box sx={{
                    width: '60vw',
                    backgroundImage: `url(${jnv1.src})`
                   
                }}></Box>
                <Box sx={{
                    width: '40vw',
                }}>

                    <DonationCard />
                </Box>
            </Box>
        </Box>
    )
}

export default HomePage