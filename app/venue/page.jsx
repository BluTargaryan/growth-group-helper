'use client'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation } from "../animation";

import MapContainer from "../comps/map";


import { NavRet } from "../comps/navwreturn";

//geocode
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";
import { useState } from "react";

export default function Venue (){
  //coordinates object
  const venueCoord = {
    lat: 52.413975,
    long: -1.498518
  };

  const [userCoord, setUserCoord]=useState({})


  //func to conv degrees to radians
  const toRadians = (degrees)=> {
    return degrees * Math.PI / 180;
}

//haversine formula function to  calc dist btw two points
 const haversineDistance=(lat1, lon1, lat2, lon2)=> {
  // Radius of the Earth in kilometers
  const R = 6371;

  // Convert latitude and longitude from degrees to radians
  const lat1Rad = toRadians(lat1);
  const lon1Rad = toRadians(lon1);
  const lat2Rad = toRadians(lat2);
  const lon2Rad = toRadians(lon2);

  // Differences in latitude and longitude
  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  // Haversine formula
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1Rad) * Math.cos(lat2Rad) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}


//final value for the dist in km
const distance = Math.round(haversineDistance(venueCoord.lat,venueCoord.long, userCoord.lat, userCoord.long));
  
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
  <p>Dear <strong>Paul</strong>, the growth group closest to you (10 km) is located at</p>
<h4>31 Westfarrow Lane, CV2 1VF</h4>
<p>Feel free to come fellowship with us every Thursday. Also, you can contact the growth group leaders by:</p>

<div className="contacts">
  <p><strong>Phone :</strong> 000 000 00 00</p>
  <p><strong>E-mail :</strong> homeowner@yahoo.com</p>
</div>
</div>

<div className="map-holder">
<MapContainer lat={venueCoord.lat} long={venueCoord.long}/>
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

  @media (max-width: 576px){
    padding: 32px 0;
    flex-direction: column-reverse;
    height: auto;
    gap: 37px;

    .hero{
      height: auto;
    width: 90%;
    align-items: center;
    gap: 37px;
    text-align: center;

    h4{
      font-size: 25px;
    }

    p{
      font-size: 20px;
    }
    }

    .map-holder{
      width: 85%;
      height: 284px;
    }
  }

  @media (min-width: 577px) and (max-width: 1200px){
flex-direction: column-reverse;
padding: 32px 0;
gap: 32px;

.hero{
      height: auto;
    width: 90%;
    align-items: center;
    gap: 37px;
    text-align: center;

    h4{
      font-size: 25px;
    }

    p{
      font-size: 20px;
    }
    }

    .map-holder{
    width: 90%;
  }
}
`