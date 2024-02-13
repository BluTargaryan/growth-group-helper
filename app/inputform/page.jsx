'use client'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation } from "../animation";

import { useRouter } from "next/navigation"

import { Nav } from "../comps/nav";

const bgColor= "#F8EBEB"
const pryColor = "#8A0000"

import { openSans } from "../library/fonts"


export default function InputForm() {

  const routeToVenue = (e)=>{
    e.preventDefault()
    router.push(`/venue`)
  }
     //routing
   const router = useRouter()
  return (
    <motion.div
    key={'inputform'}
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit">
<Nav/>
<StyledForm>
<div className="hero-img">
  <img src='https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
  </div>
  <form className="hero" onSubmit={routeToVenue}>
   <h3>Please put in your names and postcode so we can help you find the nearest growth group</h3>
   <div className="form-inputs">
<input type="text" placeholder="First name"/>
<input type="text" placeholder="Last name"/>
<input type="text" placeholder="Postcode"/>
<input type="text" placeholder="E-mail"/>
   </div>

   <button>
    <span>Submit</span>
  </button>
  </form>
</StyledForm>
    </motion.div>
  );
}

const StyledForm = styled(motion.main)`
      display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  width: 100%;
  height: 610px;

  .hero-img{
  width: 40%;
  height: 90%;
  overflow: hidden;
  transition: all.2s ease-in;

  &:hover{
      width: 45%;
    }

  img{
    height: 100%;
    width: auto;
  }
}

.hero{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 58px;
    width: 45%;

    h3{
      font-size: 31px;
      font-weight: 600;
    }

    .form-inputs{
        display: flex;
        flex-wrap: wrap;
        gap: 36px;
        width: 100%;

        input{
            width: 300px;
            height: 50px;
            padding-left: 20px;
            background-color: transparent;
            border: none;
            border-bottom: 3px solid ${pryColor};
            color: ${pryColor};
            font-family: ${openSans.style.fontFamily} !important;
            font-size: 25px;

            &::placeholder{
                color: ${pryColor};
                font-family: ${openSans.style.fontFamily} !important;
            }
        

            &:focus{
                outline: none;
            }
        }
    }

    button{
      width: 50%;
      height: 78px;
      display: flex;
      justify-content: center;
      align-items: center;

    }
  }

  @media (max-width: 576px){
    padding: 32px 0;
    flex-direction: column;
    height: auto;
    gap: 37px;

    .hero-img{
      width: 85%;
      height: 284px;

    &:hover{
      width: 90%;
    }
    }

    .hero{
      height: auto;
    width: 90%;
    align-items: center;
    justify-content: start;
    gap: 37px;
    text-align: center;

      h3{
      font-size: 20px;
    }
    .form-inputs{

      input{
        width: 100%;
        padding-left: 0px;
        font-size: 16px;
        text-align: center;
      }
      
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
  }

  @media (min-width: 577px) and (max-width: 1200px){
    .hero-img{
      width: 40%;
      height: 300px;

    &:hover{
      width: 50%;
    }
    }

    .hero{
      height: auto;
    width: 50%;
    align-items: center;
    justify-content: start;
    gap: 37px;
    text-align: center;

      h3{
      font-size: 20px;
    }
    .form-inputs{

      input{
        width: 100%;
        padding-left: 0px;
        font-size: 16px;
        text-align: center;
      }
      
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
  }

  @media (min-width: 1201px){
.hero{
  h3{
    font-size: 25px;
  }
  .form-inputs{

input{
  width: 250px;
  font-size: 20px;
}

}
  button{
    height: 60px;
    span{
      font-size: 25px;
    }
  }
}
  }
`