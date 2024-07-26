import { Box } from '@mui/material';
import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCarousal from './common/Carousal';
import DonationCard from './common/DonationCard';

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