import { Roboto, JetBrains_Mono, Roboto_Mono, Poppins } from "next/font/google";

const robotoRegular = Roboto({ subsets: ["latin"], weight: "400" });
const robotoMedium = Roboto({ subsets: ["latin"], weight: "500" });
const robotoMonoRegular = Roboto_Mono({ subsets: ["latin"], weight: "500" });
const jetbrainsMedium = JetBrains_Mono({ subsets: ["latin"], weight: "500" });
const poppinsRegular = Poppins({ subsets: ["latin"], weight: "400" });
const poppinsMedium = Poppins({ subsets: ["latin"], weight: "500" });

const headerFont = poppinsMedium;
const contentFont = poppinsRegular;
const navbarFont = poppinsRegular;
const subheaderFont = poppinsMedium;
const cardheaderFont = poppinsRegular;

export { headerFont, contentFont, navbarFont, subheaderFont, cardheaderFont };