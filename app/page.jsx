'use client'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation } from "./animation";

import { useRouter } from "next/navigation"


import { MdOutlineArrowForward } from 'react-icons/md'

import { Nav } from "./comps/nav";

export default function Home() {

   //routing
   const router = useRouter()
  return (
    <motion.div
    key={'home'}
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit">
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
    </motion.div>
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



@media (max-width: 576px){
  flex-direction: column-reverse;
  padding: 66px 0;
  height: auto;
  justify-content: center;
  gap: 37px;

  .hero{
    width: 90%;
    align-items: center;
    text-align: center;
    gap: 37px;
    h2{
      font-size: 25px;
     
    }
    p{
      font-size: 16px;
    }
    button{
      
      height: 55px !important;
      width: 60%;
      padding: 0 5px;

      span,.icon{
        font-size: 20px;
      }
    }
  }

  .hero-img{
    width: 80%;
    height: 284px;

    &:hover{
      width: 90%;
    }
  }
}

@media (min-width: 768px) and (max-width: 991px){
height: auto;

.hero{
 justify-content: center;
 gap: 20px;
    h2{
      font-size: 25px;
     
    }
    p{
      font-size: 16px;
    }

    button{
      
      height: 55px !important;

      span,.icon{
        font-size: 20px;
      }
    }
  }

  .hero-img{
    height: 400px;
  }
}
` 
