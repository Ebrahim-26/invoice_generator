import { Typography } from "@mui/material";
import Image from "next/image";
import DetailsPage from "./components/DetailsPage";
import Navbar from "./components/Navbar";
import { BlindsClosed } from "@mui/icons-material";
import BillGen from "./components/BillGen";
export default function Home() {
  return (
    <div className="">
      {/* <Navbar/> */}
        {/* <DetailsPage/> */}
        <BillGen/>
    </div>
  );
}
