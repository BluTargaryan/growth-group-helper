'use client'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import { Nav } from "./comps/nav";

export default function Home() {
  return (
    <>
<Nav/>
<StyledMain>
  
</StyledMain>
    </>
  );
}

const StyledMain = styled(motion.main)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  width: 100%;
  height: 610px;
  border: 1px solid black;
` 
