'use client'
import React, { useState } from 'react'
import ClientCard from '../components/ClientCard'
import { Button, Dialog } from '@mui/material'
import AddClientPopup from '../components/AddClientPopup'

function page() {
    const ClientData=[
        {name:'Tarviz',email:'asdf@gmail.com',number:'987654321',address:'7th Street',pname:'khan',gstin:'23RE3',notes:''},
        {name:'Zoho',email:'asdf@gmail.com',number:'9987654321',address:'Annanagar',pname:'Kevin',gstin:'D3RE3',notes:''},
        
    ]
    const [open,setOpen]=useState(false)
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <>
    {
        ClientData.map((item)=>(
            <div className='mt-[2rem] ml-[2rem]'>
                <ClientCard 
                name={item.name}
                email={item.email} 
                number={item.number} 
                address={item.address} 
                pname={item.pname} 
                notes={item.notes}
                gstin={item.gstin}
                />
            </div>
        ))
    }
    <div className='flex justify-center items-center mt-3'>
        <Button onClick={handleClickOpen} sx={{textTransform:'none', bgcolor:'#8b9cef'}} variant='contained'> Add new Clients</Button>
    </div>
    <div>
        <Dialog open={open} onClose={handleClose}>
            <AddClientPopup/>
        </Dialog>
    </div>
   
    </>
  )
}

export default page
