import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Typography } from '@mui/material';

export default function ClientPopup({name, email,number,address,pname,gstin,notes}) {


  return (
    <div>
    <div className=" mb-2 flex justify-center border-4 rounded-md gap-2 border-black bg-[#8b9cef] shadow-2xl">
      <Typography sx={{ color: "black", fontSize: "2rem" }}>
      {name}
      </Typography>
    </div>
    <div className="grid grid-cols-1 w-[25rem] border-4 rounded-md border-black p-10 gap-y-3 bg-[#e9e9e9] shadow-2xl">
      <Typography>Company Name: {name}</Typography>
      <Typography>Email: {email}</Typography>
      <Typography>Phone Number: {number}</Typography>
      <Typography>Address: {address}</Typography>
      <Typography>Contact Person Name: {pname}</Typography>
      <Typography>Notes: {notes}</Typography>
      <Typography>GSTIN: {gstin}</Typography>
    </div>
  </div>
  );
}
