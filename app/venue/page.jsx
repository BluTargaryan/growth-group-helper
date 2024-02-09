'use client'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation } from "../animation";

import MapContainer from "../comps/map";

import { useRouter } from "next/navigation"
import { NavRet } from "../comps/navwreturn";

export default function Venue (){

  
 return (
  <motion.div
  key={'venue'}
  variants={pageAnimation}
  initial="hidden"
  animate="show"
  exit="exit">
   <NavRet/>
<StyledVenue>
<div className="hero">
  <p>Dear <strong>Paul</strong>, the growth group closest to you is located at</p>
<h4>31 Westfarrow Lane, CV2 1VF</h4>
<p>Feel free to come fellowship with us every Thursday. Also, you can contact the growth group leaders by:</p>

<div className="contacts">
  <p><strong>Phone :</strong> 000 000 00 00</p>
  <p><strong>E-mail :</strong> homeowner@yahoo.com</p>
</div>
</div>

<div className="map-holder">
<MapContainer/>
</div>
</StyledVenue>
   </motion.div>
 );
}

const StyledVenue = styled(motion.main)`
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
    gap: 32px;
    width: 40%;

  

    h4{
      font-size: 39px;
    }

    p{
      font-size: 31px;
    }

    .contacts{
      gap: 21px;
      display: flex;
      flex-direction: column;
    }

  }

  .map-holder{
    width: 50%;
    height: 90%;
  }

`