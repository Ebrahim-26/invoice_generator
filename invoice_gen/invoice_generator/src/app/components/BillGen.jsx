import { Typography } from "@mui/material";
import React from "react";
import MuiTable from "./MuiTable";

function BillGen() {
  const data = {
    gst: "12wer32",
    invoice: "34EEF",
    date: "26 Feb, 2024",
    billed_to: "Anna nagar, 2nd street, 4th block, Chennai-67",
    billed_from: "Nungabakam, 2nd street, 4th block, Chennai-34",
    acc_num: "876543",
    bank: "SBI",
    ifsc: "SBU0004",
  };
  return (
    <div>
      <div className="root">
        <div className="p-[2rem] grid grid-col-1 gap-4 ">
          <div className="grid grid-col-1 justify-center text-center bg-slate-400">
            <Typography
              sx={{
                color: "black",
                fontSize: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              INVOICE
            </Typography>
            <div className="text-black logo text-lg">Elantrizo</div>
          </div>
          <div className="text-black grid grid-cols-1 justify-end text-right">
            <Typography sx={{ fontWeight: "bold" }}>
              GSTIN: <span style={{ fontWeight: "normal" }}>{data.gst}</span>{" "}
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              Invoice:{" "}
              <span style={{ fontWeight: "normal" }}>{data.invoice}</span>
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              Date: <span style={{ fontWeight: "normal" }}>{data.date}</span>
            </Typography>
          </div>
          <div className="billing address flex text-black justify-between gap-x-[5rem] ">
            <Typography>
              <span className="font-bold"> Billed to:</span> <br />{" "}
              {data.billed_to}
            </Typography>
            <Typography>
              <span className="font-bold"> From:</span> <br />{" "}
              {data.billed_from}
            </Typography>
          </div>
        </div>
        <div>
          <MuiTable />
        </div>
        <div className="flex justify-between mt-4">
          <div className="text-black ">
            <Typography>Bank Details</Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Account Number: </span>
              {data.acc_num}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Bank: </span>
              {data.bank}{" "}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>IFSC: </span> {data.ifsc}
            </Typography>
          </div>
          <div className="flex">
            <div className="bg-slate-300 font-bold text-right p-4">
              <Typography>Subtotal: </Typography>
              <Typography>GST: </Typography>
              <Typography>Paid: </Typography>
              <Typography>Yet to be paid: </Typography>
            </div>
            <div className="bg-slate-700 text-left p-4">
              <Typography>1,231 </Typography>
              <Typography>4,223 </Typography>
              <Typography>423 </Typography>
              <Typography>43,223 </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillGen;
