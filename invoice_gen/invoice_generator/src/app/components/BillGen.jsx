import { Typography } from '@mui/material'
import React from 'react'

function BillGen() {
    const data={gst:'12wer32', invoice:'34EEF', date:'12/02/12'}
  return (
    <div>
      <div className='root'>
        <div className='Big text and logo flex'>
            <div>
                <Typography sx={{color:'black', fontSize:'2rem'}}>Purchase Order</Typography>
            </div>
            <div className='text-black'>
               IMAGE LOGO
            </div>
        </div>
        <div className='text-black'>
            <Typography sx={{fontWeight:'bold'}}> GSTIN: <span style={{fontWeight:'normal'}}>{data.gst}</span> </Typography>
            <Typography sx={{fontWeight:'bold'}}>Invoice: <span style={{fontWeight:'normal'}}>{data.invoice}</span></Typography>
            <Typography sx={{fontWeight:'bold'}}>Date: <span style={{fontWeight:'normal'}}>{data.date}</span></Typography>
        </div>
      </div>
    </div>
  )
}

export default BillGen
