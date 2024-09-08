'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import ClientPopup from './ClientPopup';
import { Dialog} from '@mui/material';


export default function ClientCard({name, email,number,address,pname,gstin,notes}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div className='flex justify-center items-center gap-3'>
    <div>
        <Card sx={{ width: '50rem' }} onClick={handleClickOpen} >
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                        {name}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    <div className='gap-x-2 flex'>
        <Button sx={{bgcolor:'#a53939'}} variant='contained'>REMOVE</Button>
        <Button sx={{bgcolor:'grey'}} variant='contained'>EDIT</Button>
    </div>
    <div>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <ClientPopup 
          name={name}
          email={email} 
          number={number} 
          address={address} 
          pname={pname} 
          notes={notes}
          gstin={gstin}
      />
      </Dialog>
    </div>
    </div>
  );
}
