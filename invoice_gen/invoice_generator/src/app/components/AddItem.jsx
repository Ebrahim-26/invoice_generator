import React from 'react'
import AutoComplete from '../common/AutoComplete'
import { Button, TextField, Typography } from '@mui/material'

function AddItem() {
    const data1=[{name:'Tarviz', id:1},{name:'Zoho', id:2}]
    const data2=[{name:'Laptop', id:1},{name:'Phone', id:2}]
  return (
    <div className=' grid grid-row p-10 gap-y-5'>
    <div className="flex justify-center border-4 rounded-md gap-2 border-black bg-[#8b9cef] shadow-2xl">
      <Typography sx={{ color: "black", fontSize: "2rem" }}>
       Add Clients
      </Typography>
    </div>
    <div className="grid grid-cols-1 w-[25rem] border-4 rounded-md border-black p-10 gap-y-3 bg-white shadow-2xl">
        <AutoComplete data={data1} label='Clients'/>
        <div className='flex gap-2'>
            <AutoComplete data={data2} label='Items'/>
            <TextField placeholder='QTY'/>
        </div>
        <Button variant='contained'>Add</Button>
    </div>

    </div>
  )
}

export default AddItem
