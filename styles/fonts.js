import { Roboto, JetBrains_Mono, Roboto_Mono } from "next/font/google";

const robotoRegular = Roboto({ subsets: ["latin"], weight: "400" });
const robotoMedium = Roboto({ subsets: ["latin"], weight: "500" });
const robotoMonoRegular = Roboto_Mono({ subsets: ["latin"], weight: "500" });
const jetbrainsMedium = JetBrains_Mono({ subsets: ["latin"], weight: "500" });

const headerFont = jetbrainsMedium;
const contentFont = robotoRegular;
const navbarFont = robotoRegular;
const subheaderFont = robotoMedium;
const cardheaderFont = robotoRegular;

export { headerFont, contentFont, navbarFont, subheaderFont, cardheaderFont };