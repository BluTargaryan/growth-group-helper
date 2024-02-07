'use client'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import { useRouter } from "next/navigation"


import { MdOutlineArrowForward } from 'react-icons/md'

import { Nav } from "./comps/nav";

export default function Home() {

   //routing
   const router = useRouter()
  return (
    <>
<Nav/>
<StyledMain>
  <div className="hero">
  <h2>Welcome to the Growth Group Assignment Portal for RCCG HGZ Coventry.</h2>
  <p>Discover your community within our church by using this interactive tool. Input your details, and let us guide you to the perfect house fellowship where you can connect, grow, and share your faith. Start your journey with us today!</p>
  <button onClick={()=>router.push(`/inputform`)}>
    <span>Continue</span>
    <MdOutlineArrowForward className="icon"/>
  </button>
  </div>
  <div className="hero-img">
  <img src='https://images.unsplash.com/photo-1565813086292-604790c8a97b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='fellowship image'/>
  </div>
  
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

  .hero{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 490px;
    width: 40%;

  

    h2{
      font-size: 39px;
    }

    p{
      font-size: 25px;
    }

    button{
      width: 50%;
      height: 78px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover{
        padding-right:10px !important;
      }
      
    }
  }

.hero-img{
  width: 45%;
  height: 90%;
  overflow: hidden;
  transition: all.2s ease-in;

  &:hover{
      width: 50%;
    }

  img{
    height: 100%;
    width: auto;
  }
}

` 
