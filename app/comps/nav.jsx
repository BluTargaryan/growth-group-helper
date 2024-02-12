'use client'


import Image from "next/image";

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import logoImg from '../library/images/logo.png'
import { bgColor, pryColor } from "../library/colors";

export const Nav = () =>{
    
    return(
        <StyledNav>
            <div className="logo">
<Image src={logoImg} alt="Logo image" />
            </div>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    width: 100%;
    height:95px ;
    background: ${pryColor};
    display: flex;
    align-items: center;
justify-content: center;
z-index: 10;

.logo{
    width: 70px;
    height: 70px;
    background-color:${bgColor} ;
    border-radius: 47px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        height: auto;
        width: 50px;
    }
}

@media (max-width: 425px){
    height:68px ;

    .logo{
        height: 45px;
        width: 45px;

        img{
            width: 40px;
        }
    }
}
`