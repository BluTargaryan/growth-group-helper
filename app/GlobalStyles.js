'use client'

import { playfairDisplay } from "./library/fonts"
import { openSans } from "./library/fonts"

import { createGlobalStyle } from "styled-components"

const bgColor= "#F8EBEB"
const pryColor = "#8A0000"

const GlobalStyles = createGlobalStyle`
*{
    margin:0 ;
    padding:0 ;
    box-sizing:border-box ;
}

body{
    background: ${bgColor};
    color: ${pryColor};
    width:100vw;
    height:auto ;
    overflow-x:hidden ;
    font-family: ${openSans.style.fontFamily};
    font-weight: 400;
    cursor:default ;
}

a{
    text-decoration:none ;
}

ul{
    list-style:none ;
}
`

export default GlobalStyles;