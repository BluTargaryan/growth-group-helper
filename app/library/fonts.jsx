import { Playfair_Display } from "next/font/google";
import { Open_Sans } from "next/font/google";

const playfairDisplay = Playfair_Display({
    weight: ["700"],   
    subsets: ["latin"],
  });

  const openSans = Open_Sans({
    weight: ["400", "500","600","700"],   
    subsets: ["latin"],
  });

  export {playfairDisplay,openSans}