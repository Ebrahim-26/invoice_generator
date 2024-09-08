'use client'
import { Typography } from "@mui/material";
import React from "react";
import MuiTable from "./MuiTable";
import { useRef } from "react";
import ReactToPrint from 'react-to-print';
function BillGen() {
  const componentRef = useRef();
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

  const tableData=[
    {id:1,description:'Laptop',unitcost:100, qty:2,price:200},
    {id:2,description:'Laptop',unitcost:100, qty:2,price:500},
    {id:3,description:'Laptop',unitcost:100, qty:2,price:300},
  ]
  const tableHeader=[{value:''},{value:'DESCRIPTION'},{value:'UNIT COST'},{value:' QTY'},{value:'PRICE'}]

  return (
    <div >
  
      <div className="p-10" ref={componentRef}>
        <div
          className="grid grid-col-1 gap-4"
          style={{ WebkitPrintColorAdjust: "exact" }}
        >
          <div
            className="grid grid-col-1 justify-center text-center bg-[#8b9cef] rounded-md"
            style={{ WebkitPrintColorAdjust: "exact" }}
          >
            <Typography className="text=white flex text-[2rem] justify-center"
              style={{ WebkitPrintColorAdjust: "exact" }}
            >
              INVOICE
            </Typography>
            <div
              className="text-white text-lg"
              style={{ WebkitPrintColorAdjust: "exact" }}
            >
              Elantrizo
            </div>
          </div>

          <div
            className="text-black grid grid-cols-1 justify-end text-right"
            style={{ WebkitPrintColorAdjust: "exact" }}
          >
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

          <div
            className="billing address flex text-black justify-between gap-x-[5rem] mb-10"
            style={{ WebkitPrintColorAdjust: "exact" }}
          >
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

        <div className="mb-10">
          <MuiTable data={tableData} tableHeader={tableHeader} />
        </div>

        <div className="flex justify-between mt-4">
          <div className="text-black " style={{ WebkitPrintColorAdjust: "exact" }}>
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

          <div className="flex rounded-md border-4">
            <div
              className="bg-[#8b9cef] font-bold text-right p-4 pr-[5px]"
              style={{ WebkitPrintColorAdjust: "exact" }}
            >
              <Typography>Subtotal: </Typography>
              <Typography>GST: </Typography>
              <Typography>Paid: </Typography>
              <Typography>Yet to be paid: </Typography>
            </div>

            <div
              className="bg-[#f5f5f5] text-left text-black p-4 pl-[5px] "
              style={{ WebkitPrintColorAdjust: "exact" }}
            >
              <Typography>1,231 </Typography>
              <Typography>4,223 </Typography>
              <Typography>423 </Typography>
              <Typography>43,223 </Typography>
            </div>
          </div>
        </div>
      </div>
      <ReactToPrint
      trigger={() => <button className="bg-slate-200 rounded-full text-black">Print this out!</button>}
      content={() => componentRef.current}
    />
    </div>
  );
}

export default BillGen;
