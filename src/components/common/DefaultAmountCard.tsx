import { Box, Typography } from '@mui/material'
import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

type AmountProps = {
    amount: string
}
function DefaultAmountCard({amount}: AmountProps) {
  return (
    <Box sx={{
        height: '40px',
        width: '100px',
        backgroundColor: '#122435',
        color: '#fff',
        display: 'flex',
        paddingLeft:'5px'

    }}>
        <CurrencyRupeeIcon sx={{
            marginTop:'8px'
        }}/> 
       <Typography sx={{
        textAlign:'center',
        marginTop: '2px',
        fontSize: '25px'
       }}> {amount}</Typography>
    </Box>
  )
}

export default DefaultAmountCard