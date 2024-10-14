import { Poppins } from "next/font/google";

const poppinsRegular = Poppins({ subsets: ["latin"], weight: "400" });
const poppinsMedium = Poppins({ subsets: ["latin"], weight: "500" });

const headerFont = poppinsMedium;
const contentFont = poppinsRegular;
const navbarFont = poppinsRegular;
const subheaderFont = poppinsMedium;
const cardheaderFont = poppinsRegular;

export { headerFont, contentFont, navbarFont, subheaderFont, cardheaderFont };
