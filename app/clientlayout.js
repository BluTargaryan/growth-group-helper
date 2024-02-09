'use client'

import StyledComponentsRegistry from "./library/registry";
import GlobalStyles from "./GlobalStyles";

import { AnimatePresence } from "framer-motion";

export default function ClientLayout({ children }) {
    return (
     
      <html lang="en">
        <body>
          <StyledComponentsRegistry>
            <GlobalStyles/>
            <AnimatePresence 
      mode="wait"
>
            {children}
            </AnimatePresence>
          </StyledComponentsRegistry>
        </body>
      </html>
      
    );
  }