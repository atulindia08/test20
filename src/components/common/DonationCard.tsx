"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SelectDonationCause from './SelectDonationCause';
import { Divider, TextField } from '@mui/material';
import DefaultAmountCard from './DefaultAmountCard';
import { Input } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function DonationCard() {
    const [otherAmount, setOtherAmount] = React.useState('')
    return (
        <Card sx={{ minWidth: 275, boxShadow:'0px 2px 1px -1px rgb(18 36 53), 0px 1px 1px 0px rgb(18 36 53), 0px 1px 3px 0px rgb(18 36 53)' }}>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    Make A Difference & Get Tax Benefits
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" component="div">
                    *Your donations will give you tax benefit under 80G of the Indian Income Tax Act!
                </Typography>
                <Divider variant='middle' sx={{ marginTop: '15px' }} />
                <Box sx={{textAlign: 'center'}}>
                <SelectDonationCause />
                </Box>
                <Typography sx={{ fontSize: 14, marginTop: '5px', textAlign: 'center' }} color="text.secondary" component="div">
                    Choose an amount to donate.
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop:'10px',
                }}>
                    <DefaultAmountCard amount='500' />
                    <DefaultAmountCard amount='2500' />
                </Box>
                <Box sx={{marginTop: '10px', textAlign:'center'}}>
                    <TextField placeholder='Other Amount' sx={{width:'100%'}} value={otherAmount} onChange={(e) => setOtherAmount(e.target.value)} />
                </Box>
                <Box >
                    <Button sx={{backgroundColor:'#122435', color:'#fff', width:'100%', marginTop:'15px'}}>Procced To Next <ArrowForwardIcon /></Button>
                </Box>
              
                {/* <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography> */}
            </CardContent>
            <CardActions>
            For Foreigner & NRI   <Button size="small">Click Here</Button>
            </CardActions>
        </Card>
    );
}
