import { TextField, Typography } from "@mui/material";
import React from "react";

function DetailsPage() {
  const name = { name: "Ebrahim" };
  return (
    <div className="flex justify-center items-center h-screen  shadow-2xl">
      <div>
        <div>
          <div className=" mb-2 flex justify-center border-4 rounded-md gap-2 border-black bg-[#8b9cef]">
            <Typography sx={{ color: "black", fontSize: "2rem" }}>
              {name.name}
            </Typography>
          </div>
          <div className="grid grid-cols-1 w-[25rem] border-4 rounded-md border-black p-10 gap-y-3 bg-[#e1debe]">
            <TextField
              color="secondary"
              placeholder="Company Name"
              size="small"
            />
            <TextField color="secondary" placeholder="Email" size="small" />
            <TextField
              color="secondary"
              placeholder="Phone Number"
              size="small"
            />
            <TextField color="secondary" placeholder="Address" size="small" />
            <TextField
              color="secondary"
              placeholder="Contact Person Name"
              size="small"
            />
            <TextField color="secondary" placeholder="Notes" size="small" />
            <TextField color="secondary" placeholder="GSTIN" size="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
