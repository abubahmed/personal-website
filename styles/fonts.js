import { Roboto, Roboto_Mono } from "next/font/google";

const robotoRegular = Roboto({ subsets: ["latin"], weight: "400" });
const robotoMonoRegular = Roboto_Mono({ subsets: ["latin"], weight: "400" });

const headerFont = robotoMonoRegular;
const contentFont = robotoRegular;
const navbarFont = robotoRegular;
const subheaderFont = robotoRegular;
const cardheaderFont = robotoRegular;

export { headerFont, contentFont, navbarFont, subheaderFont, cardheaderFont };