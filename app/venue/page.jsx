'use client'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import { useRouter } from "next/navigation"
import { NavRet } from "../comps/navwreturn";

export default function Venue (){
    //routing
  const router = useRouter()
 return (
   <>
   <NavRet/>

   </>
 );
}