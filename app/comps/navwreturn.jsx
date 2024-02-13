'use client'


import Image from "next/image";

import { useRouter } from "next/navigation"

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import logoImg from '../library/images/logo.png'
import { bgColor, pryColor } from "../library/colors";

import { MdOutlineArrowBack} from 'react-icons/md'



export const NavRet = () =>{
      //routing
   const router = useRouter()
    return(
        <StyledNav>
            <div className="returnToForm" onClick={()=>router.back()}>
            <MdOutlineArrowBack className="icon"/>
                <span>Back to form</span>

            </div>
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
    padding: 0 32px;
    align-items: center;
    justify-content: space-between;
z-index: 10;

.returnToForm{
   
    height: 48px;
    width: 220px;
    border-bottom: 3px solid ${bgColor};
    float: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: .2s ease-in;
    cursor: pointer;

    &:hover{
        width: 200px;
    }

    span{
        color: ${bgColor};
        font-size: 25px;
    }
}

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

@media (max-width: 768px){
    height:68px ;

    .logo{
        height: 45px;
        width: 45px;

        img{
            width: 40px;
        }
    }

    .returnToForm{
        width: 106px;
        height: 35px;

        span, .icon{
        font-size: 13px;
    }

        &:hover{
        width: 95px;
    }
    }
}
`